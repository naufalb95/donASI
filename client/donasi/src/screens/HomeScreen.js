import React from 'react';
import { Image, Box, Text, Input, ScrollView } from 'native-base';
import { SafeAreaView, StatusBar } from 'react-native';
import { SvgXml } from 'react-native-svg';
import MenuCategoriesCariDonorPNG from '../../assets/menu_categories_cari_donor.png';
import MenuCategoriesDaftarDonorPNG from '../../assets/menu_categories_daftar_donor.png';
import MenuCategoriesEdukasiPNG from '../../assets/menu_categories_edukasi.png';
import MenuCategoriesKomunitasPNG from '../../assets/menu_categories_komunitas.png';
import Donasi from '../../assets/donasi.svg';
import Notif from '../../assets/notif.svg';
import BoyCard from '../components/BoyCard';
import GirlCard from '../components/GirlCard';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';
import { Pressable } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
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
        position="relative"
      >
        <Box
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
          height="100%"
          flex="1"
          position="relative"
          bgColor="#AF2242"
          marginBottom="32"
        >
          <Box
            alignItems="center"
            justifyContent="space-between"
            width="90%"
            height="65"
            flexDirection="row"
          >
            <Box>
              <SvgXml xml={Donasi} />
            </Box>
            <Box>
              <SvgXml xml={Notif} />
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
          >
            <Box
              paddingTop="18"
              alignItems="flex-start"
              width="90%"
              minHeight="100%"
              borderTopRadius="25"
            >
              <Box>Lokasi Saya</Box>
              <Box marginTop="15" marginBottom="5" width="100%">
                <Input
                  width="100%"
                  height="8"
                  placeholder="Coblong, Bandung"
                  fontSize="14"
                  borderColor="#5A7AA4"
                  _focus={{ borderColor: '#5A7AA4' }}
                  borderWidth="0.9"
                />
              </Box>
              <Box
                flexDirection="row"
                width="100%"
                justifyContent="space-between"
                marginBottom="5"
              >
                <Box
                  flexGrow="1"
                  height="100"
                  onTouchEnd={() => navigation.navigate('FindDonorScreen')}
                >
                  <Box justifyContent="center" alignItems="center">
                    <Image
                      source={MenuCategoriesCariDonorPNG}
                      width="85%"
                      height="85%"
                      alt="caridonor"
                    />
                    <Text width="100%" textAlign="center" fontSize="12">
                      Cari Donor
                    </Text>
                  </Box>
                </Box>

                <Box flexGrow="1" height="100">
                  <Box justifyContent="space-between" alignItems="center">
                    <Image
                      source={MenuCategoriesDaftarDonorPNG}
                      width="80%"
                      height="80%"
                      alt="daftardonor"
                      marginTop="-1"
                      marginBottom="2"
                    />
                    <Text width="100%" textAlign="center" fontSize="12">
                      Daftar Donor
                    </Text>
                  </Box>
                </Box>

                <Box flexGrow="1" height="100">
                  <Box justifyContent="center" alignItems="center">
                    <Image
                      source={MenuCategoriesEdukasiPNG}
                      width="85%"
                      height="85%"
                      alt="caridonor"
                    />
                    <Text width="100%" textAlign="center" fontSize="12">
                      Edukasi
                    </Text>
                  </Box>
                </Box>

                <Box flexGrow="1" height="100">
                  <Box justifyContent="center" alignItems="center">
                    <Image
                      source={MenuCategoriesKomunitasPNG}
                      width="85%"
                      height="85%"
                      alt="komunitas"
                    />
                    <Text width="100%" textAlign="center" fontSize="12">
                      Komunitas
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                marginY="5"
              >
                <Text fontSize="20" fontWeight="bold" color="#2E2D2D">
                  Donor Terdekat
                </Text>
                <Pressable
                  onPress={() => navigation.navigate('FindDonorScreen')}
                >
                  <Text color="#AF2242">Lihat Semua</Text>
                </Pressable>
              </Box>
              <Box height="100">
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Box marginRight="2">
                    <BoyCard navigate />
                  </Box>
                  <Box marginRight="2">
                    <GirlCard />
                  </Box>
                  <Box marginRight="2">
                    <GirlCard />
                  </Box>
                  <Box marginRight="2">
                    <BoyCard navigate />
                  </Box>
                </ScrollView>
              </Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                marginTop="10"
              >
                <Text fontSize="20" fontWeight="bold" color="#2E2D2D">
                  Topik Populer
                </Text>
                <Text color="#AF2242">Lihat Semua</Text>
              </Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                marginY="5"
              >
                <Box
                  flexGrow="1"
                  bgColor="#AF2242"
                  maxWidth="48%"
                  height="150"
                  borderRadius="10"
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    alignItems="center"
                    position="absolute"
                    top="0"
                    width="100%"
                  >
                    <Image
                      source={require('../../assets/menyusui.png')}
                      alt="Menyusui"
                      width="200"
                      borderRadius="10"
                    />
                  </Box>
                  <Box
                    alignItems="center"
                    marginY="4"
                    position="absolute"
                    bottom="0"
                    width="100%"
                  >
                    <Text color="white" fontWeight="bold" fontSize="14">
                      Cara Memompa ASI
                    </Text>
                  </Box>
                </Box>
                <Box
                  flexGrow="1"
                  bgColor="#AF2242"
                  maxWidth="48%"
                  height="150"
                  borderRadius="10"
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    alignItems="center"
                    position="absolute"
                    top="0"
                    width="100%"
                  >
                    <Image
                      source={require('../../assets/asi.png')}
                      alt="Menyimpan"
                      width="200"
                      borderRadius="10"
                    />
                  </Box>
                  <Box
                    alignItems="center"
                    marginY="4"
                    position="absolute"
                    bottom="0"
                    width="100%"
                  >
                    <Text color="white" fontWeight="bold" fontSize="14">
                      Cara Menyimpan ASI
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  );
};

export default HomeScreen;
