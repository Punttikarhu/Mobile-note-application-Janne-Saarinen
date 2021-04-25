import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewNotes from './components/ViewNotes'
import SetNote from './components/SetNote'

const Stack = createStackNavigator();


const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="View Notes">
        <Stack.Screen name="View Notes" component={ViewNotes} notes={"testi"}/>
        <Stack.Screen name="Set Note" component={SetNote} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;