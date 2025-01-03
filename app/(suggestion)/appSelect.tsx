import { RouteProp } from "@react-navigation/native";
import { Text } from "react-native";
import SuggestionParamList from "./_paramList";
import AppSelect from "@/components/suggestion/AppSelect";


type AppSelectScreenRouteProp = RouteProp<SuggestionParamList, 'appSelect'>;


export default function AppSelectScreen({route} : {route: AppSelectScreenRouteProp}){
    const {categoryId} = route.params;
    return(
        <AppSelect id={categoryId}/>
 
    )
}