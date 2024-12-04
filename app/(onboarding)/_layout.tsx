import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OnboardLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name='onboarding1'/>
      <Stack.Screen name='onboarding2'/>
      <Stack.Screen name='onboarding3'/>
    </Stack>
  );
}

const styles = StyleSheet.create({})

export default OnboardLayout;
