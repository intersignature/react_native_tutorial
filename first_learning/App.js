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
  Button,
  TextInput
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
        text:""
      };
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
          text: {this.state.text}
        </Text>
        <Button
          onPress={this.changeMessage.bind(this)}
          title = {this.state.message}/>
        <Button
          onPress={this.insertData.bind(this)}
          title = "insert"/>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            style = {{width: 200}}
            placeholder="placeholder"
            editable={true}
            maxLenght={40}/>
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
  TextInputSty: {
    height: 30,
    width: 50,
    borderColor: 'gray',
    borderWidth: 1
  }
});
