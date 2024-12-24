import { Logo } from "@/assets/Logo";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Onboarding() {

  return (<SafeAreaView style={styles.container}>
    <View>
      <Logo />
      <Text>
        Welcome to TickTack
      </Text>
      <Link href='/(onboarding)/onboarding1'>Next</Link>
    </View>
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    flex: 1
  }
})