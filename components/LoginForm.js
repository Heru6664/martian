import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Icon, Button, Container, Hader, Content, Left} from 'native-base';
import styles from '../src/style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Sae, Makiko} from 'react-native-textinput-effects';

export default class LoginForm extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
                <Text style={styles.text}> Sign In Here </Text>
                <Makiko 
                    label={'Username or Email'}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor ={'white'}
                    style={styles.input}
                    inputStyle={{ color: '#db786d' }}
                />
                <Makiko 
                    label={'Password'}
                    iconClass={FontAwesomeIcon}
                    iconColor ={'white'}
                    iconName={'pencil'}
                    secureTextEntry
                    style={styles.input}
                    inputStyle={{ color: '#db786d' }}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}