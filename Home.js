import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, LinearGradient, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



//const [info, setInfo] = useState([]);

class Start extends Component {





    render() {
        return (

            <View style={styles.container}>
                {/* Header */}
                <View style={{ flex: 2 }}>
                    <Image
                        source={require('./assets/banner.jpg')}
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            height: '80%',
                        }}
                    />
                    <View
                        style={[{
                            position: 'absolute',
                            bottom: "5%",
                            left: "5%",
                            right: "5%",
                            borderRadius: 15,
                            padding: 24,
                            backgroundColor: '#FFFFFF'
                        }, styles.shadow]}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.shadow}>
                                <Image
                                    source={require('./assets/banner.jpg')}
                                    resizeMode="cover"
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 15,
                                    }}
                                />
                            </View>

                            <View style={{ marginHorizontal: 12, justifyContent: 'space-around' }}>
                                <Text style={{ fontSize: 16, color: '#2f4f4f' }}>Ski Villa</Text>
                                <Text style={{ color: '#8b9097', fontSize: 16 }}>France</Text>


                            </View>
                        </View>

                        <View style={{ marginTop: 12 }}>
                            <Text style={{ color: '#8b9097', fontSize: 16 }}>
                                Ski Villa offers simple rooms with mountain views in front of the ski lift to the Ski Resort
                        </Text>
                        </View>
                    </View>

                    {/* Header Buttons */}
                    <View
                        style={{
                            position: 'absolute',
                            top: 50,
                            left: 20,
                            right: 20,
                            //height: 50,
                            flexDirection: 'row',
                        }}
                    >
                        <View style={{ flex: 1 }}>

                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity
                                onPress={() => { console.log("Menu on pressed") }}
                            >

                                <MaterialCommunityIcons name="react" color='#eff2f5' size={32} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Body */}
                <View style={{ flex: 1.5 }}>
                    {/* Icons */}
                    <View style={{ flexDirection: 'row', marginTop: 8, paddingHorizontal: 24 * 2, justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => { console.log("Menu on pressed") }}>
                            <MaterialCommunityIcons name="web" color='#2f4f4f' size={32} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { console.log("Menu on pressed") }}>
                            <MaterialCommunityIcons name="whatsapp" color='#2f4f4f' size={32} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { console.log("Menu on pressed") }}>
                            <MaterialCommunityIcons name="webpack" color='#2f4f4f' size={32} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { console.log("Menu on pressed") }}>
                            <MaterialCommunityIcons name="raspberry-pi" color='#2f4f4f' size={32} />
                        </TouchableOpacity>
                    </View>

                    {/* About */}
                    <View style={{ marginTop: 24, paddingHorizontal: 24 }}>
                        <Text style={{ fontSize: 22, color: '#2f4f4f' }}>About</Text>
                        <Text style={{ marginTop: 12, color: '#8b9097', fontSize: 6 }}>
                            Esp32 + WiFiManager + ESPAsyncWebServer + SPIFFS + ESPmDNS + FirebaseESP32 + ReactNative
                    </Text>

                        <Text style={{ marginTop: 12, color: '#8b9097', fontSize: 16 }}>
                            Esp32 + WiFiManager + ESPAsyncWebServer + SPIFFS + ESPmDNS + FirebaseESP32 + ReactNative
                    </Text>
                    </View>
                </View>

                {/* Footer */}
                <View style={{ flex: 0.5, paddingHorizontal: 24 }}>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, marginHorizontal: 24, justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { console.log("Menu on pressed") }}>
                                <MaterialCommunityIcons name="github" color='#2f4f4f' size={32} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={{ width: 130, height: '80%', marginHorizontal: 12 }}
                            onPress={() => { console.log("Booking on pressed") }}
                        >

                        </TouchableOpacity>

                    </View>

                </View>
            </View>


        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});


export default Start;