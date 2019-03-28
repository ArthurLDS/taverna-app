import React, { Component } from 'react'
import { Container } from 'native-base'
import { TPHeader } from '../components'

export class BaseScreen extends Component {
  _openDrawer = () => {
    this.props.navigation.openDrawer()
  }

  //Override: use this method as render
  renderContent() {}

  render() {
    return (
      <Container>
        <TPHeader openDrawer={this._openDrawer} />
        {this.renderContent()}
      </Container>
    )
  }
}
