import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View, StyleSheet, Button, Platform, Image, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
const { width } = Dimensions.get('window');
import * as Linking from 'expo-linking';
import { useNavigation } from '@react-navigation/native';


export default function BarCodeScan() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        //Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        Alert.alert(
            'Alert Title',
            `Bar code with type ${type} and data ` + data + `has been scanned!`,
            [
                {
                    text: 'Url',
                    onPress: () => Linking.openURL(data)
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const navigation = useNavigation();

    return (


        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[StyleSheet.absoluteFill, styles.container]}>
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <Text style={styles.description}>Scan your QR code</Text>
                {/* <Image
                style={styles.qr}
                source={require('./assets/img/QR.png')}
            /> */}

                <View
                    style={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'transparent',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderColor: 'white',
                        borderWidth: 0.5,
                    }}
                />
                <Text
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={styles.cancel}>
                    Cancel
    </Text>

                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
        </BarCodeScanner>

    );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

const deviceHeight = Dimensions.get("window").height;

const deviceWidth = Dimensions.get("window").width;
const opacity = 'rgba(0, 0, 0, .6)';
const qrSize = width * 0.7

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 1)',

    },
    qr: {
        marginTop: '20%',
        marginBottom: '20%',
        width: qrSize,
        height: qrSize,
    },
    description: {
        fontSize: width * 0.06,
        marginTop: '10%',
        textAlign: 'center',
        width: '60%',
        color: 'white',
    },
    cancel: {
        fontSize: width * 0.04,
        textAlign: 'center',
        width: '100%',
        color: 'white',
    }
});
