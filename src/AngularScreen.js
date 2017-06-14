import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  justifyContent: center;
  alignItems: center;
  backgroundColor: #F5FCFF;
  margin-top: 300px;
`;

const WelcomeText = styled.Text`
  fontSize: 20;
  textAlign: center;
`;

const StyledImage = styled.Image`
  margin: 20px;
`;

export default class AngularScreen extends Component {
  render() {
    return (
      <MainContainer>
        <WelcomeText>
          Welcome to Angular.
        </WelcomeText>
        <StyledImage source={require('./img/banana.png')}/>
      </MainContainer>
    );
  }
}