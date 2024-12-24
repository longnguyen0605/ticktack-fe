import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { router } from 'expo-router';
import PrimaryButton from '@/components/ui/PrimaryButton';
import UserIcon from '@/assets/images/User.svg';
import KeyIcon from '@/assets/images/Pass.svg';
import ConfirmIcon from '@/assets/images/ConfirmPass.svg'; 
import GoogleIcon from '@/assets/images/Google.svg'; 
import FacebookIcon from '@/assets/images/Facebook.svg'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Separate error states for each field
  const [usernameError, setUsernameError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSignUp = async () => {
    let hasError = false;

    // Reset errors before validating
    setUsernameError('');
    setConfirmPasswordError('');

    // Validate Username
    if (!username) {
      setUsernameError('Invalid username');
      hasError = true;
    }

    // Validate Passwords
    // if (!password || !confirmPassword) {
    //   // If either password is empty, show a message.
    //   setConfirmPasswordError('All fields are required');
    //   hasError = true;
    // } else if (password !== confirmPassword) {
    //   setConfirmPasswordError('Not matching');
    //   hasError = true;
    // }

    // If no errors, proceed


    const payload = {
      username: username,
      password: password,
      name: username,
      avatarURL: "https://172.0.0.1",
      medal: 100, 
    };
    var message="Not matching";
    try{
      const response = await fetch('https://ticktak-backend.onrender.com/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong!');
      }
  
      // Retrieve JWT token from response headers
      const data =response.json();

      message=data.message;
      const jwtToken = data.data.access_token;
  
      if (jwtToken) {
        await AsyncStorage.setItem('jwtToken', jwtToken);
        console.log('JWT Token stored successfully:', jwtToken);
      } else {
        throw new Error('JWT Token not found in response headers.');
      }
  
      console.log('Sign Up Successful:', data);
      // Navigate to home page
      router.navigate('/home');
    }
    catch{
      setConfirmPasswordError(message);
      hasError = true;
    }
    if (!hasError) {
      console.log('Sign Up Successful:', username);
      router.navigate('/home'); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('@/assets/images/SignUp.png')} // Replace with your asset path
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Sign up</Text>

      {/* USERNAME INPUT */}
      <View
        style={[
          styles.inputContainer,
          usernameError ? styles.inputErrorContainer : null
        ]}
      >
        <UserIcon width={20} height={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
        {usernameError ? (
          <Text style={styles.fieldErrorText}>{usernameError}</Text>
        ) : null}
      </View>

      {/* PASSWORD INPUT */}
      <View style={styles.inputContainer}>
        <KeyIcon width={20} height={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* CONFIRM PASSWORD INPUT */}
      <View
        style={[
          styles.inputContainer,
          confirmPasswordError ? styles.inputErrorContainer : null
        ]}
      >
        <ConfirmIcon width={20} height={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor="#888"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {confirmPasswordError ? (
          <Text style={styles.fieldErrorText}>{confirmPasswordError}</Text>
        ) : null}
      </View>

      {/* SIGNUP BUTTON */}
      <PrimaryButton title="Continue" onPress={handleSignUp} />

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* SOCIAL BUTTONS ROW */}
      <View style={styles.socialButtonsRow}>
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
      </View>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.subText}>Joined us before? </Text>
        <Text
          style={styles.linkText}
          onPress={() => router.navigate('/(auth)/login')}
        >
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4C5DFA',
    marginVertical: 20,
  },
  /* ------------------------------
   * INPUTS
   * ------------------------------ */
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  inputErrorContainer: {
    backgroundColor: '#FFE5E5',  // light pink background
    borderColor: '#FFABAB',      // pinkish border
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
  // Error text displayed inline, right-aligned
  fieldErrorText: {
    color: 'red',
    marginLeft: 'auto',
    marginRight: 10,
    fontSize: 12,
  },
  /* ------------------------------
   * DIVIDER
   * ------------------------------ */
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
  /* ------------------------------
   * SOCIAL BUTTONS
   * ------------------------------ */
  socialButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginRight: 10,

    // Subtle shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  googleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginLeft: 8,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003090',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginLeft: 10,

    // Subtle shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  facebookIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
  facebookText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  socialIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  /* ------------------------------
   * LOGIN LINK
   * ------------------------------ */
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subText: {
    fontSize: 14,
    color: '#888',
  },
  linkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4C5DFA',
    textDecorationLine: 'underline',
  },
});
