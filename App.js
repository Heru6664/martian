import React from 'react';
import { StyleSheet, Text, View , Easing, Image} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import SignInScreen from './screen/SignInScreen';
import Drawer from 'react-native-drawer-menu';
import AboutScreen from './screen/AboutScreen';

    const Screen = createDrawerNavigator({
      Home :{screen: HomeScreen},
      SignIn : {screen: SignInScreen},
      About : {screen: AboutScreen}
    });
    export default Screen;