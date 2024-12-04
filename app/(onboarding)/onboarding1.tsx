import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { textStyle } from '@/theme/textStyle';
import PrimaryButton from '@/components/ui/PrimaryButton';
import LinkButton from '@/components/ui/LinkButton';
import { router } from 'expo-router';
import Onboarding from '@/components/Onboarding';

const Onboarding1 = () => {
  return (
    <Onboarding title='Utilize time wisely' description='Instead of spending time on smartphone, use your time to do meaningful things.' order={1}/>
  );
}

export default Onboarding1;
