import React, { useState } from 'react';
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
import { SvgXml } from 'react-native-svg';
import BackArrow from '../../assets/back_arrow.svg';

const RecipientRequirement = ({ navigation: { goBack, navigate } }) => {
  const [checkbox, setCheckbox] = useState(false);

  const changeCheckbox = () => {
    setCheckbox(!checkbox);
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
          justifyContent="flex-start"
          width="100%"
          height="100%"
          flex="1"
          position="relative"
          bgColor="#FDF7F7"
        >
          <Box
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="65"
            flexDirection="row"
            position="relative"
          >
            <Box position="absolute" left="2" onTouchEnd={() => goBack()}>
              <SvgXml
                height="40"
                width="40"
                fill="#AF2242"
                color="#AF2242"
                xml={BackArrow}
              />
            </Box>
            <Box>
              <Text color="#AF2242" fontWeight="bold" fontSize="20">
                Persyaratan Resipien
              </Text>
            </Box>
          </Box>
          <Box
            flex="1"
            borderColor="#AF2242"
            borderWidth="3"
            width="90%"
            borderRadius="20"
            paddingY="6"
          >
            <VStack marginX="8">
              <Box flexDirection="row">
                <Text fontSize="15">1.</Text>
                <Text fontSize="15" paddingLeft="1">
                  Kebutuhan bayi tidak terpenuhi dari Ibu
                </Text>
              </Box>
              <Box flexDirection="row">
                <Text fontSize="15">2.</Text>
                <Text fontSize="15" paddingLeft="1">
                  Tidak memperjualbelikan ASI yang didapat dari pendonor
                </Text>
              </Box>
              <Box flexDirection="row">
                <Text fontSize="15">3.</Text>
                <Text fontSize="15" paddingLeft="1">
                  Memahami cara handling ASI saat akan diberikan kepada bayi
                </Text>
              </Box>
              <Box flexDirection="row">
                <Text fontSize="15">4.</Text>
                <Text fontSize="15" paddingLeft="1">
                  Meminta stock ASI sesuai kebutuhan
                </Text>
              </Box>
              <Box flexDirection="row">
                <Text fontSize="15">5.</Text>
                <Text fontSize="15" paddingLeft="1">
                  Melakukan persetujuan dengan donor sebelum mengajukan
                  pengiriman
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box marginTop="6" width="90%" flexDirection="row" paddingX="4">
            <Box justifyContent="center">
              <Checkbox
                aria-label="checkbox"
                isChecked={checkbox}
                onChange={() => changeCheckbox()}
                borderWidth="0"
                bgColor="#CDCDD9"
                _unchecked={{ borderWidth: '0', bgColor: '#CDCDD9' }}
                _checked={{ bgColor: '#AF2242', borderWidth: '0' }}
              />
            </Box>
            <Box
              marginLeft="2"
              justifyContent="flex-start"
              alignItems="flex-start"
              onTouchEnd={() => changeCheckbox()}
            >
              <Text fontSize="14" color={checkbox ? '#2E2D2D' : '#CDCDD9'}>
                Saya menyatakan memenuhi dan menyetujui persyaratan diatas
              </Text>
            </Box>
          </Box>
          <Box marginY="3" width="100%" alignItems="center">
            <Button
              borderRadius="10"
              bgColor={checkbox ? '#AF2242' : '#CDCDD9'}
              width="70%"
              onPress={() => navigate('RecipientFormScreen')}
              disabled={!checkbox}
            >
              <Text fontWeight="bold" color="white" fontSize="14">
                Selanjutnya
              </Text>
            </Button>
          </Box>
        </Box>
      </View>
    </SafeAreaView>
  );
};

export default RecipientRequirement;
