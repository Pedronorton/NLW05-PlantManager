import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'

import wateringImg from '../assets/watering.png'
import Button from '../components/Button'
import colors from '../styles/colors'

export function Welcome(){
    const [visible, setVisible] = useState(false)

    function handleVisibility(){
        setVisible(!visible)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'} 
                forma fácil
            </Text>
            { visible &&
                <Image source={wateringImg} style={styles.image}></Image>
            }
            <Text style={styles.subTitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar
            </Text>
            <Button title=">" onPress={handleVisibility}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        paddingTop:20,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading

    },
    subTitle : {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    image: {
        width: 292,
        height: 294
    },
})