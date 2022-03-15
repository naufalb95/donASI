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
  Select
} from 'native-base';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView
} from 'react-native';
import { SvgXml } from 'react-native-svg';

import BackArrow from '../../assets/back_arrow.svg';
import Delivery from '../../assets/delivery.svg';
import ProfilePicture from '../../assets/profile_picture.svg';
import Send from '../../assets/send.svg';
import Attachment from '../../assets/attachment.svg';
import ChatMe from '../components/ChatMe';
import ChatOther from '../components/ChatOther';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const RecipientChatRoom = ({ navigation: { goBack, navigate } }) => {
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
            <Pressable onPress={() => navigate('DeliveryFormScreen')}>
              <Box
                borderWidth="2"
                padding="0.5"
                borderColor="white"
                borderRadius="10"
              >
                <SvgXml xml={Delivery} />
              </Box>
            </Pressable>
          </Box>
          <Box
            alignItems="flex-start"
            justifyContent="center"
            width="100%"
            minHeight="100%"
            borderTopRadius="25"
            flexDirection="row"
            bgColor="#FDF7F7"
          >
            <Box height="90%" width="90%" paddingY="2">
              <Box width="100%" alignItems="center">
                <Box
                  borderWidth="1"
                  paddingX="3"
                  paddingY="0.5"
                  borderRadius="10"
                  borderColor="#5A7AA4"
                  marginY="1"
                >
                  <Text fontSize="13" color="#AF2242">
                    Today
                  </Text>
                </Box>
              </Box>
              <ScrollView showsVerticalScrollIndicator={false}>
                <ChatMe message="Halooo, Mba Maudy. Perkenalkan saya Raisa" />
                <ChatOther message="Halooo, salam kenal Mba Raisa" />
                <ChatMe message="Mba, saya butuh stok ASI untuk anak saya sebanyak 5 botol" />
                <ChatOther message="Oalah, kalau boleh tau anaknya laki-laki atau perempuan ya, Mba? usianya berapa bulan?" />
                <ChatMe message="Anak saya perempuan usia 2 bulan, Mba. Butuh donor ASI karena saya sedang operasi." />
              </ScrollView>
              <Box marginY="2">
                <HStack>
                  <Box
                    flexGrow="4"
                    borderLeftRadius="50"
                    borderTopWidth="0.9"
                    borderLeftWidth="0.9"
                    borderBottomWidth="0.9"
                    borderColor="#AF2242"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <SvgXml xml={Attachment} color="#AF2242" />
                  </Box>
                  <Input
                    flexGrow="32"
                    height="10"
                    fontSize="14"
                    borderLeftWidth="0"
                    borderRightRadius="50"
                    borderColor="#AF2242"
                    _focus={{ borderColor: '#AF2242' }}
                    borderLeftRadius="0"
                    placeholder="Ketik pesan disini..."
                  />
                  <Box flexGrow="1" paddingX="2">
                    <Button
                      borderRadius="50"
                      height="10"
                      width="10"
                      bgColor="#AF2242"
                    >
                      <SvgXml xml={Send} color="#FFFFFF" />
                    </Button>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </View>
    </SafeAreaView>
  );
};

export default RecipientChatRoom;
