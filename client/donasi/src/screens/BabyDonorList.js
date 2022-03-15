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
  Checkbox
} from 'native-base';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Logo from '../../assets/logo.svg';
import SplashBg from '../../assets/splash-bg.svg';

const BabyDonorList = ({ navigation }) => {
  const searchHandler = () => {
    navigation.navigate('Items');
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FDF7F7'
      }}
    >
      <View height="100%" width="100%" contentContainerStyle={{ flexGrow: 1 }}>
        <Box
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          flex="1"
          position="relative"
        ></Box>
      </View>
    </SafeAreaView>
  );
};

export default BabyDonorList;
