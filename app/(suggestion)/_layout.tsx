import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import S1 from './s1';
import S2 from './s2';


const Stack = createStackNavigator();

const SuggestionLayout = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}    
    >
        <Stack.Screen name='s1' component={S1}/>
        <Stack.Screen name='s2' component={S2}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({})

export default SuggestionLayout;
