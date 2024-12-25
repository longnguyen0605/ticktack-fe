import AppTimer from "@/components/suggestion/AppTimer";
import SuggestionParamList from "./_paramList";
import { RouteProp } from "@react-navigation/native";

type AppTimerScreenRouteProp = RouteProp<SuggestionParamList, 'appTimer'>;
const AppTimerScreen = ({route} : {route: AppTimerScreenRouteProp}) =>{
    const props = route.params

    return <AppTimer 
                appId={props.appId} 
                appLogoURL={props.appLogoURL} 
                usingTime={props.usingTime}
                activity={props.activity}
            />
}

export default AppTimerScreen;