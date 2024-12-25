import { Logo } from "@/assets/Logo";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { textStyle } from "@/theme/textStyle";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Onboarding() {

  return (<SafeAreaView style={styles.container}>
      <Logo />
      <View>
        <Text style={{...textStyle.title, textAlign: 'center', fontSize: 28}}>
          Welcome to TickTack
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* <PrimaryButton title="Go to Onboarding" onPress={() => {router.navigate('/(onboarding)/onboarding1')}}/> */}
        <PrimaryButton title="Go to Onboarding" onPress={() => {router.navigate('/(auth)/login')}}/>
      </View>
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 180,
    marginTop: 20
  }
})