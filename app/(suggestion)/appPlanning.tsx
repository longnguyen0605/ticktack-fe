import { RouteProp } from "@react-navigation/native";
import { Text } from "react-native";
import SuggestionParamList from "./paramList";



type AppSelectScreenRouteProp = RouteProp<SuggestionParamList, 'appSelect'>;


export default function AppPlanningScreen(){
    //const {id} = route.params;
    return(
        <Text>Hello</Text>
 
    )
}