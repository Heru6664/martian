import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Icon, Button, Container, Hader, Content, Left} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginForm from '../components/LoginForm';
import styles from '../src/style';
import * as Animatable from 'react-native-animatable';


export default class SignInScreen extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Sign In',
        drawerIcon: () => {
            return(
                <MaterialIcons
                    name="dashboard"
                    size={24}
                    style={{color:'#060000cc'}}
                >
                </MaterialIcons>
            );
        }
    }
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Content behavior="padding" style={styles.content}>
                    <Button  
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        title ="Open DrawNavigator"
                    />
                    <View style={styles.logoContainer}>
                    <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite"  style={{width:300, height: 100, alignItems: 'center', justifyContent:'center'}}>
                      <Image source={require('../img/ball.png')} style={{width:100, height:100,opacity: 0.5}} />
                    </Animatable.View>
                        
                        <Text style={styles.title}> Login Plese for more information </Text>
                    </View>
                    <KeyboardAvoidingView behavior="padding">
                        <LoginForm {...this.props}/>
                    </KeyboardAvoidingView>
                </Content>
            </KeyboardAvoidingView>
        );
    }
}