import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Component } from 'react';
import Weather from './Weather';

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        isLoaded: false,
        error: 'Something went wrong'
      });
    },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  render() {
    const { isLoaded,error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ?
          <Weather /> : <View style={styles.loading}><Text style={styles.loadingText}>Gettion the fucking weather...</Text></View>}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
  errorText: {
    color: 'red',
    marginBottom: 40,
    backgroundColor: 'transparent'
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end'
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24,
    paddingLeft: 25
  }
});