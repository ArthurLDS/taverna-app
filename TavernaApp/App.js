import React, { Component, Fragment } from 'react'

import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'
import {
  HomeScreen,
  EventsScreen,
  EventDetailScreen,
} from './src/layout/screens'
import material from './native-base-theme/variables/material'
import { StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'

const defaultStackNavigatorConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#3B3232',
    },
    headerTitleStyle: {
      color: 'white',
    },
  },
}

const HomeStack = createStackNavigator(
  { Home: HomeScreen },
  defaultStackNavigatorConfig,
)
const EventsStack = createStackNavigator(
  { Events: EventsScreen, EventDetail: EventDetailScreen },
  defaultStackNavigatorConfig,
)
const AppStack = createDrawerNavigator({
  Home: { screen: HomeStack, navigationOptions: { title: 'Home' } },
  Events: { screen: EventsStack, navigationOptions: { title: 'Eventos' } },
})

EventsStack.navigationOptions = ({ navigation }) => {
  let drawerLockMode = 'unlocked'
  if (navigation.state.index > 0) {
    drawerLockMode = 'locked-closed'
  }

  return {
    drawerLockMode,
  }
}

const MyApp = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
)

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Fragment>
          <MyApp />
        </Fragment>
      </StyleProvider>
    )
  }
}
