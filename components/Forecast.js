import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textMedium}>{this.props.name}</Text>
                <Text style={styles.textBig}>{this.props.temp}°</Text>
                <Text style={styles.textMedium}>{this.props.main}</Text>
                <Text style={styles.textSmall}>{this.props.description}</Text>
                <View style={styles.tempMaxMin}>
                    <View style={styles.box}>
                        <Image source={require('./temp_min.png')} />
                        <Text style={styles.minMax}>{this.props.temp_min}°</Text>
                    </View>
                    <View style={styles.box}>
                        <Image style={{paddingLeft: 30}} source={require('./temp_max.png')} />
                        <Text style={styles.minMax}>{this.props.temp_min}°</Text>
                    </View>
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
    textBig: {
        fontSize: 100,
        color: 'white',
    },
    textMedium: {
        fontSize: 40,
        color: 'white',
    },
    textSmall: {
        fontSize: 20,
        color: 'white',
    },
    tempMaxMin: {
        paddingTop: 20,
        width: '100%',
        flexDirection: 'row'
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    minMax: {
        paddingLeft: 10,
        textAlign: 'center',
        fontSize: 40,
        color: 'white',
    }
});
