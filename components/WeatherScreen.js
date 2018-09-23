import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather'

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Weather</Text>
                </View>
            ),
        }
    }

    render() {
        return (
            <Weather zipCode="90110" />
        );
    }
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})