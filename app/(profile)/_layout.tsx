import ProfileHome from '@/components/profile/ProfileHome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import ProfileParamList from './paramList';



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
        
    </Stack.Navigator>  
  );
}

const styles = StyleSheet.create({})

export default ProfileLayout;
