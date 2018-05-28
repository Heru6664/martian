import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import {Icon, Button, Container, Hader, Content, Left} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../src/style';

export default class HomeScreen extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Home',
        drawerIcon: () => {
            let drawerLabel = 'Home 2';
            return(
                <MaterialIcons
                    name="home"
                    size={24}
                    style={{color:'#060000cc'}}
                >

                </MaterialIcons>
            );
        }
    }
    render(){
        return(
            <ImageBackground style={styles.container} source={require('../img/mars.jpg')}>
                <Content style={styles.content}>
                    <Text style={styles.text}> Home  </Text>
                    <Button  
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        title ="Open DrawNavigator"
                    />
                    <Text style={styles.contentText}>
                        Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet" because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye.
                    </Text>
                </Content>
            </ImageBackground>
        );
    }
}

