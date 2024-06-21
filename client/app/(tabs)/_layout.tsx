import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import LoginScreen from '/Users/anirudhprajapati/Desktop/VRproject/MyProject/client/src/component/Authentication/Login.js';
import SignupScreen from '/Users/anirudhprajapati/Desktop/VRproject/MyProject/client/src/component/Authentication/Signup.js';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <LoginScreen />
    </>
  );
}
