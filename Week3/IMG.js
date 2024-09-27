import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const YourApp = () => {
    return ( <
        View style = {
            { flex: 1, backgroundColor: '#C7F4F6' } } >
        <
        View style = {
            { flex: 3, justifyContent: 'center', alignItems: 'center' } } >
        <
        Image source = { require('./img/Ellipse8.png') }
        /> <
        /View>

        <
        View style = {
            { flex: 1, justifyContent: 'center', alignItems: 'center' } } >
        <
        Text style = { styles.headerText } > GROW { '\n' }
        YOUR BUSINESS < /Text> <
        /View>

        <
        View style = {
            { flex: 1, justifyContent: 'center', alignItems: 'center' } } >
        <
        Text style = { styles.descriptionText } > We will help you to grow your business using online server < /Text> <
        /View>

        <
        View style = {
            { flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' } } >
        <
        TouchableOpacity style = { styles.button } >
        <
        Text style = { styles.buttonText } > LOGIN < /Text> <
        /TouchableOpacity> <
        TouchableOpacity style = { styles.button } >
        <
        Text style = { styles.buttonText } > SIGN UP < /Text> <
        /TouchableOpacity> <
        /View> <
        View style = {
            { flex: 1, alignItems: 'center' } } >
        <
        Text style = { styles.descriptionText } > HOW WE WORK ? < /Text> <
        /View> <
        /View>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    descriptionText: {
        textAlign: 'center',
        fontWeight: 'bold',
        width: '80%',
    },
    button: {
        backgroundColor: 'yellow',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'black',
    },
});

export default YourApp;