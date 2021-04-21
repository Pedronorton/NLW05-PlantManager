import React from 'react'
import { 
    StyleSheet, 
    SafeAreaView,} from 'react-native'

import LottieView from 'lottie-react-native'

import loadAnimation from '../assets/load.json'

export function Load(){
    
    
    
    return (
        <SafeAreaView style={styles.container}>
           <LottieView 
                source={loadAnimation}
                autoPlay
                loop
                style={styles.animation}
           />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        backgroundColor: 'transparent',
        width: 200,
        height: 200,
    },

})