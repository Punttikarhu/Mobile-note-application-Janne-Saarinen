import React, { Component, useState } from 'react';
import { View, Button, TextInput, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SetNote extends Component {
    state = {
        text: "Write notes here"
      }

    render() {

        return(
            <View style={styles.bottom}>
                <TextInput style={styles.input}
                    onChangeText={(str) => this.setState({text: str})}
                    defaultValue={"Write notes here"}
                />
                <Button
                    title="Set note"
                    onPress={createAlert(this.props.route.params.notes, this.state.text, this.props.navigation)}
                />
            </View>
        )
    }
}


const createAlert = (notes, text, navigation) => {

    return(
      () => {
      if (notes.includes(text)) {
        Alert.alert(
          "Note already exist",
          "Note already exist",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        )      
      } else {
        try {
            AsyncStorage.setItem(`${text}`, text)
            navigation.navigate("View Notes")
          } catch (e) {
            console.log(e)
          }
          
      }
    })
  }



const styles = StyleSheet.create({
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 20,
      backgroundColor: "yellow"
    }, 
    input: {
        fontSize: 20
    }
  })

export default SetNote