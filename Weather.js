import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// export default class Weather extends Component {
//     render() {
//         return (
//             <LinearGradient colors={['#00C6Fb', '#0056EA']} style={styles.container}>
//                 <View style={styles.upper}>
//                     <Ionicons color='white' size={144} name='ios-rainy'></Ionicons>
//                     <Text style={styles.temp}>35'</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining like a MF</Text>
//                     <Text style={styles.subTitle}>For more info look outside</Text>
//                 </View>
//             </LinearGradient>
//         );
//     }
//}

const weatherCases = {
    Rain: {
        colors: ['#00C6Fb', '#0056EA'],
        title: 'Raining like a MF',
        subtitle: 'For more info look outside',
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: 'Sunny as Fuck',
        subtitle: 'Go get your ass burnt',
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['00ECBC', '#007ADF'],
        title: 'Thunderstorm int the house',
        subtitle: 'Actually, outside of the house',
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: 'Clouds',
        subtitle: 'I know, Fucking boring',
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: 'Cold as balls',
        subtitle: 'Do you want build a snowman? Fuck no.',
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: 'Drizzle',
        subtitle: 'Is like rain, but gay',
        icon: 'weather-hail'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: 'Haze',
        subtitle: 'Do not know what is this',
        icon: 'weather-hail'

    },
    Mist : {
        colors: ['#D+7D2CC', '#304352'],
        title: 'Haze',
        subtitle: 'It is like you have no glasses on.',
        icon: 'weather-fog'

    }
}

function Weather({ temperature, temperatureName }) {
    return (
        <LinearGradient colors={weatherCases[temperatureName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color='white' size={144} name={weatherCases[temperatureName].icon}></MaterialCommunityIcons>
                <Text style={styles.temp}>{temperature}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[temperatureName].title}</Text>
                <Text style={styles.subTitle}>{weatherCases[temperatureName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    temperatureName: PropTypes.string.isRequired
}


export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: "center",
        justifyContent: "center"
    }, temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
    },
    title: {
        fontSize: 30,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subTitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    }
});