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
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Donasi from '../../assets/donasi.svg';
import BackArrow from '../../assets/back_arrow.svg';
import BoyCard from '../components/BoyCard';
import GirlCard from '../components/GirlCard';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';

const FindDonor = () => {
  const navigation = useNavigation();
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
          >
            <Box
              position="absolute"
              left="2"
              onTouchEnd={() => navigation.goBack()}
            >
              <SvgXml
                height="40"
                width="40"
                color="#FFFFFF"
                fill="#FFFFFF"
                xml={BackArrow}
              />
            </Box>
            <Box>
              <Text color="white" fontWeight="bold" fontSize="20">
                Cari Donor
              </Text>
            </Box>
          </Box>
          <Box
            alignItems="flex-start"
            justifyContent="center"
            width="100%"
            minHeight="100%"
            borderTopRadius="25"
            flexDirection="row"
            bgColor="white"
          >
            <Box
              paddingTop="18"
              alignItems="flex-start"
              width="90%"
              minHeight="100%"
              borderTopRadius="25"
              bgColor="white"
            >
              <Box
                justifyContent="center"
                alignItems="center"
                width="100%"
                color="#2E2D2D"
              >
                <Text fontWeight="600" fontSize="15">
                  Pilih donor yang cocok denganmu
                </Text>
              </Box>
              <Box
                marginTop="15"
                width="100%"
                display="flex"
                flexDirection="row"
              >
                <Select
                  placeholder="Jenis Kelamin"
                  fontWeight="bold"
                  placeholderTextColor="#AF2242"
                  color="#AF2242"
                  marginRight="1"
                  flexGrow="3"
                  borderColor="#aab4cf"
                  fontSize="14"
                >
                  <Select.Item label="Laki-Laki" value="laki-laki" />
                  <Select.Item label="Perempuan" value="perempuan" />
                </Select>
                <Select
                  placeholder="Usia"
                  fontWeight="bold"
                  placeholderTextColor="#AF2242"
                  color="#AF2242"
                  marginRight="1"
                  flexGrow="2"
                  borderColor="#aab4cf"
                  fontSize="14"
                >
                  <Select.Item label="0-3 bulan" value="0-3" />
                  <Select.Item label="4-6 bulan" value="4-6" />
                  <Select.Item label="7-9 bulan" value="7-9" />
                  <Select.Item label="8-12 bulan" value="8-12" />
                </Select>
                <Select
                  placeholder="Agama"
                  fontWeight="bold"
                  placeholderTextColor="#AF2242"
                  color="#AF2242"
                  marginRight="1"
                  flexGrow="2"
                  borderColor="#aab4cf"
                  fontSize="14"
                >
                  <Select.Item label="Islam" value="islam" />
                  <Select.Item label="Katholik" value="katholik" />
                  <Select.Item label="Kristen" value="kristen" />
                  <Select.Item label="Hindu" value="hindu" />
                  <Select.Item label="Budha" value="perempuan" />
                </Select>
              </Box>
              <Box height="75%">
                <ScrollView marginTop="5" showsVerticalScrollIndicator={false}>
                  <Box flexDirection="row" maxWidth="100%" flexWrap="wrap">
                    <BoyCard />
                    <BoyCard />
                    <GirlCard />
                    <GirlCard />
                    <BoyCard />
                    <BoyCard />
                    <GirlCard />
                    <GirlCard />
                    <BoyCard />
                    <BoyCard />
                    <GirlCard />
                    <GirlCard />
                    <BoyCard />
                    <BoyCard />
                    <GirlCard />
                    <GirlCard />
                  </Box>
                </ScrollView>
              </Box>
            </Box>
          </Box>
        </Box>
      </View>
    </SafeAreaView>
  );
};

export default FindDonor;
