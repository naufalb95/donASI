import React from 'react';
import {
  Flex,
  Image,
  Heading,
  Box,
  Center,
  Text,
  Input,
  Button,
  HStack,
  Checkbox,
  ScrollView,
  Select,
  VStack
} from 'native-base';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';

const Tracking = ({ navigation: { navigate } }) => {
  setTimeout(() => {
    navigate('HomeScreen');
  }, 2500);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FDF7F7',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
    >
      <View height="100%" width="100%" contentContainerStyle={{ flexGrow: 1 }}>
        <Box
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            height="200"
            width="100%"
            overflow="hidden"
            borderRadius="10"
            alignItems="center"
            justifyContent="center"
          >
            <LottieView
              source={require('../../assets/confetti.json')}
              autoPlay
              loop
              height="100%"
              width="100%"
            />
          </Box>
          <Text color="#AF2242" fontWeight="bold" fontSize="24">
            Selamat!
          </Text>
          <Text color="#2E2D2D" fontSize="20">
            ASI berhasil dikirim
          </Text>
        </Box>
      </View>
    </SafeAreaView>
  );
};

export default Tracking;
