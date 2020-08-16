import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default class Weather extends Component {
    render() {
        return (
            <LinearGradient colors={['#00C6Fb', '#0056EA']} style={styles.container}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});