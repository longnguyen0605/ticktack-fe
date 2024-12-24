import ProfileHome from '@/components/profile/ProfileHome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import ProfileParamList from './paramList';
import FavouriteAppsScreen from './favouriteApps';
import AchievementsScreen from './achievements';
import { useEffect, useState } from 'react';



const Stack = createStackNavigator<ProfileParamList>();

const ProfileLayout = () => {
  const [initScreen, setInitScreen] = useState<keyof ProfileParamList | undefined>(undefined);

  const userLogedIn: ()=>boolean = () =>{
    return true;
  }

  useEffect(() => {
    if (userLogedIn()){
      setInitScreen("profileHome")
    }
    else{
      setInitScreen("profileNoLogin")
    }
  }, []);
 

  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            
        }}    
        initialRouteName={initScreen}
    >
        <Stack.Screen name='profileHome' component={ProfileHome}  />
        <Stack.Screen name='favouriteApps' component={FavouriteAppsScreen} />
        <Stack.Screen name='achievements' component={AchievementsScreen} />

    </Stack.Navigator>  
  );
}

const styles = StyleSheet.create({})

export default ProfileLayout;
