import React, { useState } from 'react'
import { 
    View,
    Text, 
    StyleSheet, 
    SafeAreaView, 
    KeyboardAvoidingView, 
    TextInput,
    Platform, 
    TouchableWithoutFeedback,
    Keyboard} from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/core'

export function UserIdentification(){
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>("")

    function handleInputblur(){
        setIsFocused(false)
        setIsFilled(!!name)

    }
    function handleInputFocus(){
        setIsFocused(true)
    }
    function handleInputChange(value: string){
        setIsFilled(!!value)
        setName(value)
    }
    function handleSubmit(){
        navigation.navigate('Confirmation')
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <Text style={styles.title}>
                                Como podemos {'\n'} 
                                chamar você ?
                            </Text>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && 
                                    {borderColor: colors.green}
                                ]}
                                onChangeText={handleInputChange}
                                placeholder="Digite um nome"
                                onBlur={handleInputblur}
                                onFocus={handleInputFocus}/>

                            <View style={styles.footer}>
                                <Button 
                                    title="Confirmar"
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        paddingHorizontal: 54,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    }
})