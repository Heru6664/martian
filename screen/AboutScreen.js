import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';
import {Icon, Button, Container, Hader, Content, Left} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../src/style';
import * as Animatable from 'react-native-animatable';


export default class HomeScreen extends React.Component{
    handleViewRef = ref => this.view = ref;
    static navigationOptions = {
        tabBarLabel: 'Home',
        drawerIcon: () => {
            let drawerLabel = 'Home 2';
            return(
                <MaterialIcons
                    name="help"
                    size={24}
                    style={{color:'#060000cc'}}
                >

                </MaterialIcons>
            );
        }
    }
    bounce = () => this.view.bounce(800);
    bounceIn = () => this.view.bounceIn(500);


    render(){
        return(
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <Text style={styles.text}> About  </Text>
                    <Button  
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        title ="Open DrawNavigator"
                    />

                    <TouchableWithoutFeedback onPress={this.bounceIn}>
                      <Animatable.View animation="bounceInRight" ref={this.handleViewRef} style={styles.aboutButton}>
                        <Text  style={[styles.aboutMenu, {fontWeight: 'bold'} ]}>About My Martian</Text>
                      </Animatable.View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.bounceIn}>
                      <Animatable.View animation="bounceInRight" ref={this.handleViewRef} style={styles.aboutButton}>
                        <Text  style={[styles.aboutMenu, {fontWeight: 'bold'} ]}>About Author</Text>
                      </Animatable.View>
                    </TouchableWithoutFeedback>
                    
                </Content>
            </Container>
        );
    }
}

