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
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class Body extends Component<Props> {
  constructor(Props){
      super(Props);
      this.state={
        player1Select: '',
        player2Select: '',
        scorePlayer1: 0,
        scorePlayer2: 0,
      };
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.hammer}
                        onPress={this.hammerPress.bind(this)}>
                        <Text style={styles.itemText}>Hammer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paper}
                        onPress={this.paperPress.bind(this)}>
                        <Text style={styles.itemText}>Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scissors}
                        onPress={this.scissorsPress.bind(this)}>
                        <Text style={styles.itemText}>Scissors</Text>
        </TouchableOpacity>
        <Text style={styles.scoreText}>Player1: {this.state.scorePlayer1} - Player2: {this.state.scorePlayer2}</Text>
        <Button title='check result' color='orange' onPress={this.checkResult.bind(this)}></Button>
      </View>
    );
  }
  hammerPress() {
    if (!this.state.player1Select) {
      this.setState({player1Select: 'hammer'})
    } else {
      this.setState({player2Select: 'hammer'})
    }
  }
  paperPress() {
    if (!this.state.player1Select) {
      this.setState({player1Select: 'paper'})
    } else {
      this.setState({player2Select: 'paper'})
    }
  }
  scissorsPress() {
    if (!this.state.player1Select) {
      this.setState({player1Select: 'scissors'})
    } else {
      this.setState({player2Select: 'scissors'})
    }
  }
  checkResult(){
    if (this.state.player1Select==='hammer') {
      if (this.state.player2Select==='paper') {
        alert('Player2 Win!!!');
        this.setState({player1Select: ''})
        this.setState({player2Select: ''})
        this.setState({scorePlayer2: this.state.scorePlayer2+1})
      } else if (this.state.player2Select==='scissors') {
        alert('Player1 Win!!!');
        this.setState({player1Select: ''})
        this.setState({player2Select: ''})
        this.setState({scorePlayer1: this.state.scorePlayer1+1})
      } else if (this.state.player2Select==='hammer') {
        alert('Draw!!!');
        this.setState({player1Select: ''})
        this.setState({player2Select: ''})
      } else {
        alert('Player2 please select the answer');
      }
    } else if (this.state.player1Select==='paper') {
      if (this.state.player2Select==='scissors') {
        alert('Player2 Win!!!');
        this.setState({player1Select: ''})
        this.setState({player2Select: ''})
        this.setState({scorePlayer2: this.state.scorePlayer2+1})
      } else if (this.state.player2Select==='hammer') {
        alert('Player1 Win!!!');
        this.setState({player1Select: ''})
        this.setState({player2Select: ''})
        this.setState({scorePlayer1: this.state.scorePlayer1+1})
      } else if (this.state.player2Select==='paper') {
        alert('Draw!!!');
        this.setState({player1Select: ''})
        this.setState({player2Select: ''})
      } else {
        alert('Player2 please select the answer');
      }
    } else if (this.state.player1Select==='scissors') { //scissor
      if (this.state.player2Select==='hammer') {
        alert('Player2 Win!!!');
        this.setState({player1Select: ''})
        this.setState({player2Select: ''})
        this.setState({scorePlayer2: this.state.scorePlayer2+1})
      } else if (this.state.player2Select==='paper') {
        alert('Player1 Win!!!');
        this.setState({player1Select: ''})
        this.setState({player2Select: ''})
        this.setState({scorePlayer1: this.state.scorePlayer1+1})
      } else if (this.state.player2Select==='scissors') {
        alert('Draw!!!');
        this.setState({player1Select: ''})
        this.setState({player2Select: ''})
      } else {
        alert('Player2 please select the answer');
      }
    } else {
      alert('Player1 please select the answer');
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hammer:{
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper:{
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scissors:{
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemText:{
    fontSize: 30
  },
  scoreText:{
    backgroundColor: 'green',
    textAlign: 'center'
  }
});
