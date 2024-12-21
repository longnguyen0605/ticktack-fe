import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { color } from '@/theme/color';
import PrimaryButton from '@/components/ui/PrimaryButton';
import UserIcon from '@/assets/images/User.svg';
import KeyIcon from '@/assets/images/Pass.svg';
import GoogleIcon from '@/assets/images/Google.svg'; 
import FacebookIcon from '@/assets/images/Facebook.svg'; 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = () => {
    const validUsername = 'admin';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {
      setLoginFailed(false);
      console.log('Login Successful');
      router.navigate('/home');
    } else {
      setLoginFailed(true);
      console.log('Login Failed');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
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
