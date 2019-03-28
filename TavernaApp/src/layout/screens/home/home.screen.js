import React from 'react'
import { Platform, View, Image } from 'react-native'
import { Container, Text, Button } from 'native-base'
import styles from './home.style'

import { TPMenuButton } from '../../components'

import { BaseScreen } from '../base.screen'

export class HomeScreen extends BaseScreen {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerLeft: <TPMenuButton onPress={navigation.openDrawer} />,
    }
  }

  renderContent() {
    return (
      <Container style={styles.container}>
        <Text style={styles.welcome}>Welcome to Taverna RPG!</Text>
      </Container>
    )
  }
}
