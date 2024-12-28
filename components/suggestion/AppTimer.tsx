import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SuggestionHeader from "./SuggestionHeader";
import { textStyle } from "@/theme/textStyle";
import { ScrollView } from "react-native-gesture-handler";
import { YellowDot } from "@/assets/icon/DesignPattern/YellowDot";
import { color } from "@/theme/color";
import { useEffect, useRef, useState } from "react";
import BackgroundTimer from 'react-native-background-timer';
import SuggestionParamList from "@/app/(suggestion)/_paramList";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "expo-router";

interface AppTimerProps{
    appId:string, 
    appLogoURL:string,
    usingTime: number,
    activity: string,
}

const AppTimer = (props: AppTimerProps) =>{
    const [currMin, setCurrMin] = useState(props.usingTime);
    const [currSec, setCurrSec] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    const navigator = useNavigation<StackNavigationProp<SuggestionParamList>>();

    const handleTimeOut = () =>{
        navigator.replace('appTimeout', {appId: props.appId});      
    }

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning) {
          interval = setInterval(() => {
            setCurrSec((prevSec) => {
              if (prevSec <= 0) {
                if (currMin <= 0) {
                  clearInterval(interval!); 
                  setIsRunning(false);
                  return 0; 
                }
                setCurrMin((prevMin) => prevMin - 1); 
                return 59; 
              }
              return prevSec - 1; 
            });
          }, 1000);
        } else {
          if (interval) {
            clearInterval(interval); 
          }
        }
    
        return () => {
          if (interval) {
            clearInterval(interval); 
          }
        };
      }, [isRunning, currMin]); 
    
      useEffect(() => {
        if (currMin <= 0 && currSec <= 0) {
          handleTimeOut();
        }
      }, [currMin, currSec]); 
      
      
    const handleStop = () =>{
        navigator.goBack();
    }
    
    

    return (
        <SafeAreaView style={styles.container}>
            <SuggestionHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
            <View style={styles.quoteContainer}>
                <Text style={{...textStyle.title,fontSize: 14}}>One day, all your hard work will pay off</Text>
            </View>
            <View style={styles.appLogoContainer}>
                <Image 
                    source={{uri: props.appLogoURL}}
                    style={styles.logo}
                />
            </View>
        
            <View style={styles.timerContainer}>
                <Text style={styles.sectionText}>Your time</Text>
                <View style={styles.actLogo}>
                    <YellowDot />
                    <Text>{props.activity}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={{...textStyle.title, fontSize:60, fontWeight:"semibold"}}>{currMin.toString()}:{currSec.toString()}</Text>
                </View>
                <TouchableOpacity 
                    style={{...styles.actLogo, 
                        justifyContent:"center", 
                        backgroundColor:"white",
                        borderColor:"black",
                        borderWidth: 1,
                    }}
                    onPress={handleStop}
                >
                    <Text>Stop</Text>
                </TouchableOpacity>
            </View>
            
            
            
            </ScrollView>
            
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 25,
    },

    quoteContainer:{
        
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "white",
        borderRadius: 12,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        width:  "100%",
        height: 45, 
        marginRight: 16,
        
    },
    appLogoContainer:{
      
        width: "100%",
        height: 150,
        justifyContent:"center",
        alignItems:"center"
       
    },
    logo:{
        width: 100,
        height: 100,
    },
    timerContainer:{
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor: "white",
        borderRadius: 12,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        width:"100%",
        borderWidth: 1,
        height: 300,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    timeContainer:{
        width:"100%",
        height: 140,

        justifyContent:"center",
        alignItems:"center",
    },

    sectionText:{
        ...textStyle.title,
        fontSize: 20,
        marginBottom: 5,
        width:"100%"
    },
    actLogo:{
        width: 70,
        height: 30,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        backgroundColor:color.primaryBg,
        borderRadius: 12,
        marginTop: 10,  
    },
    btn:{

    }
    
})

export default AppTimer;