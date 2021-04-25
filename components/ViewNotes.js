import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ViewNotes extends Component {
  state = {
    notes: []
  }

  loadData () {
    try {
//      AsyncStorage.clear()
      AsyncStorage.getAllKeys() 
        .then(keys => AsyncStorage.multiGet(keys))
        .then(values => this.setState({notes: [].concat(...values).filter((x,i) => i % 2)}))
      } catch(e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.loadData()
    this.props.navigation.addListener('focus', () => {
      this.loadData()
    })
  }

  render() {

    return(
      <>
      <View>
      <Button
        title="Go to Set Note"
        onPress={() => {this.props.navigation.navigate('Set Note', {notes: this.state.notes})}}
        />
      </View>
      <ScrollView style={styles.top} >
      {this.state.notes.map((note, i) => <Text key={i} style={styles.textStyle}> {note} </Text>)}
      </ScrollView>
      </>
    )
  }  
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "green"
  },
  textStyle: {
    fontSize: 20
  }
})

export default ViewNotes

