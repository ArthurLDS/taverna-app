import React, { Component } from 'react'

import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import { HomeScreen, EventsScreen } from './src/layout/screens'

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Events: {
    screen: EventsScreen,
  },
})

const MyApp = createAppContainer(MyDrawerNavigator)

export default class App extends Component {
  render() {
    return <MyApp /> 
  }
}

