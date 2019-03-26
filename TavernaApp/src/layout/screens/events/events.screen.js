import React, { Component } from 'react'
import { Platform, Text, View, Image } from 'react-native'

import styles from './events.style'

export class EventsScreen extends Component {
  static navigationOptions = {
    title: 'Eventos',
    headerRight: <Image source={{ uri: '' }} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Eventos</Text>
      </View>
    );
  }
}


