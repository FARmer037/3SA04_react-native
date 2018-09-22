import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textBig}>{this.props.main}</Text>
                <Text style={styles.textSmall}>{this.props.description}</Text>
                <View style={styles.temperture}>
                    <Text style={styles.textBig}>{this.props.temp}</Text>
                    <Text style={styles.textSmall}>°C</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    temperture: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textBig: {
        fontSize: 40,
        color: 'white',
    },
    textSmall: {
        fontSize: 20,
        color: 'white',
    }
});
