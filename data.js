import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyDJcJhAzNqJVhiBIE-DbaoHnfghJ6FntxA",
    authDomain: "esp32-9ea67.firebaseapp.com",
    databaseURL: "https://esp32-9ea67-default-rtdb.firebaseio.com",
    projectId: "esp32-9ea67",
    storageBucket: "esp32-9ea67.appspot.com",
    messagingSenderId: "1097375404890",
    appId: "1:1097375404890:web:48fa863768316ed47a5963"
};
// firebase.initializeApp(config);

if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app(); // if already initialized, use that one
}

//const [info, setInfo] = useState([]);

class Data extends React.Component {

    state = {
        info: [],
    };


    componentDidMount() {
        // To Configure react native app with cloud of Google Firebase database !
        // To select data from firebase every time data has changed !
        firebase.database(firebase.app()).ref('data').on('value', (data) => {

            let items = data.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    rssi: items[item].rssi,

                });
            }
            this.setState({
                info: newState
            });
            //  let dados = snapshot.val();

            //this.state.info= data.toJSON() ;
            //  setInfo(data.toJSON())
            //  console.log(data.toJSON());
            //  console.log(this.state.info);
        })





        // To Await 5 seconds to insert a new user
        /*  setTimeout(() => {
              firebase.database(firebase.app()).ref('data/004').set(
                  {
                      name: 'Pheng Sengvuthy 004',
                      age: 24
                  }
              ).then(() => {
                  console.log('INSERTED !');
              }).catch((error) => {
                  console.log(error);
              });
          }, 5000); 
  
          // To Update a user
          firebase.database(firebase.app()).ref('data/004').update({
              name: 'Pheng Sengvuthy'
          });
  
          // To Remove a user
          firebase.database(firebase.app()).ref('users/004').remove(); */

    }

    render() {
        return (

            <View >

                {this.state.info.map((item) => {
                    return (
                        <View key={item.id}>
                            <TouchableOpacity activeOpacity={0.7} >
                                <SafeAreaView style={styles.cardContainer}>
                                    <View style={styles.cardBody}>
                                        <View style={styles.cardBodyTop}>
                                            <View >



                                                <Text style={styles.cardName}>Id:{item.id}</Text>
                                                <Text style={styles.cardDescription}>Rssi:{item.rssi}</Text>


                                                <View style={styles.cardBodyBottom}></View>
                                            </View>
                                        </View>
                                    </View>
                                </SafeAreaView>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>




        )
    }
}


export default Data;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        padding: 15,
        paddingBottom: 0,
    },
    cardName: {
        color: '#2f4f4f',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        color: '#708090',
        fontSize: 12,
        fontWeight: '200',
        marginTop: 5,
    },
    cardBody: {
        padding: 15,
        backgroundColor: '#fff',
        marginTop: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cardBodyTop: {
        flexDirection: 'row',
    },




});