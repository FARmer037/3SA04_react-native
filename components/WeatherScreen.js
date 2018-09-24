import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather'

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <View style={{width: '100%'}}>
                    <Text style={styles.header}>Weather</Text>
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
    header: {
        fontSize: 20,
        textAlign: 'center',
    }
})
