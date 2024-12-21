import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from "@/components/ui/Logo";

export default function Onboarding() {
  const isOnboarding: boolean = true;

  return (<SafeAreaView style={styles.container}>
    <View>
      <Logo width={500} height={500}/>
      <Text>
        Welcome to TickTack
      </Text>
      {/* <Link href='/(onboarding)/onboarding1'>Next</Link> */}
      <Link href='/(tabs)/home'>Next</Link>
    </View>
  </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25
  }
})