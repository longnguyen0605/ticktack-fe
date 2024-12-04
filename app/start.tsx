import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { textStyle } from '@/theme/textStyle';
import PrimaryButton from '@/components/ui/PrimaryButton';
import LinkButton from '@/components/ui/LinkButton';
import { Stack } from 'expo-router';

const Onboarding = () => {
  return (
  <View>
    <Stack>
      <Stack.Screen name='(onboarding)'/>
      <Stack.Screen name='(auth)'/>
      <Stack.Screen name='(tabs)'/>
    </Stack>
  </View>
  )
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Text style={{...textStyle.title, ...styles.title}}>Utilize time wisely</Text>
  //     <View style={styles.imageContainer}>
  //       <Image style={styles.image} source={require('../assets/images/onboarding1.jpg')}/>
  //     </View>
  //     <Text style={{...textStyle.subText, ...styles.subtex}}>Instead of spending time on smartphone, use your time to do meaningful things.</Text>
  //     <PrimaryButton title='Next' onPress={() => {}}/>
  //     <LinkButton title='Skip' onPress={() => {}}/>
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 25
  },
  title: {
    textAlign: 'center',
    marginTop: 60
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    height: 450,
    width: 450
  },
  subtex: {
    textAlign: 'center',
    paddingHorizontal: 15,
    marginBottom: 60
  }
})

export default Onboarding;
