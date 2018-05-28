import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Body from './app/hammer_paper_scissors/Body';
import Main from './app/note/Main';
import GuessMain from './app/guess_random_number/GuessMain'

export default class App extends Component<Props> {
  render() {
    return (
      <GuessMain />
    );
  }
}
