import { FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native"
import { color } from "@/theme/color";

import { NavArrowLeft } from "@/assets/icon/DesignPattern/NavArrowLeft";
import { Search } from "@/assets/icon/DesignPattern/Search";
import { Logo } from "@/assets/Logo";
import { StackNavigationProp } from "@react-navigation/stack";
import SuggestionParamList from "@/app/(suggestion)/_paramList";
import { useNavigation } from "@react-navigation/native";
import ProfileParamList from "@/app/(profile)/_paramList";
import { textStyle } from "@/theme/textStyle";
import { useEffect, useState } from "react";
import AppItem from "../AppItem";
import AchievementItem from "./AchievementItem";


interface IUserAchievements{
    id: number,
    name : string,
    threshHold: number, 
    currProcess: number,
}
const UserAchievements = () =>{

    const [achievements, setAchievements] = useState<IUserAchievements[]>();

    const navigator = useNavigation<StackNavigationProp<ProfileParamList>>();

    const handleBack = () =>{
        navigator.goBack();
    }

    useEffect(() => {
        const loadFavApps = async () =>{
            // Fetch user data

            const  achievementList : IUserAchievements[] = [
                {id: 0, name: "10 hours study", threshHold: 10, currProcess: 10, },
                {id:1, name: "20 hours study", threshHold: 20, currProcess: 10, },
            ]
            
            //
            setAchievements(achievementList) 
        }

        loadFavApps()
    }, []);
    


    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.btnContainer} onPress={handleBack}>
                <NavArrowLeft />
            </TouchableOpacity>

            <Text style={{...textStyle.title,...styles.title}}>My Achievements</Text>
            
        </View> 
        
        <FlatList
            data={achievements}
            style={styles.contents}
            renderItem={({item}) => 
                <AchievementItem 
                    id={item.id} 
                    achievementName={item.name} 
                    threshHold={item.threshHold}
                    currProcess={item.currProcess}
            />}
        >
        </FlatList>  
           
        </SafeAreaView> 
    );

}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 25,
        flexDirection:"column",
        backgroundColor:"white",
        flex:1
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

export default UserAchievements;