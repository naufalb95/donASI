import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import FindDonorScreen from './FindDonorScreen';
import RecipientRequirementScreen from './RecipientRequirementScreen';
import RecipientFormScreen from './RecipientFormScreen';
import RecipientChatRoomScreen from './RecipientChatRoomScreen';
import DeliveryFormScreen from './DeliveryFormScreen';
import TrackingScreen from './TrackingScreen';
import CompleteScreen from './CompleteScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createNativeStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: 'Find Donor', headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: 'Find Donor', headerShown: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: 'Find Donor', headerShown: false }}
      />
      <Stack.Screen
        name="CompleteScreen"
        component={CompleteScreen}
        options={{ title: 'Find Donor', headerShown: false }}
      />
      <Stack.Screen
        name="TrackingScreen"
        component={TrackingScreen}
        options={{ title: 'Find Donor', headerShown: false }}
      />
      <Stack.Screen
        name="DeliveryFormScreen"
        component={DeliveryFormScreen}
        options={{ title: 'Find Donor', headerShown: false }}
      />
      <Stack.Screen
        name="RecipientChatRoomScreen"
        component={RecipientChatRoomScreen}
        options={{ title: 'Find Donor', headerShown: false }}
      />
      <Stack.Screen
        name="RecipientFormScreen"
        component={RecipientFormScreen}
        options={{ title: 'Find Donor', headerShown: false }}
      />
      <Stack.Screen
        name="RecipientRequirementScreen"
        component={RecipientRequirementScreen}
        options={{ title: 'Find Donor', headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'My Home', headerShown: false }}
      />
      <Stack.Screen
        name="FindDonorScreen"
        component={FindDonorScreen}
        options={{ title: 'Find Donor', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
