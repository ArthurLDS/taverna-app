import React, { Component, Alert } from 'react'

import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { HomeScreen, EventsScreen } from './src/layout/screens'
import material from './native-base-theme/variables/material';
import { StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: "Tela Inicial",
      headerLeft: <HomeScreen navigation={navigation}  />
    }),

  },
  Events: {
    screen: EventsScreen,
    navigationOptions: ({navigation}) => 
    ({
      title: "Eventos",
      headerLeft: <EventsScreen navigation={navigation}  />
    }),
  },
})

const MyApp = createAppContainer(MyDrawerNavigator)

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <MyApp /> 
      </StyleProvider>
    )
  }
}

