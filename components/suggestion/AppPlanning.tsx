import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Settings, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SuggestionHeader from "./SuggestionHeader";
import { useEffect, useState } from "react";
import AppItem from "../AppItem";
import SuggestionParamList from "@/app/(suggestion)/_paramList";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "expo-router";

import SlidePicker from "react-native-slidepicker";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { color } from "@/theme/color";
import { textStyle } from "@/theme/textStyle";
import { ScrollView } from "react-native-gesture-handler";
import { Timer } from "@/assets/icon/DesignPattern/Timer";
import { YellowDot } from "@/assets/icon/DesignPattern/YellowDot";
import { SmartphoneDevice } from "@/assets/icon/DesignPattern/SmartphoneDevice";
import { Medal } from "@/assets/icon/DesignPattern/Medal";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AppPlanningProps{
    id: string,
    
}


interface IAppData{
    id: string,
    appName: string,
    logoURL: string,
    maxUsingTime?:number,
}

interface ITimePickData{
    label: string,
    value: number,
}

type AcitityType = "Relax" | "Study" | "Other"

const AppPlanning = (props: AppPlanningProps) =>{
    const [usingTime, setUsingTime] = useState<number>(5);
    const [currActivity, setCurrActivity] = useState<AcitityType>("Relax");
    const [timeList, setTimeList] = useState<Item[]>();

    const [appData , setAppData] = useState<IAppData>({id: "-1", appName: "", maxUsingTime: 0, logoURL: ""} );
    const navigator = useNavigation<StackNavigationProp<SuggestionParamList>>();
    
    const handleSelectAct = (act:AcitityType) => {
        setCurrActivity(act)
    }
    
    const getAppData = (data: any) =>{

    
        const updatedData =({
            id: props.id,
            appName: data.name,
            logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAMz342ZIAScN8qmLsOXuv4nuYbh3pMK2jA&s"
          
          });
        setAppData(updatedData);

        //
        // setAppData(
        //     {id: "0", appName: "Youtube", maxUsingTime: 60, logoURL: "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"},    
        // );
    }

    const fetchAppDatta = async () =>{
        const token = await AsyncStorage.getItem('jwtToken');
        
        try {
            const response = await fetch(`https://ticktak-backend.onrender.com/my-app/${props.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
      
            if (response.ok) {
              const data = await response.json();
              getAppData(data.data)
              
            } else {
              
              throw new Error('Failed to fetch AppDataList');
              
            }
            
          } catch (error) {
            
            console.error('Error fetching AppDataList:', error);
          }
    
    }


    
    useEffect(()=>{
        
        fetchAppDatta();
        

    }, []);

    
    const getTimeList: () => Item[] = () =>{
       // if (appData.maxUsingTime) {
            const temp: Item[] = [];
            for (let i = 10; i <= 60; i+=5) {
                temp.push({ label: `${i} MIN`, value: i });
            }
            //if (appData.maxUsingTime % 5 !=0) temp.push({ label: `${appData.maxUsingTime} MIN`, value: appData.maxUsingTime });
            return temp
        //}
        return [];
    }
    
        
    const handleStart = () =>{
        navigator.navigate("appTimer", 
            {
                appId: appData.id, 
                appLogoURL:appData.logoURL,
                usingTime:usingTime,
                activity: currActivity,
            }
        )
    }  

    return(
        <SafeAreaView style={styles.container}>
            <SuggestionHeader />
            <ScrollView showsVerticalScrollIndicator={false}>
            <AppItem 
                id={props.id}
                appName={props.id}
                logoURL={appData?.logoURL}
                description="Recommendation: 1 hour per day"
                bgColor="white"
                height={100}

            />
            <View style={styles.selectContainer}>
                <Text style={styles.sectionText}>Activity</Text>
                <View style={styles.actContainer}>
                    <TouchableOpacity 
                        style={{...styles.actSelect, 
                            backgroundColor: currActivity=="Relax"?color.primaryBg:"white"
                        }} 
                        onPress={()=>handleSelectAct("Relax")}
                    >
                        <Text>Relax</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{...styles.actSelect, 
                            backgroundColor: currActivity=="Study"?color.primaryBg:"white"
                        }} 
                        onPress={()=>handleSelectAct("Study")}
                    >
                        <Text>Study</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{...styles.actSelect, 
                            backgroundColor: currActivity=="Other"?color.primaryBg:"white"
                        }} 
                        onPress={()=>handleSelectAct("Other")}
                    >
                        <Text>Other</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.sectionText}>Using Time</Text>
                <Image 
                        source={require("../../assets/images/ClockWithLine.png")}  
                        style={styles.clockPic}
                />
                <RNPickerSelect 
                    onValueChange={(value) =>setUsingTime(value)}
                    items={getTimeList()}
                    placeholder={{ label: '5 MIN', value: '5' }}
                />

            </View>
            <View style={styles.finishContainer}>
                <Text style={styles.sectionText}>Finish Planing</Text>
                <View style={{flexDirection:"row", height: 90}}>
                    <Image 
                        style={{width: 90, height:90}}
                        source={require('../../assets/images/Planning.png')}
                    />
                    <View style={{
                            flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start",
                            flex: 1,
                        }}>
                        <View style={{
                            flexDirection:"row", justifyContent:"center", alignItems:"center",

                        }}>
                            <Timer/>
                            <Text style={{marginLeft: 7}}>{usingTime}</Text>
                        </View>

                        <View style={{
                            flexDirection:"row", justifyContent:"center", alignItems:"center",
                            marginLeft: 6,
                        }}>
                            <YellowDot/>
                            <Text style={{marginLeft: 7}}>{currActivity}</Text>
                        </View>

                        <View style={{
                            flexDirection:"row", justifyContent:"center", alignItems:"center",

                        }}>
                            <SmartphoneDevice />
                            <Text style={{marginLeft: 7}} numberOfLines={1}>{appData.appName}</Text>
                        </View>
                    </View>
                    <View style={{
                            justifyContent:"space-between", alignItems:"center",
                            flex: 1.2,
                        }}>
                        <TouchableOpacity style={styles.btn} onPress={handleStart}>
                            <Text style={{...styles.sectionText, fontSize:17,}}>Start</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={{fontSize: 14}}>Cost</Text>
                            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                                <Text style={{fontSize: 14, color:"#FFAA00"}}>10</Text>
                                <Medal stroke="#FFAA00"/>
                            </View>
                        </View>
                    </View>
                </View>
                
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 25,
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        backgroundColor:"white"
    },
    selectContainer:{
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        width:"100%"
        
    },
    actContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      width:"100%",
      //borderWidth: 1,
      height: 55, 
      marginTop: 10, 
      marginBottom: 10,
    },
    actSelect:{
        
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
        width:80,
        

    },
    clockPic:{
        width: "100%",
        height: 30,
        marginTop: 10,
        marginBottom: 10,
    },

    finishContainer:{
 
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        width:"100%"
        
    },
    sectionText:{
        ...textStyle.title,
        fontSize: 20,
        marginBottom: 5,
    },
    btn:{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        backgroundColor: color.primaryBg,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        height:40,
        borderRadius: 12,
    }

});


export default AppPlanning;