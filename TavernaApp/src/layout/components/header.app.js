import React, { Component } from 'react'
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export class HeaderApp extends Component {
    constructor(props){
        super(props);
    }

    openSideBar(){
       this.props.navigation.navigate('DrawerOpen')
    }

    render(){
        return(
            <Header>
                <Left>
                    {/* TODO: Implements action to open side bar */}
                    <Button transparent onPress={this.openSideBar}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        )
    }
}   