import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'

export default class Weather extends Component {
    render() {
        return (
            <LinearGradient Colors={['#00C6Fb', '#0056EA']} style={styles.container}></LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});