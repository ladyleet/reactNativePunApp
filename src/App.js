import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Linking
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
  margin-top: 200px;
`;

const StyledImage = styled.Image`
  margin: 30px;
`;

const TextLink = styled.Text`
  color: blue;
`;

const ReactNativePunApp = props => (
      <MainContainer>
        <StyledImage source={require('./img/jeopardy-js.png')}/>
        <Text>Find this project on</Text>
        <TextLink
          onPress={() => Linking.openURL('http://github.com/ladyleet')}>
          Github
        </TextLink>
        <Text>Made with ❤️ by</Text>
        <TextLink
          onPress={() => Linking.openURL('http://twitter.com/ladyleet')}>
          @ladyleet
        </TextLink>
      </MainContainer>
    );

ReactNativePunApp.navigationOptions = {
  tabBarIcon: () => (
    <StyledImage source={require('./img/js.png')}/>
  )
}

const mainNavigator = TabNavigator({
  Home: {
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
