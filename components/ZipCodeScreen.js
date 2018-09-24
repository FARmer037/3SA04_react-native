import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigate }) => (
    <View style={styles.zipItem}>
        <Text style={styles.zipPlace}>{place}</Text>
        <Text style={styles.zipCode}>{code}</Text>
    </View>
)

const _keyExtractor = item => item.code

export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<View style={{width: '100%'}}>
                <Text style={styles.heater}>Choose a zip code</Text>
            </View>
            ),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <FlatList data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    zipItem: {
        flexDirection: 'row',
        flex: 1,
    },
    zipPlace: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 30,
        fontSize: 20,
    },
    zipCode: {
        flex: 1,
        paddingTop: 40,
        textAlign: 'center',
        fontSize: 20,
    },
    heater: {
        fontSize: 20,
        textAlign: 'center',
    }
});