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

const SplashScreen = ({ navigation }) => {
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
        >
          <Box width="100%" height="125">
            <SvgXml width="100%" height="70%" xml={Logo} />
          </Box>
          <Box position="absolute" top="0" left="-100" zIndex="-1">
            <SvgXml height="1250dp" width="1250dp" xml={SplashBg} />
          </Box>
        </Box>
      </View>
    </SafeAreaView>
    // <SafeAreaView
    //   style={{
    //     backgroundColor: '#f8e6e5'
    //   }}
    // >
    //   <View height="100%" width="100%" contentContainerStyle={{ flexGrow: 1 }}>
    //     <Box
    //       alignItems="center"
    //       justifyContent="center"
    //       width="100%"
    //       height="100%"
    //       flex="1"
    //     >
    //       <SvgXml width="275dp" height="125dp" xml={Logo} />
    //     </Box>
    //   </View>
    // </SafeAreaView>
  );
};

export default SplashScreen;
