import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import styles from '../src/style';
import {render} from 'react-dom';

export default class Comment extends React.Component{
    constructor(){
        super()
        this.state ={
            coment: [],
        }
    }
    render(){
        return(
            <KeyboardAvoidingView>
                <View>
                </View>
            </KeyboardAvoidingView>
            
        );
    } 
}