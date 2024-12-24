import ProfileHome from '@/components/profile/ProfileHome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import ProfileParamList from './paramList';
import FavouriteAppsScreen from './favouriteApps';
import AchievementsScreen from './achievements';



const Stack = createStackNavigator<ProfileParamList>();

const ProfileLayout = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            
        }}    
    >
        <Stack.Screen name='profileHome' component={ProfileHome}  />
        <Stack.Screen name='favouriteApps' component={FavouriteAppsScreen} />
        <Stack.Screen name='achievements' component={AchievementsScreen} />
    </Stack.Navigator>  
  );
}

const styles = StyleSheet.create({})

export default ProfileLayout;
