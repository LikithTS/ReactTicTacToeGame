import { View, Text, ImageSourcePropType, Image, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'


type TicToePros = PropsWithChildren<{
    gridId : number
    gridImage : ImageSourcePropType
}>

const TicTacCardView = (props : TicToePros) => {
  return (
    <View style = {styles.container}>
        <Image source={props.gridImage} style = {styles.imageContainer} />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        height :60,
        width : 60,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#FFFFFF',
        borderRadius : 6,
        margin : 10
    },
    imageContainer : {
        height : 30,
        width : 30
    }
  });

export default TicTacCardView