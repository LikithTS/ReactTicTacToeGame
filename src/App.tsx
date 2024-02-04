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


function App(): React.JSX.Element {

  const playerOne = "Player1"
  const playerTwo = "Player2"

  const [playerName, setPlayerName]  = useState(playerOne)
  const [playImage, setPlayImage] = useState<ImageSourcePropType>(editImage)
  const [playPosition, setPlayPosition] = useState(9)

  const updateImageBasedOnPlayer = (player : String, position : number) => {
      if(player === playerOne) {
         setPlayImage(circleImage)
         setPlayerName(playerTwo)
      } else {
        setPlayImage(crossImage)
        setPlayerName(playerOne)
      }
      // Need to check three matching symbols
      setPlayPosition(position)
  }

  return (
    <>
      <View style = {styles.mainContainer}>
        <View style = {styles.playerViewContainer}>
          <Text style = {styles.playerText}>{playerName}</Text>
        </View>
        <View style = {styles.flatListContainer}>
            <FlatList data={IntialGameView} renderItem={({item}) => (
              <Pressable onPress= {() => updateImageBasedOnPlayer(playerName, item.gridId)}>
                <TicTacCardView gridImage={playImage} gridId={item.gridId}/>
              </Pressable>
            )
          }
          keyExtractor={item => item.gridId}
          numColumns={3}/>
        </View>
        <View style = {styles.buttonContainer}>
            <Text style = {styles.buttonText}>Restart Game</Text>
        </View>
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
  }
});

export default App;
