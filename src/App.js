import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from 'react-navigation';
import AngularScreen from './AngularScreen';
import EmberScreen from './EmberScreen';
import ReactScreen from './ReactScreen';
import VueScreen from './VueScreen';

const MainContainer = styled.View`
  justifyContent: center;
  alignItems: center;
  margin-top: 300px;
`;

const WelcomeText = styled.Text`
  fontSize: 20;
  textAlign: center;
`;

const StyledImage = styled.Image`
  margin: 20px;
`;

const ReactNativePunApp = props => (
      <MainContainer>
        <WelcomeText>
          The Punderful World of Frameworks.
        </WelcomeText>
        <StyledImage source={require('./img/banana.png')}/>
      </MainContainer>
    );

ReactNativePunApp.navigationOptions = {
  tabBarIcon: () => (
    <StyledImage source={require('./img/banana.png')}/>
  )
}

const mainNavigator = TabNavigator({
  Frameworks: {
    screen: ReactNativePunApp,
    path: ''
  },
  Angular: {
    screen: AngularScreen,
    path: 'angular'
  },
  React: {
    screen: ReactScreen,
    path: 'react'
  },
  Ember: {
    screen: EmberScreen,
    path: 'ember'
  },
  Vue: {
    screen: VueScreen,
    path: 'vue'
  }
});

AppRegistry.registerComponent('reactNativePunApp', () => mainNavigator);
