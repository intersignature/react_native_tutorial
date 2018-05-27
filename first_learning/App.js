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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(){
      super();
      this.state={
        data:[],
        message:"UnLike",
        type:""
      };
      this.changeMessage=this.changeMessage.bind(this);
      this.insertData=this.insertData.bind(this);
  }
  changeMessage(){
    this.setState({message:"Like"})
  }
  insertData(){
    var item="React";
    var myArray=this.state.data;
    myArray.push(item);
    this.setState({data:myArray});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.message}
        </Text>
        <Text style={styles.instructions}>
          {this.state.data}
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button
          onPress={this.changeMessage}
          title = {this.state.message}/>
        <Button
          onPress={this.insertData}
          title = "insert"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
