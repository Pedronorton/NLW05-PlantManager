import React from 'react'
import { 
    Text,
    StyleSheet, 
    TouchableOpacity,
    ColorPropType,
    View,
    SafeAreaView} from 'react-native'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Confirmation(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Prontinho
                </Text>
                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas 
                    plantinhas com muito cuidado
                </Text>
                <View style={styles.footer}>
                    <Button 
                        title="Começar"
                    />
                </View>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        width: '100%'
    },
    title: {
        fontSize: 22,
        color: colors.heading,
        fontFamily: fonts.heading,
        textAlign: 'center',
        lineHeight: 38,
        marginTop: 10,
    },
    subtitle: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        textAlign: 'center',
        paddingHorizontal: 20,
    },

    footer: {
        width: '100%',
        paddingHorizontal: 50,
        padding: 20,
    }
    
    
})