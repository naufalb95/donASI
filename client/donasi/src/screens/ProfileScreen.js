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
import { StatusBar, SafeAreaView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import InsetShadow from 'react-native-inset-shadow';
import Navbar from '../components/Navbar';
import BackArrow from '../../assets/back_arrow.svg';
import ArrowDown from '../../assets/arrow_down.svg';
import ArrowUp from '../../assets/arrow_up.svg';
import ProfilePicture from '../../assets/profile_picture.svg';
import PinHollow from '../../assets/pin_hollow.svg';
import Cake from '../../assets/cake.svg';
import Download from '../../assets/download.svg';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Tracking = ({ navigation: { goBack } }) => {
  const [tab, setTab] = useState('Profil');

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#AF2242',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
    >
      <ScrollView
        height="110%"
        width="100%"
        contentContainerStyle={{ flexGrow: 1 }}
      >
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
            <Box position="absolute" left="1">
              <Pressable onPress={() => goBack()}>
                <SvgXml
                  height="200dp"
                  width="35dp"
                  fill="#FFFFFF"
                  color="#FFFFFF"
                  xml={BackArrow}
                />
              </Pressable>
            </Box>
            <Box
              marginLeft="6"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            ></Box>
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
            <Box width="90%" position="relative">
              <Box
                borderRadius="10"
                alignItems="center"
                position="relative"
                top="-70"
              >
                <Image
                  source={require('../../assets/profpic.png')}
                  alt="tracking"
                  position="relative"
                  marginBottom="2"
                />
                <Text fontSize="20" fontWeight="bold">
                  Raisa A
                </Text>
                <Text fontSize="16" fontWeight="bold">
                  32 Tahun
                </Text>
              </Box>
              <Box
                width="100%"
                marginTop="5"
                marginBottom="-140"
                position="relative"
                top="-70"
              >
                <InsetShadow
                  containerStyle={{
                    bgColor: '#AF2242',
                    height: '21%',
                    borderRadius: '10'
                  }}
                >
                  <HStack width="100%">
                    <Box
                      flexGrow="1"
                      justifyContent="center"
                      alignItems="center"
                      bgColor={tab === 'Profil' ? '#AF2242' : '#F7CAC9'}
                      paddingY="2"
                      borderLeftRadius="10"
                      position="relative"
                      zIndex="10"
                      elevation="10"
                      onTouchEnd={() => setTab('Profil')}
                    >
                      <Text
                        color={tab === 'Profil' ? 'white' : '#AF2242'}
                        fontWeight="bold"
                        fontSize="14"
                      >
                        Profil
                      </Text>
                    </Box>
                    <Box
                      flexGrow="1"
                      justifyContent="center"
                      alignItems="center"
                      bgColor={tab === 'Sertifikat' ? '#AF2242' : '#F7CAC9'}
                      paddingY="2"
                      onTouchEnd={() => setTab('Sertifikat')}
                    >
                      <Text
                        color={tab === 'Sertifikat' ? 'white' : '#AF2242'}
                        fontWeight="bold"
                        fontSize="14"
                      >
                        Sertifikat
                      </Text>
                    </Box>
                    <Box
                      flexGrow="1"
                      justifyContent="center"
                      alignItems="center"
                      bgColor={tab === 'Riwayat' ? '#AF2242' : '#F7CAC9'}
                      paddingY="2"
                      borderRightRadius="10"
                      marginLeft="-1"
                      onTouchEnd={() => setTab('Riwayat')}
                    >
                      <Text
                        color={tab === 'Riwayat' ? 'white' : '#AF2242'}
                        fontWeight="bold"
                        fontSize="14"
                      >
                        Riwayat
                      </Text>
                    </Box>
                  </HStack>
                </InsetShadow>
              </Box>
              {tab === 'Profil' ? (
                <Box>
                  <Box width="100%" marginTop="5" position="relative" top="-70">
                    <Text fontSize="18" fontWeight="bold">
                      Profil
                    </Text>
                  </Box>
                  <Box
                    width="100%"
                    marginTop="2"
                    position="relative"
                    top="-70"
                    bgColor="#AF2242"
                    borderRadius="10"
                    paddingY="2"
                    paddingX="3"
                  >
                    <HStack width="100%" justifyContent="space-between">
                      <Text color="#FFFFFF" fontSize="18" fontWeight="bold">
                        Profil Akun
                      </Text>
                      <SvgXml fill="#FFFFFF" color="#FFFFFF" xml={ArrowDown} />
                    </HStack>
                  </Box>
                  <Box
                    width="100%"
                    marginTop="2"
                    position="relative"
                    top="-70"
                    bgColor="#AF2242"
                    borderRadius="10"
                    paddingY="2"
                    paddingX="3"
                    zIndex="10"
                    elevation="10"
                  >
                    <HStack width="100%" justifyContent="space-between">
                      <Text color="#FFFFFF" fontSize="18" fontWeight="bold">
                        Profil Bayi
                      </Text>
                      <SvgXml fill="#FFFFFF" color="#FFFFFF" xml={ArrowUp} />
                    </HStack>
                  </Box>
                  <Box
                    width="100%"
                    marginTop="2"
                    position="relative"
                    top="-90"
                    bgColor="#FFFFFF"
                    paddingY="2"
                    paddingX="3"
                    borderBottomRadius="10"
                  >
                    <VStack
                      width="100%"
                      marginTop="2"
                      alignItems="center"
                      paddingY="2"
                    >
                      <HStack
                        width="95%"
                        justifyContent="space-between"
                        borderBottomWidth="0.8"
                        style={{
                          borderBottomColor: 'rgba(90, 122, 164, 0.5)'
                        }}
                        paddingBottom="1"
                      >
                        <Text color="#AF2242" fontSize="17" fontWeight="bold">
                          Profil Bayi
                        </Text>
                        <Text color="#AF2242" fontSize="17" fontWeight="bold">
                          Edit
                        </Text>
                      </HStack>
                      <HStack
                        width="95%"
                        justifyContent="space-between"
                        marginTop="3"
                      >
                        <Box flexDirection="row">
                          <SvgXml xml={PinHollow} height="24dp" width="24dp" />
                          <Text color="#2E2D2D" fontSize="16" marginLeft="2">
                            Lokasi
                          </Text>
                        </Box>
                        <Text color="#2E2D2D" fontSize="16" fontWeight="bold">
                          Coblong, Bandung
                        </Text>
                      </HStack>
                      <HStack
                        width="95%"
                        justifyContent="space-between"
                        marginTop="3"
                      >
                        <Box flexDirection="row">
                          <Image
                            source={require('../../assets/baby.png')}
                            alt="baby"
                          />
                          <Text color="#2E2D2D" fontSize="16" marginLeft="2">
                            Jenis Kelamin
                          </Text>
                        </Box>
                        <Text color="#2E2D2D" fontSize="16" fontWeight="bold">
                          Laki - Laki
                        </Text>
                      </HStack>
                      <HStack
                        width="95%"
                        justifyContent="space-between"
                        marginTop="3"
                      >
                        <Box flexDirection="row">
                          <SvgXml xml={Cake} height="24dp" width="24dp" />
                          <Text color="#2E2D2D" fontSize="16" marginLeft="2">
                            Usia
                          </Text>
                        </Box>
                        <Text color="#2E2D2D" fontSize="16" fontWeight="bold">
                          6 bulan
                        </Text>
                      </HStack>
                      <HStack
                        width="95%"
                        justifyContent="space-between"
                        marginTop="3"
                      >
                        <Box flexDirection="row">
                          <SvgXml
                            xml={ProfilePicture}
                            height="24dp"
                            width="24dp"
                          />
                          <Text color="#2E2D2D" fontSize="16" marginLeft="2">
                            Agama
                          </Text>
                        </Box>
                        <Text color="#2E2D2D" fontSize="16" fontWeight="bold">
                          Islam
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                  <Box
                    width="100%"
                    marginTop="2"
                    position="relative"
                    top="-70"
                    bgColor="#AF2242"
                    borderRadius="10"
                    paddingY="2"
                    paddingX="3"
                  >
                    <HStack width="100%" justifyContent="space-between">
                      <Text color="#FFFFFF" fontSize="18" fontWeight="bold">
                        Notifikasi
                      </Text>
                      <SvgXml fill="#FFFFFF" color="#FFFFFF" xml={ArrowDown} />
                    </HStack>
                  </Box>
                </Box>
              ) : tab === 'Sertifikat' ? (
                <Box>
                  <Box width="100%" marginTop="5" position="relative" top="-70">
                    <Text fontSize="18" fontWeight="bold">
                      Sertifikat
                    </Text>
                  </Box>
                  <Box
                    width="100%"
                    marginTop="2"
                    position="relative"
                    top="-70"
                    style={{ backgroundColor: 'rgba(247, 202, 201, 0.75)' }}
                    borderRadius="10"
                    paddingY="4"
                    paddingX="3"
                    height="180"
                    overflow="hidden"
                    alignItems="center"
                  >
                    <VStack>
                      <Text
                        textAlign="center"
                        color="rgba(175, 34, 66, 0.5)"
                        fontSize="20"
                        fontWeight="bold"
                      >
                        Sertifikat Sepersusuan
                      </Text>
                      <Text
                        textAlign="center"
                        color="rgba(175, 34, 66, 0.5)"
                        fontSize="16"
                      >
                        Sertifikat ini menyatakan
                      </Text>
                      <Text
                        textAlign="center"
                        color="rgba(175, 34, 66, 0.5)"
                        fontSize="20"
                        fontWeight="bold"
                      >
                        Maudy Ayunda
                      </Text>
                      <Text
                        textAlign="center"
                        color="rgba(175, 34, 66, 0.5)"
                        fontSize="16"
                      >
                        sebagai ibu Sepersusuan
                      </Text>
                    </VStack>
                    <Box
                      position="absolute"
                      bottom="0"
                      height="60"
                      bgColor="#AF2242"
                      width="110%"
                      justifyContent="space-between"
                      alignItems="center"
                      flexDirection="row"
                      paddingX="5"
                    >
                      <Box>
                        <VStack>
                          <Text fontSize="16" fontWeight="bold" color="white">
                            Sertifikat
                          </Text>
                          <Text color="white">22 Februari 2022</Text>
                        </VStack>
                      </Box>
                      <Box>
                        <SvgXml color="#FFFFFF" xml={Download} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Box>
                  <Box width="100%" marginTop="5" position="relative" top="-70">
                    <HStack justifyContent="space-between">
                      <Box width="55%">
                        <Text fontSize="18" fontWeight="bold">
                          Riwayat
                        </Text>
                      </Box>
                      <Select
                        width="50%"
                        height="8"
                        placeholder="On-going"
                        fontSize="14"
                        borderColor="#5A7AA4"
                        _focus={{ borderColor: '#5A7AA4' }}
                        borderWidth="0.9"
                      >
                        <Select.Item label="Semua" value="semua" />
                        <Select.Item label="Pending" value="pending" />
                        <Select.Item label="On-going" value="ongoing" />
                        <Select.Item label="Selesai" value="selesai" />
                      </Select>
                    </HStack>
                  </Box>
                  <Box
                    width="100%"
                    marginTop="2"
                    position="relative"
                    top="-70"
                    borderColor="#AF2242"
                    borderWidth="2"
                    borderRadius="10"
                    paddingY="2"
                    paddingX="3"
                  >
                    <HStack justifyContent="space-between">
                      <VStack
                        flexGrow="1"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box
                          borderColor="#AF2242"
                          borderWidth="2"
                          borderRadius="50"
                          padding="1"
                        >
                          <SvgXml
                            width="20"
                            height="20"
                            color="#AF2242"
                            xml={ProfilePicture}
                          />
                        </Box>
                      </VStack>
                      <VStack flexGrow="20" marginLeft="3">
                        <Text fontWeight="bold" fontSize="20" color="#AF2242">
                          Maudy A
                        </Text>
                        <Text fontSize="16">On-going</Text>
                      </VStack>
                      <VStack flexGrow="1" justifyContent="center">
                        <Text textAlign="right" fontSize="16">
                          22/02/2022
                        </Text>
                        <Text textAlign="right" fontSize="16">
                          22:00
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  );
};

export default Tracking;
