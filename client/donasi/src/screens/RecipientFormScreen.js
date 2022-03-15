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
  VStack,
  FormControl,
  Stack
} from 'native-base';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import BackArrow from '../../assets/back_arrow.svg';

const FindDonor = ({ navigation: { goBack, navigate } }) => {
  const [parentName, setParentName] = useState('');
  const [parentRelation, setParentRelation] = useState('');
  const [address, setAddress] = useState('');
  const [babyName, setBabyName] = useState('');
  const [babyGender, setBabyGender] = useState('');
  const [babyBirthdate, setBabyBirthdate] = useState('');
  const [babyReligion, setBabyReligion] = useState('');
  const [babyReason, setBabyReason] = useState('');
  const [next, setNext] = useState(false);

  const changeInput = (e) => {
    console.log(e.target.value);
  };

  const checkInputs = () => {
    if (
      !parentName ||
      !parentRelation ||
      !address ||
      !babyName ||
      !babyGender ||
      !babyBirthdate ||
      !babyReligion ||
      !babyReason
    ) {
      console.log(parentName);
      console.log('asd');
      setNext(false);
    } else {
      console.log('DSA');
      setNext(true);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FDF7F7',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
    >
      <ScrollView
        height="100%"
        width="100%"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
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
                Form Resipien
              </Text>
            </Box>
          </Box>
          <Box
            borderColor="#AF2242"
            borderWidth="3"
            width="90%"
            borderRadius="20"
            paddingY="3"
            paddingX="3"
          >
            <FormControl>
              <Text color="#2E2D2D" fontWeight="bold" fontSize="16">
                Data Orang Tua/Wali
              </Text>
              <Stack space={1} marginTop="2">
                <Stack>
                  <FormControl.Label>
                    <Text fontSize="16">Nama Lengkap</Text>
                  </FormControl.Label>
                  <Input
                    height="10"
                    fontSize="16"
                    borderColor="#AF2242"
                    _focus={{ borderColor: '#AF2242' }}
                    borderWidth="0.9"
                    onChange={changeInput}
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>
                    <Text fontSize="16">Hubungan dengan Bayi</Text>
                  </FormControl.Label>
                  <Select
                    height="10"
                    fontSize="16"
                    borderColor="#AF2242"
                    _focus={{ borderColor: '#AF2242' }}
                    borderWidth="0.9"
                    onChange={(val) => {
                      setParentRelation(val);
                      checkInputs();
                    }}
                  >
                    <Select.Item label="Ibu" value="ibu" />
                    <Select.Item label="Ayah" value="ayah" />
                    <Select.Item label="Wali" value="wali" />
                  </Select>
                </Stack>
                <Stack>
                  <FormControl.Label>
                    <Text fontSize="16">Alamat Pengiriman</Text>
                  </FormControl.Label>
                  <Input
                    height="10"
                    fontSize="16"
                    borderColor="#AF2242"
                    _focus={{ borderColor: '#AF2242' }}
                    borderWidth="0.9"
                    onChange={(val) => {
                      setAddress(val);
                      checkInputs();
                    }}
                  />
                </Stack>
              </Stack>
            </FormControl>
          </Box>
          <Box
            borderColor="#AF2242"
            borderWidth="3"
            width="90%"
            borderRadius="20"
            paddingY="3"
            paddingX="3"
            marginTop="5"
          >
            <FormControl>
              <Text color="#2E2D2D" fontWeight="bold" fontSize="16">
                Data Bayi
              </Text>
              <Stack space={1} marginTop="2">
                <Stack>
                  <FormControl.Label>
                    <Text fontSize="16">Nama Bayi</Text>
                  </FormControl.Label>
                  <Input
                    height="10"
                    fontSize="16"
                    borderColor="#AF2242"
                    _focus={{ borderColor: '#AF2242' }}
                    borderWidth="0.9"
                    onChange={(val) => {
                      setBabyName(val);
                      checkInputs();
                    }}
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>
                    <Text fontSize="16">Jenis Kelamin Bayi</Text>
                  </FormControl.Label>
                  <Select
                    height="10"
                    fontSize="16"
                    borderColor="#AF2242"
                    _focus={{ borderColor: '#AF2242' }}
                    borderWidth="0.9"
                    onChange={(val) => {
                      setBabyGender(val);
                      checkInputs();
                    }}
                  >
                    <Select.Item label="Perempuan" value="perempuan" />
                    <Select.Item label="Laki-laki" value="laki-laki" />
                  </Select>
                </Stack>
                <Stack>
                  <FormControl.Label>
                    <Text fontSize="16">Tanggal Lahir Bayi</Text>
                  </FormControl.Label>
                  <Input
                    height="10"
                    fontSize="16"
                    borderColor="#AF2242"
                    _focus={{ borderColor: '#AF2242' }}
                    borderWidth="0.9"
                    onChange={(val) => {
                      setBabyBirthdate(val);
                      checkInputs();
                    }}
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>
                    <Text fontSize="16">Agama Bayi</Text>
                  </FormControl.Label>
                  <Select
                    height="10"
                    fontSize="16"
                    borderColor="#AF2242"
                    _focus={{ borderColor: '#AF2242' }}
                    borderWidth="0.9"
                    onChange={(val) => {
                      setBabyReligion(val);
                      checkInputs();
                    }}
                  >
                    <Select.Item label="Islam" value="islam" />
                    <Select.Item label="Katholik" value="katholik" />
                    <Select.Item label="Kristen" value="kristen" />
                    <Select.Item label="Hindu" value="hindu" />
                    <Select.Item label="Budha" value="Budha" />
                  </Select>
                </Stack>
                <Stack>
                  <FormControl.Label>
                    <Text fontSize="16">Alasan Membutuhkan Donor</Text>
                  </FormControl.Label>
                  <Input
                    height="10"
                    fontSize="16"
                    borderColor="#AF2242"
                    _focus={{ borderColor: '#AF2242' }}
                    borderWidth="0.9"
                    onChange={(val) => {
                      setBabyReason(val);
                      checkInputs();
                    }}
                  />
                </Stack>
              </Stack>
            </FormControl>
          </Box>
          <Box marginY="5" width="100%" alignItems="center">
            <Button
              borderRadius="10"
              bgColor="#AF2242"
              width="70%"
              onPress={() => navigate('RecipientChatRoomScreen')}
            >
              <Text fontWeight="bold" color="white" fontSize="14">
                Selanjutnya
              </Text>
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FindDonor;
