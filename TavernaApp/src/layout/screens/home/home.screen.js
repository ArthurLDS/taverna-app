import React, { Component } from 'react'
import { Platform, View, Image } from 'react-native'
import {
  Container,
  Text,
} from 'native-base'
import styles from './home.style'

import { BaseScreen } from '../base.screen'

export class HomeScreen extends BaseScreen {
  renderContent() {
    return (
      <Container>
        <Text style={styles.welcome}>Welcome to Taverna RPG!</Text>
      </Container>
    )
  }
}
