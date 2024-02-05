/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  FlatList,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TicTacCardView from './components/TicTacCardView';
import { IntialGameView } from './utils/Constants';
import editImage from '../assets/edit-view.png';
import crossImage from '../assets/cross-view.png';
import circleImage from '../assets/circle-view.png';
import Snackbar from 'react-native-snackbar';


function App(): React.JSX.Element {

  const playerOne = "Player1"
  const playerTwo = "Player2"

  const [isCross, setIsCross] = useState<boolean>(false)
  const [isWinner, setIsWinner] = useState('')
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9))

  const resetGameState = () => {
    setIsCross(false)
    setIsWinner('')
    setGameState(new Array(9).fill('empty',0,9))
  }

  const checkForWinner = () => {
      if(gameState[0] !== 'empty' && gameState[0] === gameState[1] && gameState[0] === gameState[2]) {
        setIsWinner(`Winner is ${gameState[0]}`)
      } else if (gameState[0] !== 'empty' && gameState[0] === gameState[3] && gameState[0] === gameState[6]) {
        setIsWinner(`Winner is ${gameState[0]}`)
      } else if (gameState[0] !== 'empty' && gameState[0] === gameState[4] && gameState[0] === gameState[8]) {
        setIsWinner(`Winner is ${gameState[0]}`)
      } else if (gameState[1] !== 'empty' && gameState[1] === gameState[4] && gameState[1] === gameState[7]) {
        setIsWinner(`Winner is ${gameState[1]}`)
      } else if (gameState[2] !== 'empty' && gameState[2] === gameState[5] && gameState[2] === gameState[8]) {
        setIsWinner(`Winner is ${gameState[2]}`)
      } else if (gameState[2] !== 'empty' && gameState[2] === gameState[4] && gameState[2] === gameState[6]) {
        setIsWinner(`Winner is ${gameState[2]}`)
      } else if (gameState[3] !== 'empty' && gameState[3] === gameState[4] && gameState[3] === gameState[5]) {
        setIsWinner(`Winner is ${gameState[3]}`)
      } else if (gameState[6] !== 'empty' && gameState[6] === gameState[7] && gameState[6] === gameState[8]) {
        setIsWinner(`Winner is ${gameState[6]}`)
      } else if (!gameState.includes('empty', 0)) {
        setIsWinner('Draw game...')
      }
  }

  const updateImageBasedOnPlayer = (position : number) => {
     if(isWinner) {
        return Snackbar.show({
          text : isWinner,
          backgroundColor : '#0000000',
          textColor : '#FFFFFF'
        })
     }

     if(gameState[position] === 'empty') {
        gameState[position] = isCross ? 'cross' : 'circle'
        setIsCross(!isCross)
     } else {
      return Snackbar.show({
        text : 'Position is not empty',
        backgroundColor : 'red',
        textColor : '#FFFFFF'
      })
     }

     checkForWinner()
  }

  return (
    <>
      <View style = {styles.mainContainer}>
            <View style = {styles.playerViewContainer}>
              <Text style = {styles.playerText}> Player { isCross ? 'X' : 'O' } 's Turn</Text>
            </View>
            
            <View style = {styles.flatListContainer}>
                <FlatList data={gameState} renderItem={({item, index}) => (
                  <Pressable onPress= {() => updateImageBasedOnPlayer(index)} key={index}>
                    <TicTacCardView name={item}/>
                  </Pressable>
                )}
                numColumns={3}/>
            </View>

            { isWinner ? (<View>
              <Text style = {styles.winnerStyle}>{isWinner}</Text>
            </View>) : ''
            }

            <Pressable onPress={() => resetGameState()}>
              <View style = {styles.buttonContainer}>
                <Text style = {styles.buttonText}>Restart Game</Text>
              </View>
            </Pressable>

        </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex : 1,
    backgroundColor : '#A4B0BD'
  },
  playerViewContainer: {
    height : 40,
    margin : 15,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#218F76',
  },
  playerText: {
    fontSize: 18,
    color : "#FFFFFF",
    fontWeight : '800'
  },
  flatListContainer: {
    justifyContent : 'space-evenly',
    alignItems : 'center',
    margin : 15
  },
  buttonContainer : {
    height : 50,
    margin : 20,
    borderRadius : 6,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#B83227'
  },
  buttonText : {
    fontSize : 16,
    borderRadius : 6,
    color : "#FFFFFF",
    fontWeight : '600'
  },
  winnerStyle : {
    fontSize : 20,
    color : '#26ae60',
    fontWeight : '800',
    margin : 20,
    justifyContent : 'center',
    alignItems : 'center'
  }
});

export default App;
