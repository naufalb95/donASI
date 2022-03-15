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
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Logo from '../../assets/logo.svg';

const RegisterScreen = ({ navigation }) => {
  const searchHandler = () => {
    navigation.navigate('Items');
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FDF7F7',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
    >
      <View height="100%" width="100%" contentContainerStyle={{ flexGrow: 1 }}>
        <Box
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          flex="1"
        >
          <Box
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="125"
            marginBottom="5"
          >
            <SvgXml width="100%" height="70%" xml={Logo} />
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            width="100%"
            marginBottom="3"
          >
            <Input
              width="90%"
              height="10"
              placeholder="Email"
              fontSize="14"
              borderColor="#AF2242"
              _focus={{ borderColor: '#AF2242' }}
              borderWidth="0.9"
            />
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            width="100%"
            marginBottom="3"
          >
            <Input
              width="90%"
              height="10"
              placeholder="Nomor Handphone"
              _focus={{ borderColor: '#AF2242' }}
              fontSize="14"
              borderColor="#AF2242"
              borderWidth="0.9"
            />
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            width="100%"
            marginBottom="3"
          >
            <Input
              width="90%"
              height="10"
              placeholder="Kata sandi"
              fontSize="14"
              borderColor="#AF2242"
              _focus={{ borderColor: '#AF2242' }}
              borderWidth="0.9"
              secureTextEntry
            />
          </Box>
          <Box width="100%" alignItems="center">
            <Box
              width="90%"
              alignItems="center"
              justifyContent="space-between"
              flexDirection="row"
            >
              <Box display="flex" width="50%" flexDirection="row">
                <Checkbox
                  borderRadius="50"
                  borderColor="#AF2242"
                  aria-label="Remember Me"
                  marginRight="2"
                />
                <Text fontSize="11" color="#AF2242">
                  Ingat Saya
                </Text>
              </Box>
              <Box display="flex" width="50%" flexDirection="row-reverse">
                <Text fontSize="11" color="#5A7AA4" opacity="0.5">
                  Lupa Kata Sandi?
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            width="100%"
            marginBottom="3"
            marginTop="10"
          >
            <Button
              width="90%"
              height="10"
              backgroundColor="#AF2242"
              onPress={() => navigation.navigate('LoginScreen')}
            >
              <Text fontWeight="bold" color="white" fontSize="14">
                Daftar
              </Text>
            </Button>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            width="100%"
            marginBottom="3"
            marginTop="5"
            onTouchEnd={() => navigation.navigate('LoginScreen')}
          >
            <Text fontSize="14" color="#5A7AA4">
              <Text opacity="0.5">Sudah punya akun? </Text>
              <Text fontWeight="bold" color="#AF2242">
                Masuk
              </Text>
            </Text>
          </Box>
        </Box>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
