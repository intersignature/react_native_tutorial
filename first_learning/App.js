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

export default class App extends Component<Props> {
  render() {
    return (
      <Body />
    );
  }
}
