import React from 'react'
import { Button, Icon } from 'native-base'

export const TPMenuButton = ({ color, onPress }) => (
  <Button transparent onPress={onPress}>
    <Icon name="menu" style={{ color: color || 'white' }}/>
  </Button>
)

