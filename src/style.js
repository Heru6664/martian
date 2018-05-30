import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e67e22',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 50
    },
    content:{
        marginTop: 50,
    },
    contentText: {
        color: '#ffffff',
        textAlign: 'justify',
        alignItems: 'center',
        padding: 15,
    },
    header:{
        height:90,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TouchableHighlight: {
        marginLeft: 10,
        marginTop: 20,
    },
    iconHeader: {
        width: 32, 
        height: 32,
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo:{
        width: 100,
        height:100
    },
    title:{
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 30,
        textAlign: 'center',
        opacity: 0.5,
        width: 150
    },
    input:{
        height: 40,
        width: 300,
        // backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        // color: '#ffffff',
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor: '#d35400',
        paddingVertical: 10,
    },
    buttonText:{
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    formContainer:{
        paddingTop: 50,
    },
    aboutMenu:{
        width: 300, 
        height: 50, 
        right: 0,
        fontSize: 12, 
        color: '#ffffff',
        backgroundColor: '#f39c12',
        paddingVertical: 15,
        textAlign: 'center',
        borderRadius: 5,
        padding: 10,
    },
    aboutButton:{
        marginBottom: 50,
    },
    loginContainer:{
        marginTop: 25,
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    buttonLogin: {
        width: '48%',
        backgroundColor:'#3498db',
        padding: 10
    }
    
});

export default styles;