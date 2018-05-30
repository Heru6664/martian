import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native';
import {Icon, Button, Container, Hader, Content, Left} from 'native-base';
import styles from '../src/style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Sae, Makiko} from 'react-native-textinput-effects';
import {Google, Facebook} from 'expo';

export default class LoginForm extends React.Component{
    _handleGoogleLogin = async () => {
        try {
            const {type, user} = await Google.logInAsync({
                androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
                iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
                androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
                iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });
            switch(type){
                case 'success' : {
                    Alert.alert(
                        'Logged in!',
                        `Hi ${user.name}!`,
                    );
                    break;
                }
                case 'cancel':{
                    Alert.alert(
                        'Canceled!',
                        'Login was cancelled!',
                    );
                    break;
                }
                default: {
                    Alert.alert(
                        'Oops!',
                        'Login Failed!',
                    );
                }
            }
        } catch (error) {
            Alert.alert(
                'Oops!',
                'Login failed!',
            );
        }
    };

    _handleFacebookLogin = async () => {
        try {
            const {type, token } = await Facebook.logInWithReadPermissionsAsync(
                '1201211719949057',
                {permissions: ['public_profile']}
            );
            switch (type) {
                case 'success': {
                    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                    const profile = await response.json();
                    Aler.alert(
                        'Logged in!',
                        `Hi ${profile.name}`,
                    );
                    break;
                }case 'cancel':{
                    Alert.alert(
                        'Canceled!',
                        'Login was cancelled!',
                    );
                    break;
                }
                default: {
                    Alert.alert(
                        'Oops!',
                        'Login Failed!',
                    );
                }
            }
        } catch (error) {
            Alert.alert(
                'Oops!',
                'Login failed!',
            );
        }
    };
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
                <View style={styles.loginContainer}>
                    <TouchableOpacity style={[styles.buttonLogin, {height:40,justifyContent: 'center'}]} onPress={this._handleGoogleLogin}>
                        <Text style={styles.buttonText}>Login With Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonLogin, {height:40,justifyContent: 'center'}]} onPress={this._handleFacebookLogin}>
                        <Text style={styles.buttonText}>Login With Facebook</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}