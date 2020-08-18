import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableHighlightBase } from 'react-native';
import { Component } from 'react';
import Weather from './Weather';

const API_KEY = 'b1ba56378836cbc4530aa5c6991311dc';


export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        isLoaded: this.getWeather(position.coords.latitude, position.coords.longitude),
      });
    },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }


  getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      }));
  }


  render() {
    const { isLoaded, error, temperature, name } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ?
          <Weather temperature={Math.floor(temperature - 273.15)} temperatureName={name} /> : <View style={styles.loading}><Text style={styles.loadingText}>Gettiong the fucking weather...</Text></View>}
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