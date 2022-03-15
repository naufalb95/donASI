import React from 'react';
import { Box, Text } from 'native-base';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Pressable } from 'react-native';
import Boy from '../../assets/boy.svg';

const BoyCard = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <Box
      class="boy"
      width={windowWidth * (3 / 7)}
      marginRight="2"
      marginBottom="2"
    >
      <Pressable
        onPress={() => navigation.navigate('RecipientRequirementScreen')}
      >
        <Box
          height="100"
          borderRadius="10"
          position="relative"
          bg={{
            linearGradient: {
              colors: ['#ced2f0', '#e5e5ea'],
              start: [0, 0],
              end: [0, 1]
            }
          }}
        >
          <Box position="absolute" top="2">
            <Box
              bgColor="#AF2242"
              borderRightRadius="5"
              paddingY="0.5"
              paddingX="1"
            >
              <Text color="white" fontSize="10" fontWeight="bold">
                0.5 km
              </Text>
            </Box>
          </Box>
          <Box width="100%" alignItems="center" position="absolute" bottom="3">
            <Text fontSize="11">
              <Text color="#223A6D">Laki-Laki</Text>{' '}
              <Text color="#5A7AA4" opacity="0.5" fontWeight="bold">
                |
              </Text>{' '}
              <Text color="#223A6D">7 botol</Text>{' '}
              <Text color="#5A7AA4" opacity="0.5" fontWeight="bold">
                |
              </Text>{' '}
              <Text color="#223A6D">Katholik</Text>
            </Text>
          </Box>
          <Box
            width="100%"
            alignItems="flex-end"
            position="absolute"
            top="3"
            right="3"
          >
            <Box>
              <Text fontSize="14" color="#223A6D" fontWeight="600">
                Coblong
              </Text>
              <Text fontSize="14" color="#223A6D" fontWeight="600">
                1 bulan
              </Text>
            </Box>
          </Box>
          <Box
            width="100%"
            alignItems="center"
            position="absolute"
            top="2"
            right="3"
          >
            <SvgXml xml={Boy} />
          </Box>
        </Box>
      </Pressable>
    </Box>
  );
};

export default BoyCard;
