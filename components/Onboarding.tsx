import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { textStyle } from '@/theme/textStyle';
import PrimaryButton from '@/components/ui/PrimaryButton';
import LinkButton from '@/components/ui/LinkButton';
import { router } from 'expo-router';
import * as Progress from 'react-native-progress';

interface OnboardingProps {
  title: string,
  description?: string,
  order: 1 | 2 | 3
}

const Onboarding = (props: OnboardingProps) => {
  const images = [
    require("../assets/images/onboarding1.jpg"),
    require("../assets/images/onboarding2.jpg"),
    require("../assets/images/onboarding3.jpg")
  ];

  const handleNavigation = (order: number) => {
    if (order === 1) router.navigate('/(onboarding)/onboarding2')
    else if (order === 2) router.navigate('/(onboarding)/onboarding3')
    else console.log('Done')
  }

  return (
    <SafeAreaView style={styles.container}>
      {props.order !== 3 && <Text style={{...textStyle.title, ...styles.title}}>{props.title}</Text>}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images[props.order - 1]}/>
      </View>
      {props.description && <Text style={{...textStyle.subText, ...styles.subtex}}>{props.description}</Text>}
      {props.order === 3 && <Text style={{...textStyle.title, ...styles.title, marginBottom: 120, marginTop: 0}}>{props.title}</Text>}
      <Progress.Bar progress={1/3} width={200}/>
      <PrimaryButton title='Next' onPress={() => handleNavigation(props.order)}/>
      {props.order !== 3 && <LinkButton title='Skip' onPress={() => {router.navigate('/(onboarding)/onboarding3')}}/>}
    </SafeAreaView>
  );
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