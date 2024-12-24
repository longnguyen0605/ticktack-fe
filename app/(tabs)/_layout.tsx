import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import SuggestionLayout from "../(suggestion)/_layout";
import Dashboard from "../(dashboard)/dashboard";
import { StyleSheet } from "react-native";
import { HomeSimpleDoor } from "@/assets/icon/DesignPattern/HomeSimpleDoor";
import { ReportColumns } from "@/assets/icon/DesignPattern/ReportColumns";
import ProfileLayout from "../(profile)/_layout";
import { ProfileCircle } from "@/assets/icon/DesignPattern/ProfileCircle";

import { Reports } from "@/assets/icon/DesignPattern/Reports";


const Tab = createBottomTabNavigator();

export default function TabLayout() {
  

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
    }}
    >
        <Tab.Screen name="home" component={HomeScreen}
          options={{
            title:"Home",
            tabBarIcon: ({ color, size }) => (
              <HomeSimpleDoor  width={size} height={size} stroke={color} />
            ),
          }}
        />
        <Tab.Screen name="suggestion" component={SuggestionLayout}
          options={{
            title:"Suggestion",
            tabBarIcon: ({ color, size }) => (
              <ReportColumns  width={size} height={size} stroke={color} />
            ),
          }}
        />          
        
        <Tab.Screen name="Reports" component={Dashboard}
          options={{
            title:"Statistic",
            tabBarIcon: ({ color, size }) => (
              <Reports  width={size} height={size} stroke={color} />
            ),
          }}
        />
        <Tab.Screen name="profile" component={ProfileLayout}
          options={{
            title:"Profile",
            tabBarIcon: ({ color, size }) => (
              <ProfileCircle  width={size} height={size} stroke={color} />
            ),
          }}
        />
    </Tab.Navigator>    
  );
}

const styles = StyleSheet.create({});
