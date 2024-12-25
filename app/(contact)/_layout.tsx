import ProfileHome from '@/components/profile/ProfileHome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import ContactParamList from './_paramList';
import ContactUsScreen from './contactUs';




const Stack = createStackNavigator<ContactParamList>();

const ContactLayout = () => {
  

  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            
        }}    
       
    >
        <Stack.Screen name='contactUs' component={ContactUsScreen}  />
        

    </Stack.Navigator>  
  );
}

const styles = StyleSheet.create({})

export default ContactLayout;
