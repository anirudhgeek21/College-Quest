import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MyComponent from '/Users/anirudhprajapati/Desktop/VRproject/MyProject/client/src/component/MyComponent.js';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      
      <MyComponent />
    </>
  );
}
