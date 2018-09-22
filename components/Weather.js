import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: 'main', description: 'description', temp: 0
            }
        }
    }

    fetchData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=90110,th&units=metric&APPID=4a39592e3295c25a1ddda224e3e4827d`)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    forecast: {
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    }
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    componentDidMount = () => this.fetchData()

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./bg.jpeg')} style={styles.backdrop}>
                    <View style={styles.show}>
                        <View style={styles.zip}>
                            <Text style={styles.txt}>Zip code is {this.props.zipCode}.</Text>
                        </View>
                        <View style={styles.forecast}>
                            <Forecast {...this.state.forecast} />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
    },
    backdrop: {
        width: '100%',
        height: '100%'
    },
    show: {
        width: '100%',
        height: '45%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    txt: {
        fontSize: 20,
        color: 'white',
    },
    zip: {
        width: '100%',
        height: '20%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    forecast: {
        width: '100%',
        height: '75%',
    }
});