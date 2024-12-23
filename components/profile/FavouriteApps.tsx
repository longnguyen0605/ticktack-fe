import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native"
import { color } from "@/theme/color";

import { NavArrowLeft } from "@/assets/icon/DesignPattern/NavArrowLeft";
import { Search } from "@/assets/icon/DesignPattern/Search";
import { Logo } from "@/assets/Logo";
import { StackNavigationProp } from "@react-navigation/stack";
import SuggestionParamList from "@/app/(suggestion)/paramList";
import { useNavigation } from "@react-navigation/native";
import ProfileParamList from "@/app/(profile)/paramList";
import { textStyle } from "@/theme/textStyle";
import { useEffect, useState } from "react";
import AppItem from "../AppItem";


interface IFavAppData{
    id: number,
    appName: string,
    logoURI:string,
    usingTime: number,
}

const FavouriteApps = () =>{

    const [favApps, setFavApps] = useState<IFavAppData[]>();

    const navigator = useNavigation<StackNavigationProp<ProfileParamList>>();

    const handleBack = () =>{
        navigator.goBack();
    }

    useEffect(() => {
        const loadFavApps = async () =>{
            // Fetch user data

            const  favAppList : IFavAppData[] =[
                    {id: 0, appName: "Youtube", usingTime: 1, logoURI: "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"},
                    {id: 1, appName: "Facebook",usingTime: 2, logoURI: "https://png.pngtree.com/png-clipart/20181003/ourmid/pngtree-facebook-social-media-icon-facebook-logo-png-image_3654772.png"},
                    {id: 2, appName: "Tiktok", usingTime: 3, logoURI: "https://banner2.cleanpng.com/20240214/lgr/transparent-tiktok-logo-tiktok-logo-music-streaming-app-entert-tiktok-logo-bright-t-with-sleek-1710878326897.webp"},
                ]
            
            //
            setFavApps(favAppList) 
        }

        loadFavApps()
    }, []);
    


    return(
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.btnContainer} onPress={handleBack}>
                <NavArrowLeft />
            </TouchableOpacity>

            <Text style={{...textStyle.title,...styles.title}}>My Favourite Apps</Text>
            
        </View> 
        <ScrollView style={styles.contents}>
                {favApps?.map((app, index)=> 
                            <AppItem id={app.id} appName={app.appName} logoURL={app.logoURI}
                                    description={`Using time: ${app.usingTime} hours`}
                            />
                    
                        )}
            </ScrollView>    
        </View> 
    );

}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 25,
        flexDirection:"column"
    },
    headerContainer: {
        width: "100%",
        height: 100,
        marginTop: 15,
        
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    
    },

    btnContainer: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E5E0E0",
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "#E5E0E0",     
       
    },
   
    title: {
        fontSize: 26,
        marginLeft: 10,
    },
    contents:{
        width:"100%",
        
    }




});

export default FavouriteApps;