import React, { Component } from 'react'
import { Platform, View, Image } from 'react-native'
import { Button, Container, Text, Header, Title, Left, Right, Body, Icon } from 'native-base';
import { HeaderApp } from '../../components/header.app';
import styles from './home.style'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: <Image source={{ uri: '' }} />
  }

  render() {
    return ( 
      <Container>
        <HeaderApp title="Taverna PUB" navigation={this.props.navigation}/>
        <Text style={styles.welcome}>Welcome to Taverna RPG!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button rounded success>
            <Text>Nothing happen</Text>
        </Button>
      </Container>
    );
  }
}