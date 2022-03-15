import React, { useState } from 'react';
import { Image, Box, Text, HStack, VStack } from 'native-base';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { SvgXml } from 'react-native-svg';

import BackArrow from '../../assets/back_arrow.svg';
import Receipt from '../../assets/receipt.svg';
import ProfilePicture from '../../assets/profile_picture.svg';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Tracking = ({ navigation: { goBack, navigate } }) => {
  const [step, setStep] = useState('packing');
  const [finishedStep, setFinishedStep] = useState([]);
  // const deliveryInterval = setInterval(() => {
  //   if (step === 'packing') {
  //     setStep('find');
  //     setTimeout(() => {}, 500);
  //     setFinishedStep(['packing']);
  //   } else if (step === 'find') {
  //     setStep('pickup');
  //     setTimeout(() => {}, 500);
  //     setFinishedStep(['packing', 'find']);
  //   } else if (step === 'pickup') {
  //     setStep('delivery');
  //     setTimeout(() => {}, 500);
  //     setFinishedStep(['packing', 'find', 'pickup']);
  //   } else if (step === 'delivery') {
  //     setStep('finish');
  //     setTimeout(() => {}, 500);
  //     setFinishedStep(['packing', 'find', 'pickup', 'delivery']);
  //   } else if (step === 'finish') {
  //     setStep('');
  //     clearInterval(deliveryInterval);
  //     setTimeout(() => {}, 500);
  //     navigate('CompleteScreen');
  //   }
  // }, 1000);

  // setTimeout(() => {
  //   setTimeout(() => {
  //     setTimeout(() => {
  //       setTimeout(() => {
  //         setTimeout(() => {
  //           setStep('');
  //           navigate('CompleteScreen');
  //         }, 1000);
  //         setStep('finish');
  //         setFinishedStep(['packing', 'find', 'pickup', 'delivery']);
  //       }, 1000);
  //       setStep('delivery');
  //       setFinishedStep(['packing', 'find', 'pickup']);
  //     }, 1000);
  //     setStep('pickup');
  //     setFinishedStep(['packing', 'find']);
  //   }, 1000);

  //   setStep('find');
  //   setFinishedStep(['packing']);
  // }, 1000);

  setTimeout(() => {
    navigate('CompleteScreen');
  }, 2500);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#AF2242',
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
          bgColor="#AF2242"
        >
          <Box
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            height="65"
            flexDirection="row"
            position="relative"
            paddingX="6"
          >
            <Box position="absolute" left="2" onTouchEnd={() => goBack()}>
              <SvgXml
                height="40"
                width="40"
                fill="#FFFFFF"
                color="#FFFFFF"
                xml={BackArrow}
              />
            </Box>
            <Box
              marginLeft="6"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Box bgColor="#F7CAC9" padding="1" borderRadius="50">
                <SvgXml xml={ProfilePicture} />
              </Box>
              <Text
                color="white"
                fontWeight="bold"
                fontSize="20"
                marginLeft="1"
              >
                Maudy Ayunda
              </Text>
            </Box>
            <Box>
              <SvgXml xml={Receipt} />
            </Box>
          </Box>
          <Box
            alignItems="flex-start"
            justifyContent="center"
            width="100%"
            minHeight="100%"
            borderTopRadius="25"
            flexDirection="row"
            bgColor="#FDF7F7"
            paddingX="2"
            paddingY="5"
          >
            <Box width="90%">
              <Box height="300" overflow="hidden" borderRadius="10">
                <Image
                  source={require('../../assets/tracking_map.png')}
                  width="150%"
                  height="150%"
                  alt="tracking"
                />
              </Box>
              <Box
                width="100%"
                marginTop="5"
                marginLeft="4"
                position="relative"
              >
                <VStack space={6}>
                  <HStack alignItems="center">
                    <Box
                      height="4"
                      width="4"
                      borderWidth="2"
                      borderRadius="50"
                      borderColor="#AF2242"
                      bgColor={step === 'packing' ? '#AF2242' : 'transparent'}
                    ></Box>
                    <Text
                      marginLeft="4"
                      fontSize="16"
                      color={
                        step === 'packing'
                          ? '#AF2242'
                          : finishedStep.includes('packing')
                          ? '#CDCDD9'
                          : '#AF2242'
                      }
                      fontWeight={step === 'packing' ? 'bold' : '400'}
                    >
                      Donor mempersiapkan pesanan
                    </Text>
                  </HStack>
                  <HStack alignItems="center">
                    <Box
                      height="4"
                      width="4"
                      borderWidth="2"
                      borderRadius="50"
                      borderColor="#AF2242"
                      bgColor={step === 'find' ? '#AF2242' : 'transparent'}
                    ></Box>
                    <Text
                      marginLeft="4"
                      fontSize="16"
                      color={
                        step === 'find'
                          ? '#AF2242'
                          : finishedStep.includes('find')
                          ? '#CDCDD9'
                          : '#AF2242'
                      }
                      fontWeight={step === 'find' ? 'bold' : '400'}
                    >
                      Mencari Driver Terdekat
                    </Text>
                  </HStack>
                  <HStack alignItems="center">
                    <Box
                      height="4"
                      width="4"
                      borderWidth="2"
                      borderRadius="50"
                      borderColor="#AF2242"
                      bgColor={step === 'pickup' ? '#AF2242' : 'transparent'}
                    ></Box>
                    <Text
                      marginLeft="4"
                      fontSize="16"
                      color={
                        step === 'pickup'
                          ? '#AF2242'
                          : finishedStep.includes('pickup')
                          ? '#CDCDD9'
                          : '#AF2242'
                      }
                      fontWeight={step === 'pickup' ? 'bold' : '400'}
                    >
                      Driver Pick Up Botol ASI
                    </Text>
                  </HStack>
                  <HStack alignItems="center">
                    <Box
                      height="4"
                      width="4"
                      borderWidth="2"
                      borderRadius="50"
                      borderColor="#AF2242"
                      bgColor={step === 'delivery' ? '#AF2242' : 'transparent'}
                    ></Box>
                    <Text
                      marginLeft="4"
                      fontSize="16"
                      color={
                        step === 'delivery'
                          ? '#AF2242'
                          : finishedStep.includes('delivery')
                          ? '#CDCDD9'
                          : '#AF2242'
                      }
                      fontWeight={step === 'delivery' ? 'bold' : '400'}
                    >
                      Donor Menuju Tempatmu
                    </Text>
                  </HStack>
                  <HStack alignItems="center">
                    <Box
                      height="4"
                      width="4"
                      borderWidth="2"
                      borderRadius="50"
                      borderColor="#AF2242"
                      bgColor={step === 'finish' ? '#AF2242' : 'transparent'}
                    ></Box>
                    <Text
                      marginLeft="4"
                      fontSize="16"
                      color={
                        step === 'finish'
                          ? '#AF2242'
                          : finishedStep.includes('finish')
                          ? '#CDCDD9'
                          : '#AF2242'
                      }
                      fontWeight={step === 'finish' ? 'bold' : '400'}
                    >
                      Donor sampai di Tujuan
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </View>
    </SafeAreaView>
  );
};

export default Tracking;
