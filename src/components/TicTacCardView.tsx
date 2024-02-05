import { View, Text, ImageSourcePropType, Image, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


type TicToePros = PropsWithChildren<{
    name : String
}>

const TicTacCardView = ({name} : TicToePros) => {
    switch (name) {
        case 'circle':
                return  <View style = {styles.container}>
                            <Icon name='circle-thin' size={38} color='#B83227' />
                        </View>
        case 'cross':
                return  <View style = {styles.container}>
                            <Icon name='times' size={38} color='#0A79DF' />
                        </View>
        default : 
                return <View style = {styles.container}>
                            <Icon name='pencil' size={38} color='#586776' /> 
                      </View>    
    }
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
    }
  });

export default TicTacCardView