import Onboarding from '@/components/Onboarding';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Onboarding2 = () => {
  return (
    <Onboarding title='Boost the performance' description='Focusing on your study & work by preventing potential distractions.' order={2}/>
  );
}

export default Onboarding2;