import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShowTab from "./ShowTab";
import { color } from "@/theme/color";
import { textStyle } from "@/theme/textStyle";
import { Avatar, Accessory } from "react-native-elements";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker'; 
import { Medal } from "@/assets/icon/DesignPattern/Medal";
import AppItem from "../AppItem";
import { ScrollView } from "react-native-gesture-handler";
import ProfileParamList from "@/app/(profile)/_paramList";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, useRouter } from "expo-router";
import AchievementItem from "./AchievementItem";
import SettingPopupMenu from "./SettingPopupMenu";
import { MenuProvider } from "react-native-popup-menu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";




interface IFavAppData{
    id: string,
    appName: string,
    logoURI:string,
    usingTime: number,
}

interface IAchievement{
    id: string,
    name: string,
    threshHold: number,
    currProcess: number,

}

interface IUserData{
    userName: string,
    joinYear: number,
    achievementNum: number,
    achievementList: IAchievement[],
    avatarURI?:string,
    favAppList: IFavAppData[],  
}

const ProfileHome = () =>{

    const defaultAvatarURI = "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"

    const [avatarURI, setAvatarURI] =  useState(defaultAvatarURI);
    const [userData, setUSerData] = useState<IUserData>()
    
    const navigator = useNavigation<StackNavigationProp<ProfileParamList>>();
    const router = useRouter()

    const fakeFav =[
        {id: "0", appName: "Youtube", usingTime: 1, logoURI: "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"},
        {id: "1", appName: "Facebook",usingTime: 2, logoURI: "https://png.pngtree.com/png-clipart/20181003/ourmid/pngtree-facebook-social-media-icon-facebook-logo-png-image_3654772.png"},
        {id: "2", appName: "Tiktok", usingTime: 3, logoURI: "https://banner2.cleanpng.com/20240214/lgr/transparent-tiktok-logo-tiktok-logo-music-streaming-app-entert-tiktok-logo-bright-t-with-sleek-1710878326897.webp"},
    ]

    const fakeAchi = [
        {id: "0",name: "10 hours study", threshHold: 10, currProcess: 10, },
        {id:"1", name: "20 hours study", threshHold: 20, currProcess: 10, },
    ]

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
          aspect: [1, 1],
        });
    
        if (!result.canceled) {
          setAvatarURI(result.assets[0].uri);
        }
      };

    const handleLogout = async () => {
        await AsyncStorage.clear();
        router.navigate('/(auth)/login');
    }
      
    const handleContact = () =>{
        router.navigate('/(contact)/contactUs');
    }

    const openFavScreen = () =>{
        navigator.push("favouriteApps");
    }

    const openAchievementScreen = () =>{
        navigator.push("achievements");
    }

    const handleSetAvatar = () =>{
        pickImage()
    }


    const fetchUser =  async () =>{
        const token = await AsyncStorage.getItem('jwtToken');
        const response = await fetch(`https://ticktak-backend.onrender.com/user`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            // interface IUserData{
            //     userName: string,
            //     joinYear: number,
            //     achievementNum: number,
            //     achievementList: IAchievement[],
            //     avatarURI?:string,
            //     favAppList: IFavAppData[],  
            // }
            setUSerData({
                userName: data.data.name,
                joinYear: new Date(data.data.createdAt).getFullYear(),
                achievementNum: data.data.medal,
                favAppList: fakeFav,
                achievementList: fakeAchi
            });
      
            
          } else {
            
            throw new Error('Failed to fetch AppDataList');
            
          }
    }
    
    //Load data
    useEffect(() => {
        fetchUser();
      }, []);


    useFocusEffect(
        React.useCallback(() => {
            fetchUser(); 
        }, [])
        );
    return (
        <MenuProvider>
        <SafeAreaView style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={{...textStyle.title, ...styles.title}}>Profile</Text>
                {/* <TouchableOpacity style={styles.settingBtn} onPress={onSettingBtn}>
                    <Settings />
                </TouchableOpacity> */}
                <SettingPopupMenu 
                    handleContact={handleContact}
                    handleLogout={handleLogout}
                />
            </View>
            <View style={styles.infoContainer}>
                <Avatar 
                    rounded
                    size={90}
                    title="Avatar"
                    source={{
                        uri:avatarURI
                    }}                           
                >
                    <Accessory  
                        onPress={handleSetAvatar}
                        size={20}
                        style={{width:30, height:30, borderRadius:100, justifyContent:"center", alignItems:"center", backgroundColor:color.grayBg}}
                        iconStyle={{color:"black"}}
                    />
                    
                </Avatar >
                <View style={styles.info}>
                    <Text 
                        numberOfLines={1}
                        style={{
                            ...textStyle.title,
                            fontSize:25,
                        }}
                    >
                        {userData?.userName}
                    </Text>
                    <Text
                        style={{
                            ...textStyle.subText,
                            
                        }}
                    >
                        Joined at {userData?.joinYear}
                    </Text>
                    <View 
                        style={{
                            flexDirection:"row",
                            alignItems:"center"
                        }}
                    >
                        <Medal stroke="#FFAA00"/>
                        <Text style={{color:"#FFAA00"}}>{userData?.achievementNum}</Text>
                    </View>
                </View>
            </View>
            
            <ScrollView style={styles.showArea} showsVerticalScrollIndicator={false}>
                
                <View style={styles.tabContainer}>
                    <ShowTab title="My Achievement" onOpenBtn={openAchievementScreen}>
                        {userData?.achievementList.slice(0, 3).map((achive, index)=> 
                            <AchievementItem key={index} id={achive.id} achievementName={achive.name} 
                                    threshHold={achive.threshHold} currProcess={achive.currProcess}
                            />
                    
                        )}
                    </ShowTab>
                </View>

                <View style={styles.tabContainer}>
                    <ShowTab title="My Favourite Apps" onOpenBtn={openFavScreen}>
                        {userData?.favAppList.slice(0, 3).map((app, index)=> 
                            <AppItem key={index} id={app.id} appName={app.appName} logoURL={app.logoURI}
                                    description={`Using time: ${app.usingTime} hours`}
                            />
                    
                        )}
                    </ShowTab>
                </View>
                
            </ScrollView>
        </SafeAreaView>
        </MenuProvider>
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
    titleContainer:{
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:20,
    },
    title:{
        
        fontSize: 30,
    },

    settingBtn:{
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: color.grayBg,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: color.grayBg,

    },
    infoContainer:{
        height: 100,
        flexDirection:"row",
    },

    info:{
        marginLeft: 30,
        flex: 1,
        justifyContent:"space-between"
    },
    
    showArea:{
        marginTop: 5,
        flexDirection:"column",
        width:"100%",
    },
    tabContainer:{
        marginTop: 16,
        padding: 5
    }


})

export default ProfileHome