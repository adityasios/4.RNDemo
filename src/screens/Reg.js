//#region import
import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Image,
  Text,
  useColorScheme,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
const {height, width} = Dimensions.get('window');
//#endregion

//#region Main
export default function Reg({navigation, route}) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'red' : 'blue',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>THIS IS REG SCREEN</Text>
    </SafeAreaView>
  );
}
//#endregion
