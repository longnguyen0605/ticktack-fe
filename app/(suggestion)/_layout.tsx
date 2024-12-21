import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import AppSelectScreen from './appSelect';
import CategoryMenuScreen from './categoryMenu';
import SuggestionParamList from './paramList';


const Stack = createStackNavigator<SuggestionParamList>();

const SuggestionLayout = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}    
    >
        <Stack.Screen name='categoryMenu' component={CategoryMenuScreen}  />
        <Stack.Screen name='appSelect' component={AppSelectScreen}/>
    </Stack.Navigator>  
  );
}

const styles = StyleSheet.create({})

export default SuggestionLayout;
