import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import HomeScreen from './src/screens/HomeScreen';
import HomeScreenNavigator from './src/screens/HomeScreenNavigator';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';
import BabyDonorList from './src/screens/BabyDonorList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <HomeScreenNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
