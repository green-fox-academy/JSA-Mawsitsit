import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
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
            <View>
                {checked === 0 ? (
                    <View style={styles.passwordcheck}>
                        <Text >Weak password</Text>
                        <View style={styles.bar}></View>
                    </View>
                ) : (<Text ></Text>)}
            </View>
            <Text style={styles.text}>Password confirmation</Text>
            <TextInput
                style={styles.textinput}
                type='password'
                autoCapitalize='none'
                placeholder='password'
            />
            <View>
                {checked === 0 ? (
                    <Text style={styles.text}>Password has to match!</Text>
                ) : (<Text ></Text>)}
            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text style={styles.buttontext}>Register</Text>
                </TouchableOpacity>
            </View>

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
    bar: {
        height: 8,
        width: 150,
        backgroundColor: '#48BBEC'
    },
    text: {
        marginTop: 10
    },
    textinput: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    buttontext: {
        color: 'white',
        fontSize: 23,
    },
    buttoncontainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    passwordcheck: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        marginTop: 120,
        height: 60,
        width: 120,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 2,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default Register