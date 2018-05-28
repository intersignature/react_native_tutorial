import React, {Component} from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableHighlight
} from 'react-native';

type Props = {};
export default class GuessMain extends Component<Props> {
  constructor(Props){
      super(Props);
      this.state={
        randomNum: Math.floor((Math.random() * 100) + 1),
        chooseNum: 0,
        countTime: 0
      };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.randText}>{this.state.randomNum}</Text>
        <TextInput
          style={styles.guessText}
          onChangeText={(chooseNum) => this.setState({chooseNum})}
          value={this.state.chooseNum.toString()}/>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={styles.randBtn}
            onPress={this.randomNumber.bind(this)}>
            <Text style={styles.textOnBtn}> Random Number </Text>
          </TouchableOpacity>
            <Text style={styles.countTimeText}>Count : {this.state.countTime}</Text>
          <TouchableOpacity
            style={styles.checkBtn}
            onPress={this.checkNumber.bind(this)}>
            <Text style={styles.textOnBtn}> CHECK </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  randomNumber(){
    this.setState({randomNum: Math.floor((Math.random() * 100) + 1)});
    this.setState({countTime: 0});
    this.setState({chooseNum: 0});
  }
  checkNumber(){
    if (this.state.countTime <= 4) {
      if (this.state.chooseNum > this.state.randomNum) {
        alert('Too much');
      } else if (this.state.chooseNum < this.state.randomNum) {
        alert('Too less');
      } else {
        this.randomNumber();
        alert('Winner!!!!');
        return
      }
      this.setState({countTime: this.state.countTime+1});
    } else {
      this.randomNumber();
      alert('You lose and the answer is '+this.state.randomNum);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  randBtn: {
    backgroundColor:'blue'
  },
  checkBtn: {
    backgroundColor:'blue'
  },
  randText:{
    flex: 1,
    color: 'black',
    backgroundColor: 'orange',
    fontSize: 150,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  guessText:{
    flex: 1,
    backgroundColor: 'red',
    fontSize: 150,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  btnGroup:{
    height: 50,
    flexDirection:'row',
  },
  countTimeText:{
    flex:1,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'green',
    color: 'white',
    alignItems: 'center'
  },
  textOnBtn: {
    flex:1,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'blue',
    color: 'white',
    alignItems: 'center',
  }
});
