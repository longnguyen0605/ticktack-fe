import { RouteProp } from "@react-navigation/native";
import SuggestionParamList from "./_paramList";
import AppEdit from "@/components/suggestion/AppEdit";


type AppEditScreenRouteProp = RouteProp<SuggestionParamList, 'appEdit'>;


export default function AppEditScreen({route} : {route: AppEditScreenRouteProp}){
    const {categoryId} = route.params;
    return(
        <AppEdit id={categoryId}/>
 
    )
}