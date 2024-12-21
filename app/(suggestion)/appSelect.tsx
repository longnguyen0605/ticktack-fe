import { Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import SuggestionParamList from "./paramList";
import AppSelect from "@/components/suggestion/appSelect";


type AppSelectScreenRouteProp = RouteProp<SuggestionParamList, 'appSelect'>;


export default function AppSelectScreen({route} : {route: AppSelectScreenRouteProp}){
    const {id} = route.params;
    return(
        <AppSelect id={id}/>
    )
}