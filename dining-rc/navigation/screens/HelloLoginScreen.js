import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, Alert} from 'react-native';
import { ButtonComponent, InputField, ErrorMessage } from '../../components';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [loginError, setLoginError] = useState('');
  //password eye
  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user.email);
        }).catch(
          error => {
            if (error.code === 'auth/email-already-in-use') { // for sign up
              console.log('That email address is already in use!');
              setLoginError('Email address is already in use');
            }
        
            if (error.code === 'auth/invalid-email') { //email input not correct form
              console.log('That email address is invalid!');
              setLoginError('Email address is invalid');
            }

            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') { //invalid user
              console.log('Invalid email or password');
              setLoginError('Invalid email or password');
            }
        
            console.error(error);
          }
        )} else {
          if (email === '') {
            console.log('Please enter your email');
            setLoginError('Please enter your email');
          } else {
            console.log('Please enter your password');
            setLoginError('Please enter your password');
          }
        }
  } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <Text style={styles.title}>Welcome to Dining@RC</Text>
      <Text style={styles.smallText}>Are You Hungry?</Text>
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        leftIcon='email'
        placeholder='Enter email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        leftIcon='lock'
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType='password'
        rightIcon={rightIcon}
        value={password}
        onChangeText={text => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
      <ButtonComponent
        onPress={onLogin}
        backgroundColor='#0B735F'
        title='Sign In'
        
        tileColor='#fff'
        titleSize={20}
        containerStyle={{
          marginBottom: 24
        }}
      />
      <Button
        onPress={() => navigation.navigate('Signup')}
        title='Go to Signup'
        color='#2A3037'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2A3037',
    paddingBottom: 10,
  },
  smallText: {
    fontSize: 16,
    color: '#2A3037',
    paddingBottom: 20,
  }
});