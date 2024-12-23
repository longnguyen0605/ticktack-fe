import { StyleSheet, Text,TouchableOpacity,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SuggestionHeader from "./SuggestionHeader";
import AppItem from "../AppItem";
import { textStyle } from "@/theme/textStyle";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { EditPencil } from "@/assets/icon/DesignPattern/EditPencil";
import { color } from "@/theme/color";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import SuggestionParamList from "@/app/(suggestion)/paramList";


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
    const navigator = useNavigation<StackNavigationProp<SuggestionParamList>>();
    
    const getAppDataList = () =>{

        // Fetch from API
        

        //
        setAppDataList([
            {id: 0, appName: "Youtube", logoURL: "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"},
            {id: 1, appName: "Facebook", logoURL: "https://png.pngtree.com/png-clipart/20181003/ourmid/pngtree-facebook-social-media-icon-facebook-logo-png-image_3654772.png"},
           {id: 2, appName: "Tiktok", logoURL: "https://banner2.cleanpng.com/20240214/lgr/transparent-tiktok-logo-tiktok-logo-music-streaming-app-entert-tiktok-logo-bright-t-with-sleek-1710878326897.webp"},
           
           
        ]);
    }
    useEffect(()=>{
        getAppDataList();
    }, []);
   
    const handleEdit = () =>{
        navigator.navigate('appEdit', {categoryId:props.id})
    }

    return(
        <SafeAreaView style={styles.container}>
            <SuggestionHeader searching/>
            <View style={styles.titleContainer}><Text  style={{...textStyle.title,...styles.title}}>Choose your app</Text></View>
            <FlatList 
                style={styles.itemContainer}
                data={appDataList}
                renderItem={({item}) => 
                    <AppItem 
                        id={item.id} 
                        appName={item.appName} 
                        logoURL = {item.logoURL}
                        description="Recommendation: 1 hour per day"
                        mode="select"
                    />
                }
            />
            <TouchableOpacity style={styles.editBtn} onPress={handleEdit}>
                <EditPencil stroke={"#FFFFFF"}/>
            </TouchableOpacity>
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
    },

    editBtn:{
        position: "absolute",
        bottom: 10,
        right: 10,
        borderRadius:100,
        borderWidth: 1,
        borderColor: color.buttonBg,    
        width: 50,
        height: 50,
        backgroundColor: color.buttonBg,    
        justifyContent: "center",
        alignItems: "center"
    }
});


export default AppSelect;