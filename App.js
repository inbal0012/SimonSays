/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

import styles from './Style/App';

const BoardView = require('./Components/BoardView');
const TURN_TEXT = '▓';

let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = true;
let win;

var SoundPlayer = require('react-native-sound');
var song = null;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      turnCount: '-',

      // topLeftColor: '#006400',
      // topRightColor: '#8b0000',
      // bottomLeftColor: '#daa520',
      // bottomRightColor: '#00008b',

      topLeftText: '',
      topRightText: '',
      bottomLeftText: '',
      bottomRightText: '',

      pause: false,
    };
  }

  play() {
    console.log('play');

    clearInterval(intervalId);
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    this.setState({turnCount: 1});
    good = true;
    order.push(Math.floor(Math.random() * 4) + 1); //first num
    compTurn = true;
    intervalId = setInterval(() => {
      this.gameTurn();
    }, 800);
  }

  clearColor() {
    console.log('clearColor');

    //TODO backgroundColor  topLeft, topRight, bottomLeft, bottomRight

    this.setState({topLeftText: ''});
    this.setState({topRightText: ''});
    this.setState({bottomLeftText: ''});
    this.setState({bottomRightText: ''});
  }

  flashColor() {
    console.log('flashColor');

    //TODO backgroundColor  topLeft, topRight, bottomLeft, bottomRight

    this.setState({topLeftText: '--'});
    this.setState({topRightText: '--'});
    this.setState({bottomLeftText: '--'});
    this.setState({bottomRightText: '--'});
  }

  gameTurn() {
    console.log('gameTurn ' + flash + turn);
    on = false;

    if (flash == turn) {
      clearInterval(intervalId);
      compTurn = false;
      this.clearColor();
      on = true;
    }

    if (compTurn) {
      this.clearColor();
      setTimeout(() => {
        console.log('gameTurn -> compTurn -> setTimeout order: ' + order);
        if (order[flash] == 1) this.one();
        if (order[flash] == 2) this.two();
        if (order[flash] == 3) this.three();
        if (order[flash] == 4) this.four();
        flash++;
      }, 200);
    }
  }

  check() {
    console.log('check');
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) {
      good = false;
      on = false;
    }

    // if (playerOrder.length == 20 && good) {
    //   this.winGame();
    // }

    if (good == false) {
      this.flashColor();
      this.setState({turnCount: 'NO!'});

      noise = false;
    }

    if (turn == playerOrder.length && good && !win) {
      turn++;
      playerOrder = [];
      compTurn = true;
      flash = 0;
      this.setState({turnCount: turn}); //update strike counter
      order.push(Math.floor(Math.random() * 4) + 1); //add another num
      intervalId = setInterval(() => {
        this.gameTurn();
      }, 800);
    }
  }

  winGame() {
    console.log('WIN!!!');
    this.flashColor();
    this.setState({turnCount: 'WIN!'});
    on = false;
    win = true;
  }

  one() {
    console.log('one');
    if (noise) {
      //TODO Sound
    }
    noise = true;
    //TODO backgroundColor
    //styles.topLeft.backgroundColor = '#90ee90';
    this.setState({topLeftText: TURN_TEXT});
  }

  two() {
    console.log('two');
    if (noise) {
      //TODO Sound
    }
    noise = true;
    //TODO backgroundColor
    this.setState({topRightText: TURN_TEXT});
  }

  three() {
    console.log('three');
    if (noise) {
      //TODO Sound
    }
    noise = true;
    //TODO backgroundColor
    this.setState({bottomLeftText: TURN_TEXT});
  }

  four() {
    console.log('four');
    if (noise) {
      //TODO Sound
    }
    noise = true;
    //TODO backgroundColor
    this.setState({bottomRightText: TURN_TEXT});
  }

  clickOne() {
    console.log('clickOne');
    if (on) {
      console.log('clickOne -> on');
      playerOrder.push(1);
      this.check();
      this.one();
      if (!win && good) {
        setTimeout(() => {
          console.log('clickOne -> on -> !win');
          this.clearColor();
        }, 300);
      }
    }
  }

  clickTwo() {
    console.log('clickTwo');
    if (on) {
      console.log('clickTwo -> on');
      playerOrder.push(2);
      this.check();
      this.two();
      if (!win && good) {
        setTimeout(() => {
          console.log('clickTwo -> on -> !win');
          this.clearColor();
        }, 300);
      }
    }
  }

  clickThree() {
    console.log('clickThree');
    if (on) {
      console.log('clickThree -> on');
      playerOrder.push(3);
      this.check();
      this.three();
      if (!win && good) {
        console.log('clickThree -> on -> !win');
        setTimeout(() => {
          this.clearColor();
        }, 300);
      }
    }
  }

  clickFour() {
    console.log('clickFour');
    if (on) {
      console.log('clickFour -> on');
      playerOrder.push(4);
      this.check();
      this.four();
      if (!win && good) {
        console.log('clickFour -> on -> !win');
        setTimeout(() => {
          this.clearColor();
        }, 300);
      }
    }
  }

  _onHideUnderlayTopRight() {
    console.log('_onHideUnderlayTopRight');
    this.setState({topRightPressStatus: false});
  }
  _onShowUnderlayTopRight() {
    console.log('_onShowUnderlayTopRight');
    this.setState({topRightPressStatus: true});
  }

  // componentWillMount(num) {
  //   let file_name;
  //   switch (num) {
  //     case 1:
  //       file_name = 'a_sharp.wav';
  //       break;
  //     case 2:
  //       file_name = 'a_sharp.wav';
  //       break;
  //     case 3:
  //       file_name = 'a_sharp.wav';
  //       break;
  //     case 4:
  //       file_name = 'a_sharp.wav';
  //       break;
  //   }

  //   song = new SoundPlayer('a_sharp.wav', SoundPlayer.MAIN_BUNDLE, error => {
  //     if (error)
  //       ToastAndroid.show('Error when init SoundPlayer', ToastAndroid.SHORT);
  //   });
  // }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <Button
          title="Start"
          style={styles.button}
          onPress={() => this.play()}
        />

        <View style={styles.row}>
          <TouchableOpacity
            style={
              styles.topRight
              // this.state.pressStatus ? styles.topRightPressed : styles.topRight
            }
            onHideUnderlay={() => this.setState({topRightPressStatus: false})}
            onShowUnderlay={() => this.setState({topRightPressStatus: true})}
            onPress={() => this.clickTwo()}>
            <Text style={styles.sectionTitle}>{this.state.topRightText}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.topLeft}
            onPress={() => this.clickOne()}>
            <Text style={styles.sectionTitle}>{this.state.topLeftText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.bottomRight}
            onPress={() => this.clickFour()}>
            <Text style={styles.sectionTitle}>
              {this.state.bottomRightText}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomLeft}
            onPress={() => this.clickThree()}>
            <Text style={styles.sectionTitle}>{this.state.bottomLeftText}</Text>
          </TouchableOpacity>
        </View>
        <Text>{this.state.turnCount}</Text>
      </View>
    );
  }
}
