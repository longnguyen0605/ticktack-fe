import { StyleSheet, View } from 'react-native';
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
