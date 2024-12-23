import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ShowTab from "./ShowTab";
import { color } from "@/theme/color";
import { textStyle } from "@/theme/textStyle";
import { Settings } from "@/assets/icon/DesignPattern/Settings";
import { Avatar, Accessory } from "react-native-elements";
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker'; 
import { Medal } from "@/assets/icon/DesignPattern/Medal";
import AppItem from "../AppItem";
import { ScrollView } from "react-native-gesture-handler";


interface IAchievementData{

}

interface IFavAppData{
    id: number,
    appName: string,
    logoURI:string,
    usingTime: number,
}

interface IUserData{
    userName: string,
    joinYear: number,
    achievementNum: number,
    achievementList?: undefined,
    avatarURI?:string,
    favAppList: IFavAppData[],  
}

const ProfileHome = () =>{

    const defaultAvatarURI = "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"

    const [avatarURI, setAvatarURI] =  useState(defaultAvatarURI);
    const [userData, setUSerData] = useState<IUserData>()
    

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

    const onSettingBtn = () =>{

    }

    const openFavScreen = () =>{

    }

    const openAchievementScreen = () =>{

    }

    const handleSetAvatar = () =>{
        pickImage()
    }

    //Load data
    useEffect(() => {
        const loadAvatar = async () => {
          
        };
        const loadUserData = async () =>{
            // Fetch user data

            const userData : IUserData={
                userName: "Nguyen Long",
                joinYear: 2023,
                achievementNum: 10,
                favAppList:[
                    {id: 0, appName: "Youtube", usingTime: 1, logoURI: "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"},
                    {id: 1, appName: "Facebook",usingTime: 2, logoURI: "https://png.pngtree.com/png-clipart/20181003/ourmid/pngtree-facebook-social-media-icon-facebook-logo-png-image_3654772.png"},
                    {id: 2, appName: "Tiktok", usingTime: 3, logoURI: "https://banner2.cleanpng.com/20240214/lgr/transparent-tiktok-logo-tiktok-logo-music-streaming-app-entert-tiktok-logo-bright-t-with-sleek-1710878326897.webp"},
                ]
            }
            //
            setUSerData(userData)
        }

        loadUserData();
      }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{...textStyle.title, ...styles.title}}>Profile</Text>
                <TouchableOpacity style={styles.settingBtn} onPress={onSettingBtn}>
                    <Settings />
                </TouchableOpacity>
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

            <ScrollView style={styles.showArea}>
                <ShowTab title="My Favourite Apps">
                    {userData?.favAppList.map((app, index)=> 
                        <AppItem id={app.id} appName={app.appName} logoURL={app.logoURI}
                                description={`Using time: ${app.usingTime} hours`}
                        />
                
                    )}
                </ShowTab>
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
        width: "100%",
        height: 100,
        flexDirection:"row",
    },

    info:{
        marginLeft: 30,
        height:"100%",
        flex: 1,
        justifyContent:"space-between"
    },
    
    showArea:{
        marginTop: 20,
        flexDirection:"column",
        width:"100%"
        
        
    }


})

export default ProfileHome