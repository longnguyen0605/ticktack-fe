import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native"
import { color } from "@/theme/color";

import { NavArrowLeft } from "@/assets/icon/DesignPattern/NavArrowLeft";
import { Search } from "@/assets/icon/DesignPattern/Search";
import { Logo } from "@/assets/Logo";
import { StackNavigationProp } from "@react-navigation/stack";
import SuggestionParamList from "@/app/(suggestion)/_paramList";
import { useNavigation } from "@react-navigation/native";

interface SuggestionHeaderProps{
    searching?: boolean,
}
const SuggestionHeader = (props: SuggestionHeaderProps) =>{

    const navigator = useNavigation<StackNavigationProp<SuggestionParamList>>();

    const handleBack = () =>{
        navigator.goBack();
    }

    const handleSearch =  () =>{
        if (!props.searching) return;
        
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={handleBack}>
                <NavArrowLeft />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <Logo />
            </View>    

            {props.searching ? (
                <TouchableOpacity style={styles.btnContainer}>
                    <Search />
                </TouchableOpacity>
            ) : (
                <View style={styles.placeholder} />
            )}
        </View> 
    );

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        marginTop: 15,
        borderBottomWidth: 1,
        borderColor: "#336D717F",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
     
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
    placeholder:{
        width: 50,
        height: 50, 
    },

    logoContainer: {
    
        //justifyContent:"center",
        alignItems:"center",
    },




});

export default SuggestionHeader;