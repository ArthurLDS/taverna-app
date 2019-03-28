import React, { Component } from 'react'
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base'

export class TPHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Taverna PUB</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}
