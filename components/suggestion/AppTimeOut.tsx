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
import { Medal } from "@/assets/icon/DesignPattern/Medal";
import { MediaVideoList } from "@/assets/icon/DesignPattern/MediaVideoList";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AppTimeOutProps{
    appId:string, 
    
}

const AppTimeOut = ( props: AppTimeOutProps) =>{
    
    const [userData, setUserData] = useState<any>(null);

    const navigator = useNavigation<StackNavigationProp<SuggestionParamList>>();

    const handleRecieve = () =>{
        navigator.navigate("categoryMenu");
    }

    const handleDouble = () =>{
        // console.log("Hello youtube")
    }

    const handleContinue = () =>{
        navigator.navigate("appPlanning", {appId:props.appId})
    }


    const fetchMedal =  async (token: string|null) =>{
        const response = await fetch(`https://ticktak-backend.onrender.com/user`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            setUserData(data.data);
            console.log(data.data)
            
          } else {
            
            throw new Error('Failed to fetch AppDataList');
            
          }
    }

    const updateUserMedal = async () =>{
        const token = await AsyncStorage.getItem('jwtToken');
        
        try {

            await fetchMedal(token);
            if (!userData) throw Error("Fetch error")
            const response1 = await fetch(`https://ticktak-backend.onrender.com/user`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: userData.name,
                    avatarURL: userData.avatarURL,
                    medal: userData.medal + 10,    
                }),
              });
          
              if (!response1.ok) {
                throw new Error('Failed to update user medal on the server');
              }
            
          } catch (error) {
            
            console.log(error);
          }
    

    }


    useEffect(()=>{
        updateUserMedal()
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <SuggestionHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.quoteContainer}>
                <Text style={{...textStyle.title,fontSize: 24}}>Your time is out</Text>
            </View>
            <View style={styles.appLogoContainer}>
                <Image 
                    source={require('../../assets/images/TimeOutPic.png')}
                    style={styles.logo}
                />
            </View>        
            <View style={styles.infoContainer}>
                <Text style={styles.sectionText}>Your Reward</Text>
                <View style={styles.actLogo}>
                    <Text style={{...textStyle.subText, color:"#FFAA00"}}>10</Text>
                    <Medal stroke="#FFAA00" />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={{...styles.btn, backgroundColor:"#43B75D"}} onPress={handleRecieve}>
                        <Text style={styles.btnText}>Stop and Receive</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.btn, backgroundColor:"#FFAA00", flexDirection:"row"}}
                        onPress={handleDouble}
                    >
                        <MediaVideoList stroke="white"/>
                        <Text style={{...styles.btnText, marginLeft :10,}}>Double it</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.btn, backgroundColor:"#EE443F"}}
                        onPress={handleContinue}
                    >
                        <Text style={styles.btnText}>Continue Using</Text>
                    </TouchableOpacity>
                </View>
                
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
        width: 200,
        height: 150,
    },
infoContainer:{
        justifyContent:"flex-start",
        alignItems:"center",
        alignSelf:"center",
        backgroundColor: "white",
        borderRadius: 12,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        width:"90%",
        borderWidth: 0.1,
        height: 270,
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
        width:"100%",
        textAlign:"center"
    },
    actLogo:{
        width: 70,
        height: 30,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal: 8,

        
        borderRadius: 12,
        marginTop: 10, 
        marginBottom: 10, 
    },
    btnContainer:{
        justifyContent:"space-between",
        height: 150,
    },
    btn:{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        width: 170,
        height: 40,
        borderWidth: 0.1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 12,
        
    },

    btnText:{
        textAlign:"center",
        color:"white"
    }
    
})

export default AppTimeOut;

