import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { 
    Text,
    StyleSheet,
    Image,
    View,} from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import userImg from '../assets/ppp.png'

export function Header(){
    const navigation = useNavigation();

    return (
        
        <View style={styles.container}>
            <View >
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.username}>Pedrão</Text>
            </View>
                <Image source={userImg} style={styles.image}></Image>
        </View>
            
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    username: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40,
    },
    
    
})