import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


interface AppSelectParam{
    id: number;
}

const AppSelect = (props: AppSelectParam) =>{

    return(
        <SafeAreaView>
            <Text>This is App Select, and ID is {props.id}</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});


export default AppSelect;