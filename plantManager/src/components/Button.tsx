import React from 'react'
import { 
    Text,
    StyleSheet, 
    TouchableOpacity,
    ColorPropType,
    TouchableOpacityProps} from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonsProps extends TouchableOpacityProps{
    title: string
}

export function Button({title, ...rest} : ButtonsProps){
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.2}
            {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>

                    
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
        borderRadius: 16,
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading,
    },
})