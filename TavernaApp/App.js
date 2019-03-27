import React, { Component, Fragment } from 'react'

import { createDrawerNavigator, createAppContainer, DrawerActions } from 'react-navigation'
import { HomeScreen, EventsScreen } from './src/layout/screens'
import material from './native-base-theme/variables/material'
import { StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import { TBHeader } from './src/layout/components'

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
  componentDidUpdate() {
    if (this.props) {
      alert(this.props.navigation)
    }
    // DrawerActions.openDrawer()
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Fragment>
          <TBHeader />
          <MyApp />
        </Fragment>
      </StyleProvider>
    )
  }
}
