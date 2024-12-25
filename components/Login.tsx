import { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';
import { color } from '@/theme/color';
import PrimaryButton from '@/components/ui/PrimaryButton';
import UserIcon from '@/assets/images/User.svg';
import KeyIcon from '@/assets/images/Pass.svg';
import GoogleIcon from '@/assets/images/Google.svg'; 
import FacebookIcon from '@/assets/images/Facebook.svg'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RootParamList from '@/app/_paramList';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


type NavigationProp = StackNavigationProp<RootParamList, '(auth)'>;
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);

  
  const navigation = useNavigation<NavigationProp>();
  const handleLogin = async () => {
    AsyncStorage.removeItem('jwtToken');
    // Replace with your API endpoint
    const loginApiUrl = 'https://ticktak-backend.onrender.com/auth/sign-in';
  
    // Reset error state
    setLoginFailed(false);
  
    // Prepare payload
    const payload = {
      username: username,
      password: password,
    };
  
    try {
      // Send login request
      const response = await fetch(loginApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        // Parse the response
        const data = await response.json();
        const jwtToken = data.data.access_token;
        
        if (jwtToken) {
          // Store JWT token in AsyncStorage
          await AsyncStorage.setItem('jwtToken', jwtToken);
          console.log('JWT Token stored successfully:', jwtToken);
  
          // Navigate to the home screen
          console.log('Login Successful');
          // router.navigate('/home');
          navigation.reset({
            index: 0,
            routes: [{ name: '(tabs)' }], // Ensure the name matches your RootParamList
          });
        } else {
          throw new Error('JWT Token not found in response headers.');
        }
      } else {
        // Handle login failure
        setLoginFailed(true);
        console.log('Login Failed');
      }
    } catch (error) {
      // Handle errors
      console.error('Error during login:', error);
      setLoginFailed(true);
    }
  };
  

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps={Platform.OS =='android' ? "handled": "always"} style={styles.container}>
      {/* Header Image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('@/assets/images/Login.jpg')}
        />
      </View>

      {/* Login Title */}
      <Text style={styles.title}>Login</Text>

      {/* Username Input */}
      <View style={[styles.inputContainer]}>
        <UserIcon width={20} height={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password Input */}
      <View
        style={[
          styles.inputContainer,
          loginFailed && styles.inputErrorContainer  // Pink background when error
        ]}
      >
        <KeyIcon width={20} height={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
        />
        {loginFailed && (
          <Text style={styles.passwordErrorText}>Wrong password</Text>
        )}
      </View>

      {/* Login Button */}
      <PrimaryButton title="Login" onPress={handleLogin} />

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Google Button */}
      <TouchableOpacity style={styles.googleButton}>
      <GoogleIcon width={20} height={20} style={styles.icon} />
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>

      {/* Facebook Button */}
      <TouchableOpacity style={styles.facebookButton}>
      <FacebookIcon width={20} height={20} style={styles.icon} />
        <Text style={styles.facebookText}>Facebook</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.subText}>Don’t have an account? </Text>
        <Text style={styles.linkText} onPress={() => router.navigate('/(auth)/signup')}>
          Create now
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    width: 300,
    height: 300,       // for example, 30% of the parent’s height
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: color.primary,
    marginVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  // This style can be used if the username input also needs a border color change
  inputError: {
    borderColor: 'red',
  },
  // Pink background & border for password field when error
  inputErrorContainer: {
    backgroundColor: '#FFE5E5',  // Light pink background
    borderColor: '#FFABAB',      // Pinkish border
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
  },
  passwordErrorText: {
    color: 'red',
    marginLeft: 'auto',
    marginRight: 10,
    fontSize: 12,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#eee',
  },
  dividerText: {
    marginHorizontal: 8,
    color: '#888',
    fontWeight: '600',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    paddingVertical: 12,
    borderRadius: 25,
    marginVertical: 8,
    justifyContent: 'center',

    // Add a subtle shadow (iOS + Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  googleIconWrapper: {
    borderRadius: 15,
    padding: 5,
    marginRight: 10,
  },
  googleIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  googleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003090',
    paddingVertical: 12,
    borderRadius: 15,
    marginVertical: 8,
    justifyContent: 'center',

    // Subtle shadow as well
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  facebookIconWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 5,
    marginRight: 10,
  },
  facebookIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  facebookText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  subText: {
    fontSize: 14,
    color: '#888',
  },
  linkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.primary,
    textDecorationLine: 'underline',
  },
});

export default Login;
