import React, { Component } from 'react'
import { Container } from 'native-base'

export class BaseScreen extends Component {


  //Override: use this method as render
  renderContent() {}

  render() {
    return (
      <Container>
        {this.renderContent()}
      </Container>
    )
  }
}
