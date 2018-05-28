/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Body from './app/component/Body';

export default class App extends Component<Props> {
  render() {
    return (
      <Body />
    );
  }
}
