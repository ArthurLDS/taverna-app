import React from 'react'
import { Text, View, Image } from 'react-native'

import styles from './event-detail.style'

import { BaseScreen } from '../base.screen'

import { TPMenuButton } from '../../components'

export class EventDetailScreen extends BaseScreen {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Detalhe do evento',
    }
  }

  renderContent() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Detalhe do evento</Text>
      </View>
    )
  }
}
