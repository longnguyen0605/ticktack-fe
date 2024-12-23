import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import SuggestionHeader from "./SuggestionHeader";
import { useState } from "react";

interface AppPlanningProps{
    id: number
}

const AppPlanning = (props: AppPlanningProps) =>{
    const [usingTime, setUsingTime] = useState();
    

    return(
        <SafeAreaView style={styles.container}>
            <SuggestionHeader />    
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
});


export default AppPlanning;