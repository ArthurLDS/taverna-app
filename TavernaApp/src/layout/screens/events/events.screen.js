import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import styles from './events.style'

import { BaseScreen } from '../base.screen'

export class EventsScreen extends BaseScreen {
  renderContent() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Eventos</Text>
      </View>
    )
  }
}
