import React from 'react'
import { View, Image } from 'react-native'
import { Text, Button } from 'native-base'

import styles from './events.style'

import { BaseScreen } from '../base.screen'

import { TPMenuButton } from '../../components'
import { StackActions } from 'react-navigation'

export class EventsScreen extends BaseScreen {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Eventos',
      headerLeft: <TPMenuButton onPress={navigation.openDrawer} />,
    }
  }

  _pushToEventDetail = () => {
    const pushAction = StackActions.push({ routeName: 'EventDetail' })
    this.props.navigation.dispatch(pushAction)
  }

  renderContent() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Eventos</Text>
        <View>
          <Button rounded success onPress={this._pushToEventDetail}>
            <Text>Detalhe do evento</Text>
          </Button>
        </View>
      </View>
    )
  }
}
