import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import styled from 'styled-components/native';
import Question from './Question';
import Answer from './Answer';

const data = [{
  Q: "The creator of Vue.",
  A: "Who is Evan You?"
},{
  Q: "True or False: Vue has a cli.",
  A: "What is true?"
},{
  Q: "This country has the largest adoption of Vue.",
  A: "What is China?"
},{
  Q: "Vue has over _____ stars on Github.",
  A: "What is 56,635?"
},{
  Q: "Vue was written while the author was at this company.",
  A: "What is Google?"
},{
  Q: "True or False: React is an MVC based framework.",
  A: "What is false?"
},{
  Q: "Vue was released on this year.",
  A: "What is February 2014?"
}];

const ContainerTitle = styled.View`
  justifyContent: center;
  alignItems: center;
  margin: 10px;
`;

const ImageStyled = styled.Image`
  margin: 10px;
`;

const ContainerQuestion = styled.View`
  margin: 10px;
`;

export default class VueScreen extends Component {
  render() {
    return (
      <ContainerTitle>
        <ImageStyled source={require('./img/jeopardy-vue.png')}/>
        <ScrollView>
          {data.map(trivia => (
            <ContainerQuestion>
              <Question q={trivia.Q}/>
              <Answer a={trivia.A}/>
            </ContainerQuestion>
          ))}
        </ScrollView>
      </ContainerTitle>
    );
  }
}
VueScreen.navigationOptions = {
  tabBarIcon: () => (
    <ImageStyled source={require('./img/vue.png')}/>
  )
}