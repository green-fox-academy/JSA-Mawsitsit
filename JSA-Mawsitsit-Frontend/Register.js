import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { gray } from 'ansi-colors';

const initState = {
    email: '',
    phoneNumber: '',
    password: '',
    registration: []
}
const validate = () => {
    const { email, phoneNumber, password } = state
    let emailError = ''
    let phoneNumberError = ''
    let passwordError = ''
    if (!state.email.includes('@')) {
        emailError = "Not valid Email address"
    }
    if (!state.phoneNumber.length >= 8) {
        emailError = "Not valid phone number"
    }
    if (!this.state.password.length >= 8) {
        passwordError = "Password must be at least 8 characters"
    }
}
const checked = 0
const Register = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>E-mail</Text>
            <TextInput
                style={styles.textinput}
                type='text'
                autoCapitalize='none'
                placeholder='Email'
            />
            <View>
                {checked === 0 ? (
                    <Text style={styles.text}>Not valid Email address</Text>
                ) : (<Text ></Text>)}
            </View>
            <Text style={styles.text}>Phone number</Text>
            <TextInput
                style={styles.textinput}
                type='text'
                autoCapitalize='none'
                placeholder='phone number'
            />
            <View>
                {checked === 0 ? (
                    <Text style={styles.text}>Not valid Phone number</Text>
                ) : (<Text ></Text>)}
            </View>
            <Text style={styles.text}>Password</Text>
            <TextInput
                style={styles.textinput}
                type='password'
                autoCapitalize='none'
                placeholder='password'
            />
            <Text style={styles.text}>Password confirmation</Text>
            <TextInput
                style={styles.textinput}
                type='password'
                autoCapitalize='none'
                placeholder='password'
            />
            <Button style={styles.button} title='Register'></Button>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginLeft: 20,
        width: '90%',
        backgroundColor: '#fff',

    },
    text: {
        marginTop: 10
    },
    textinput: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }

});

export default Register