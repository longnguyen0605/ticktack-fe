import { RouteProp } from "@react-navigation/native";
import { Text } from "react-native";
import SuggestionParamList from "./_paramList";
import AppPlanning from "@/components/suggestion/AppPlanning";



type AppPlanningScreenRouteProp = RouteProp<SuggestionParamList, 'appPlanning'>;


export default function AppPlanningScreen({route} : {route:AppPlanningScreenRouteProp}){
    const {appId} = route.params;
    return(
        <AppPlanning id={appId} />
 
    )
}