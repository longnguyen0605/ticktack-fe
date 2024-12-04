import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Onboarding() {
  const isOnboarding: boolean = true;

  return (<SafeAreaView style={styles.container}>
    <View>
      <Text>
        Welcome to TickTack
      </Text>
      <Link href='/(onboarding)/onboarding1'>Next</Link>
    </View>
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25
  }
})