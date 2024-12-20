import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import SuggestionLayout from "../(suggestion)/_layout";




const Tab = createBottomTabNavigator();

export default function TabLayout() {
  

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
    }}
    >
        <Tab.Screen name="home" component={HomeScreen}/>
        <Tab.Screen name="suggestion" component={SuggestionLayout}/>
    </Tab.Navigator>    
  );
}
