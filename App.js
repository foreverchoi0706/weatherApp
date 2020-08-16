import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { Component } from 'react';
import Weather from './Weather';

export default class App extends Component {
  state = {
    isLoaded: true
  }
  render() {
    const { isLoaded } = this.state;
    return ( 
      <View style={styles.container}>
        {isLoaded ? <Weather></Weather>  : <View style={styles.loading}><Text style={styles.loadingText}>Gettion the fucking weather...</Text></View>}
        <View style={styles.redView}></View>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end'
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
    paddingLeft: 25
  }
});