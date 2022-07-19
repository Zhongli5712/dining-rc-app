import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './navigation/tabs';
import {View, StyleSheet} from 'react-native';
import { navigationRef } from './navigation/RootNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProfileNavigate from './navigation/ProfileNav';


const App = () => {
  return(
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {/*change from BottomTab to profileNavigate */}
            <ProfileNavigate />
            <View style= {styles.container}>
            </View>
        </NavigationContainer>
      </SafeAreaProvider>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
  }
}
)