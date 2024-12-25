import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import ProfileParamList from './_paramList';
import FavouriteAppsScreen from './favouriteApps';
import AchievementsScreen from './achievements';
import { useEffect, useState } from 'react';
import ProfileNoLoginScreen from './profileNoLogin';
import ProfileHomeScreen from './profileHome';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createStackNavigator<ProfileParamList>();

const ProfileLayout = () => {
  const [initScreen, setInitScreen] = useState<keyof ProfileParamList | undefined>(undefined);

  const userLogedIn = async () =>{
    const token = await AsyncStorage.getItem('jwtToken');
    console.log(token);
    if (token) return true;
    return false;
  }

  useEffect(() => {
    if (userLogedIn()){
       setInitScreen("profileHome")
    }
    else{
      setInitScreen("profileNoLogin")
    }
  }, []);
 
  //
  if (!initScreen) {
    return <View><Text>Loading...</Text></View>; // Placeholder for loading state
  }
  //

  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            
        }}    
        initialRouteName={initScreen}
    >
        <Stack.Screen name='profileHome' component={ProfileHomeScreen}  />
        <Stack.Screen name="profileNoLogin" component={ProfileNoLoginScreen} />
        <Stack.Screen name='favouriteApps' component={FavouriteAppsScreen} />
        <Stack.Screen name='achievements' component={AchievementsScreen} />

    </Stack.Navigator>  
  );
}

const styles = StyleSheet.create({})

export default ProfileLayout;
