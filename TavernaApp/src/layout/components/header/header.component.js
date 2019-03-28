import React from 'react'
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base'

export const TPHeader = ({ titleComponent, openDrawer }) => (
  <Header>
    <Left>
      <Button transparent onPress={openDrawer}>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      {titleComponent ? titleComponent : <Title>Taverna PUB</Title>}
    </Body>
    <Right />
  </Header>
)