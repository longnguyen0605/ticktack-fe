import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native"
import { color } from "@/theme/color";

import { NavArrowLeft } from "@/assets/icon/DesignPattern/NavArrowLeft";
import { Search } from "@/assets/icon/DesignPattern/Search";
import { Logo } from "@/assets/Logo";
import { StackNavigationProp } from "@react-navigation/stack";
import SuggestionParamList from "@/app/(suggestion)/paramList";
import { useNavigation } from "@react-navigation/native";


const SuggestionHeader = () =>{

    const navigator = useNavigation<StackNavigationProp<SuggestionParamList>>();

    const handleBack = () =>{
        navigator.goBack();
    }

    const handleSearch =  () =>{

    }
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={handleBack}>
                <NavArrowLeft />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <Logo />
            </View> 

            <TouchableOpacity style={styles.btnContainer} onPress={handleSearch}>
                <Search/>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 100,
        marginTop: 15,
        borderBottomWidth: 1,   
        borderColor: "#336D717F",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"  
             
    },

    btnContainer:{
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#E5E0E0",
        borderWidth: 1,
        borderRadius: 100,
        borderColor: "#E5E0E0"
        
    },

    logoContainer:{
    
    },




});

export default SuggestionHeader;