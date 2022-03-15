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
  VStack,
  Checkbox,
  ScrollView,
  Select
} from 'native-base';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { SvgXml } from 'react-native-svg';

import BackArrow from '../../assets/back_arrow.svg';
import Pin from '../../assets/pin.svg';
import Bottle from '../../assets/bottle.svg';
import Truck from '../../assets/truck.svg';
import Time from '../../assets/time.svg';
import Money from '../../assets/money.svg';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const DeliveryForm = ({ navigation: { goBack, navigate } }) => {
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
            justifyContent="center"
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
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text color="white" fontWeight="bold" fontSize="20">
                Informasi Pengiriman
              </Text>
            </Box>
          </Box>
          <Box
            alignItems="flex-start"
            justifyContent="flex-start"
            width="100%"
            minHeight="100%"
            borderTopRadius="25"
            bgColor="#FDF7F7"
            paddingY="4"
          >
            <Box
              paddingX="5"
              alignItems="center"
              justifyContent="center"
              id="address"
              marginBottom="3"
            >
              <HStack width="90%">
                <Box paddingLeft="2" marginRight="4" width="10%">
                  <SvgXml fill="#AF2242" color="#AF2242" xml={Pin} />
                </Box>
                <Box width="90%">
                  <VStack
                    space="1"
                    style={{ borderBottomColor: 'rgba(90, 122, 164, 0.5)' }}
                    borderBottomColor="black"
                    borderBottomWidth="0.3"
                    paddingBottom="2"
                  >
                    <Text fontWeight="bold" color="#AF2242" fontSize="16">
                      Alamat Pengiriman
                    </Text>
                    <Text fontWeight="bold" fontSize="14" color="#2E2D2D">
                      Raisa | 081234567890
                    </Text>
                    <Text fontSize="14" color="#2E2D2D">
                      Jalan Diamond No.17 Kec. Coblong, Kab. Bandung, 40717
                    </Text>
                  </VStack>
                </Box>
              </HStack>
            </Box>
            <Box
              paddingX="5"
              alignItems="center"
              justifyContent="center"
              id="order"
              marginBottom="3"
            >
              <HStack width="90%">
                <Box paddingLeft="2" marginRight="4" width="10%">
                  <SvgXml fill="#AF2242" color="#AF2242" xml={Bottle} />
                </Box>
                <Box width="90%">
                  <VStack
                    space="2"
                    style={{ borderBottomColor: 'rgba(90, 122, 164, 0.5)' }}
                    borderBottomColor="black"
                    borderBottomWidth="0.3"
                    paddingBottom="2"
                  >
                    <Text fontWeight="bold" color="#AF2242" fontSize="16">
                      Pesanan
                    </Text>

                    <Input
                      width="100%"
                      height="8"
                      placeholder="Jumlah Botol"
                      fontSize="13"
                      borderColor="#AF2242"
                      _focus={{ borderColor: '#AF2242' }}
                      borderWidth="0.9"
                      keyboardType="numeric"
                    />
                    <Input
                      width="100%"
                      height="8"
                      placeholder="Catatan"
                      fontSize="13"
                      borderColor="#AF2242"
                      _focus={{ borderColor: '#AF2242' }}
                      borderWidth="0.9"
                    />
                  </VStack>
                </Box>
              </HStack>
            </Box>
            <Box
              alignItems="center"
              justifyContent="center"
              id="delivery-option"
              marginBottom="3"
              paddingX="5"
            >
              <HStack width="90%">
                <Box paddingLeft="2" marginRight="4" width="10%">
                  <SvgXml fill="#AF2242" color="#AF2242" xml={Truck} />
                </Box>
                <Box width="90%">
                  <VStack
                    space="2"
                    style={{ borderBottomColor: 'rgba(90, 122, 164, 0.5)' }}
                    borderBottomColor="black"
                    borderBottomWidth="0.3"
                    paddingBottom="2"
                  >
                    <Text fontWeight="bold" color="#AF2242" fontSize="16">
                      Pesanan
                    </Text>
                    <Box
                      width="100%"
                      borderWidth="0.9"
                      paddingX="1"
                      paddingY="1"
                      borderRadius="10"
                      style={{
                        backgroundColor: 'rgba(247, 202, 201, 0.2)',
                        borderColor: 'rgba(175, 34, 66, 0.2)'
                      }}
                      marginBottom="2"
                    >
                      <HStack
                        justifyContent="space-between"
                        alignItems="center"
                        paddingRight="10"
                      >
                        <Box
                          paddingX="2"
                          borderWidth="1"
                          borderRadius="11"
                          height="5"
                          width="5"
                          borderColor="#AF2242"
                          justifyContent="center"
                          alignItems="center"
                          marginX="2"
                        >
                          <Text fontSize="11" color="#AF2242">
                            i
                          </Text>
                        </Box>
                        <Box>
                          <Text fontSize="10" color="#2E2D2D">
                            Kurir jasa kirim yang telah bermitra dengan kami
                            dilengkapi dengan coolbox dan ice gel.
                          </Text>
                        </Box>
                      </HStack>
                    </Box>
                    <Text fontSize="13" color="#AF2242">
                      Jasa Kirim
                    </Text>
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold" fontSize="13" color="#2E2D2D">
                        Seventeen Express
                      </Text>
                      <Text fontWeight="bold" fontSize="13" color="#2E2D2D">
                        Rp 13.000
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              </HStack>
            </Box>
            <Box
              paddingX="5"
              alignItems="center"
              justifyContent="center"
              id="delivery-time"
              marginBottom="3"
            >
              <HStack width="90%">
                <Box paddingLeft="2" marginRight="4" width="10%">
                  <SvgXml fill="#AF2242" color="#AF2242" xml={Time} />
                </Box>
                <Box width="90%">
                  <VStack
                    space="2"
                    style={{ borderBottomColor: 'rgba(90, 122, 164, 0.5)' }}
                    borderBottomColor="black"
                    borderBottomWidth="0.3"
                    paddingBottom="2"
                  >
                    <Text fontWeight="bold" color="#AF2242" fontSize="16">
                      Waktu Pengiriman
                    </Text>
                    <Select
                      width="100%"
                      height="8"
                      placeholder="Waktu"
                      fontSize="13"
                      borderColor="#AF2242"
                      _focus={{ borderColor: '#AF2242' }}
                      borderWidth="0.9"
                    >
                      <Select.Item label="Sekarang" value="now" />
                      <Select.Item label="30 menit lagi" value="0.5" />
                      <Select.Item label="1 jam lagi" value="1" />
                      <Select.Item label="2 jam lagi" value="2" />
                      <Select.Item label="3 jam lagi" value="3" />
                      <Select.Item label="4 jam lagi" value="4" />
                      <Select.Item label="5 jam lagi" value="5" />
                    </Select>
                    <Input
                      width="100%"
                      height="8"
                      placeholder="Catatan untuk driver"
                      fontSize="13"
                      borderColor="#AF2242"
                      _focus={{ borderColor: '#AF2242' }}
                      borderWidth="0.9"
                    />
                  </VStack>
                </Box>
              </HStack>
            </Box>
            <Box
              paddingX="5"
              alignItems="center"
              justifyContent="center"
              id="order"
              marginBottom="3"
            >
              <HStack width="90%">
                <Box paddingLeft="2" marginRight="4" width="10%">
                  <SvgXml color="#AF2242" xml={Money} />
                </Box>
                <Box width="90%">
                  <VStack space="2" paddingBottom="2">
                    <Text fontWeight="bold" color="#AF2242" fontSize="16">
                      Pembayaran Pengiriman
                    </Text>
                    <Select
                      width="100%"
                      height="8"
                      placeholder="Pilihan Pembayaran"
                      fontSize="13"
                      borderColor="#AF2242"
                      _focus={{ borderColor: '#AF2242' }}
                      borderWidth="0.9"
                    >
                      <Select.Item label="Gopay" value="gopay" />
                      <Select.Item label="OVO" value="ovo" />
                      <Select.Item label="BCA Virtual Account" value="bca-va" />
                      <Select.Item
                        label="BCA Bank Transfer"
                        value="bca-trans"
                      />
                    </Select>
                  </VStack>
                </Box>
              </HStack>
            </Box>
            <Box width="100%" alignItems="center">
              <Button
                bgColor="#AF2242"
                borderRadius="10"
                width="50%"
                onPress={() => navigate('TrackingScreen')}
              >
                <Text fontWeight="bold" color="white">
                  Konfirmasi
                </Text>
              </Button>
            </Box>
          </Box>
        </Box>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryForm;
