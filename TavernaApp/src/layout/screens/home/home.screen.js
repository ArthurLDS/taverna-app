import React, { Component } from 'react'
import { Platform, View, Image } from 'react-native'
import {
  Button,
  Container,
  Text,
  Header,
  Title,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base'
import styles from './home.style'

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: <Image source={{ uri: '' }} />,
  }

  // componentDidMount() {
  //   this.props.navigation.openDrawer()
  // }

  render() {
    return (
      <Container>
        <Text style={styles.welcome}>Welcome to Taverna RPG!</Text>
        <Button rounded success>
          <Text>Nothing happen</Text>
        </Button>
      </Container>
    )
  }
}
