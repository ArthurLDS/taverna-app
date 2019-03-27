import React, { Component } from 'react'
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base'

export class TBHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          {/* TODO: Implements action to open side bar */}
          <Button transparent>
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
