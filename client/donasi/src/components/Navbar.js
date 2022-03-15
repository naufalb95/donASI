import React from 'react';
import { Box, Text } from 'native-base';
import { SvgXml } from 'react-native-svg';
import Home from '../../assets/home.svg';
import Chat from '../../assets/chat.svg';
import Person from '../../assets/user_outline.svg';
import PersonFill from '../../assets/user_fill.svg';
import Konsultasi from '../../assets/konsultasi.svg';
import { useNavigation, useRoute } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Box
      position="absolute"
      elevation="100"
      zIndex="100"
      bottom="24"
      width="100%"
      justifyContent="center"
      alignItems="center"
      style={{
        shadowColor: '#F7CAC9',
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 11
      }}
    >
      <Box
        width="90%"
        bgColor="#FDF7F7"
        borderColor="#F7CAC9"
        borderWidth="1"
        borderRadius="20"
        paddingY="4"
        paddingX="6"
        flexDirection="row"
      >
        <Box
          flexGrow="1"
          justifyContent="center"
          alignItems="center"
          onTouchEnd={() => navigation.navigate('HomeScreen')}
        >
          <SvgXml
            xml={Home}
            fill={route.name === 'HomeScreen' ? '#AF2242' : '#FDF7F7'}
            stroke={
              route.name === 'HomeScreen' ? '' : 'rgba(90, 122, 164, 0.5)'
            }
            width="90%"
            height="90%"
            strokeWidth="1.5"
          />
          <Text
            color={
              route.name === 'HomeScreen'
                ? '#AF2242'
                : 'rgba(90, 122, 164, 0.5)'
            }
            fontWeight={route.name === 'HomeScreen' ? 'bold' : '500'}
          >
            Beranda
          </Text>
        </Box>
        <Box flexGrow="1" justifyContent="center" alignItems="center">
          <SvgXml
            xml={Chat}
            fill={
              route.name === 'ChatScreen'
                ? '#AF2242'
                : 'rgba(90, 122, 164, 0.5)'
            }
            width="90%"
            height="90%"
          />
          <Text
            color={
              route.name === 'ChatScreen'
                ? '#AF2242'
                : 'rgba(90, 122, 164, 0.5)'
            }
            fontWeight={route.name === 'ChatScreen' ? 'bold' : '500'}
          >
            Chat
          </Text>
        </Box>
        <Box flexGrow="1" justifyContent="center" alignItems="center">
          <SvgXml
            xml={Konsultasi}
            stroke={
              route.name === 'ConsultationScreen'
                ? '#AF2242'
                : 'rgba(90, 122, 164, 0.5)'
            }
            fill="#FDF7F7"
            width="90%"
            height="90%"
          />
          <Text
            color={
              route.name === 'ConsultationScreen'
                ? '#AF2242'
                : 'rgba(90, 122, 164, 0.5)'
            }
            fontWeight={route.name === 'ConsultationScreen' ? 'bold' : '500'}
          >
            Konsultasi
          </Text>
        </Box>
        <Box
          flexGrow="1"
          justifyContent="center"
          alignItems="center"
          onTouchEnd={() => navigation.navigate('ProfileScreen')}
        >
          {route.name === 'ProfileScreen' ? (
            <SvgXml
              xml={PersonFill}
              fill="#AF2242"
              bgColor="#AF2242"
              width="90%"
              height="90%"
            />
          ) : (
            <SvgXml
              xml={Person}
              fill={
                route.name === 'ProfileScreen'
                  ? '#AF2242'
                  : 'rgba(90, 122, 164, 0.5)'
              }
              bgColor={
                route.name === 'ProfileScreen'
                  ? '#AF2242'
                  : 'rgba(90, 122, 164, 0.5)'
              }
              width="90%"
              height="90%"
            />
          )}

          <Text
            color={
              route.name === 'ProfileScreen'
                ? '#AF2242'
                : 'rgba(90, 122, 164, 0.5)'
            }
            fontWeight={route.name === 'ProfileScreen' ? 'bold' : '500'}
          >
            Akun
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
