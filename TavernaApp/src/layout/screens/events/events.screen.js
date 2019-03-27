import React, { Component } from 'react'
import { Platform, Text, View, Image } from 'react-native'
import { Container } from 'native-base';
import { HeaderApp } from '../../components/header.app';
import styles from './events.style'

export class EventsScreen extends Component {
  static navigationOptions = {
    title: 'Eventos',
    headerRight: <Image source={{ uri: '' }} />
  }

  render() {
    return (
      <Container>
        <HeaderApp title="Eventos"/>
        <Text style={styles.welcome}>Eventos</Text>
      </Container>
    );
  }
}


