import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                name: 'name', main: 'main', description: 'description', temp: 0, temp_min: 0, temp_max: 0
            }
        }
    }

    fetchData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=4a39592e3295c25a1ddda224e3e4827d`)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    forecast: {
                        name: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        temp_min: json.main.temp_min,
                        temp_max: json.main.temp_max
                    }
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    componentDidMount = () => this.fetchData()

    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./bg2.jpg')} style={styles.backdrop}>
                    <View style={styles.show}>
                        <View style={styles.zip}>
                            <Text style={styles.txt}>Zip code is {this.props.zipCode}.</Text>
                        </View>
                        <View style={styles.forecast}>
                            <Forecast {...this.state.forecast} />
                        </View>
                    </View>
                    <Text style={styles.myName}>MUSTOFA  SACHI  5935512037</Text>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // paddingTop: 25,
    },
    backdrop: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    show: {
        width: '100%',
        height: '65%',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    txt: {
        fontSize: 15,
        color: 'white',
    },
    zip: {
        width: '100%',
        height: '20%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    forecast: {
        width: '100%',
        height: '75%',
    },
    myName: {
        fontSize: 15, 
        color: 'white', 
        textAlign: 'center'
    }
});