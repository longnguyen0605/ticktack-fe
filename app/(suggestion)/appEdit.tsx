import { RouteProp } from "@react-navigation/native";
import SuggestionParamList from "./paramList";
import AppEdit from "@/components/suggestion/AppEdit";


type AppEditScreenRouteProp = RouteProp<SuggestionParamList, 'appEdit'>;


export default function AppEditScreen({route} : {route: AppEditScreenRouteProp}){
    const {id} = route.params;
    return(
        <AppEdit id={id}/>
 
    )
}