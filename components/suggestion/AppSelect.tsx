import { StyleSheet, Text,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SuggestionHeader from "./SuggestionHeader";
import AppItem from "./AppItem";
import { textStyle } from "@/theme/textStyle";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";


interface AppSelectProps{
    id: number;
}

interface IAppData{
    id: number,
    appName: string,
    logoURL: string
}

const AppSelect = (props: AppSelectProps) =>{

    const [appDataList , setAppDataList] = useState<IAppData[]>();
    
    const getAppDataList = () =>{

        // Fetch from API
        

        //
        setAppDataList([
            {id: 0, appName: "Youtube", logoURL: "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"},
            {id: 1, appName: "Facebook", logoURL: "https://png.pngtree.com/png-clipart/20181003/ourmid/pngtree-facebook-social-media-icon-facebook-logo-png-image_3654772.png"},
           {id: 2, appName: "Tiktok", logoURL: "https://banner2.cleanpng.com/20240214/lgr/transparent-tiktok-logo-tiktok-logo-music-streaming-app-entert-tiktok-logo-bright-t-with-sleek-1710878326897.webp"}
        ]);
    }
    useEffect(()=>{
        getAppDataList();
    }, []);
   

    return(
        <SafeAreaView style={styles.container}>
            <SuggestionHeader/>
            <View style={styles.titleContainer}><Text  style={{...textStyle.title,...styles.title}}>Choose your app</Text></View>
            <FlatList 
                style={styles.itemContainer}
                data={appDataList}
                renderItem={({item}) => <AppItem id={item.id} 
                                                    appName={item.appName} 
                                                    logoURL = {item.logoURL}
                                                />}
            />
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 25,
        flexDirection: "column",
        alignItems: "center",
        flex: 1
    },
    titleContainer:{
        alignItems:"center",
        width:"100%",
        
        marginTop:10,
        marginBottom: 20,
    },

    title:{
        fontSize:27,
        
    },
    itemContainer:{
        width:"100%"
    }
});


export default AppSelect;