//#region import
import {Dimensions, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
const {height, width} = Dimensions.get('window');
//#endregion

//#region Main
export default function Login({navigation, route}) {
  return (
    <SafeAreaView>
      <Text>THIS IS Login SCREEN</Text>
    </SafeAreaView>
  );
}
//#endregion
