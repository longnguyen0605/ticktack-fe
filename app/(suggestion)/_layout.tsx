import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import AppSelectScreen from './appSelect';
import CategoryMenuScreen from './categoryMenu';
import SuggestionParamList from './_paramList';
import AppPlanningScreen from './appPlanning';
import AppEditScreen from './appEdit';
import AppTimerScreen from './appTimer';
import AppTimeOutScreen from './appTimeOut';


const Stack = createStackNavigator<SuggestionParamList>();

const SuggestionLayout = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
            
        }}    
    >
        <Stack.Screen name='categoryMenu' component={CategoryMenuScreen}  />
        <Stack.Screen name='appSelect' component={AppSelectScreen}/>
        <Stack.Screen name='appPlanning' component={AppPlanningScreen}/>
        <Stack.Screen name='appEdit' component={AppEditScreen}/>
        <Stack.Screen name='appTimer' component={AppTimerScreen}/>
        <Stack.Screen name='appTimeout' component={AppTimeOutScreen}/>
    </Stack.Navigator>  
  );
}

const styles = StyleSheet.create({})

export default SuggestionLayout;
