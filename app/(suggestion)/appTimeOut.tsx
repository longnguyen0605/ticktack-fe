import AppTimeOut from "@/components/suggestion/AppTimeOut"
import { RouteProp } from "@react-navigation/native";
import SuggestionParamList from "./_paramList";

type AppTimeOutScreenRouteProp = RouteProp<SuggestionParamList, 'appTimeout'>;
const AppTimeOutScreen = ({route} : {route: AppTimeOutScreenRouteProp}) =>{
    const {appId} = route.params;

    return (
        <AppTimeOut appId={appId}/>
    )
}

export default AppTimeOutScreen