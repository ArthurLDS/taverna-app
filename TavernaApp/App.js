import React, { Component } from 'react'

import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import { HomeScreen } from './src/layout/screens/home/home.screen'

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
})

const MyApp = createAppContainer(MyDrawerNavigator)

export default class App extends Component {
  render() {
    return <MyApp /> 
  }
}

