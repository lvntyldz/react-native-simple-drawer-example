import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {Container, Header, Left, Body, Button, Icon, Right, Title, Subtitle} from 'native-base';

export default class LeftSideBar extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button onPress={() => this.props.closeControlPanel()} iconLeft light>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Menu</Title>
                    <Subtitle>...</Subtitle>
                    </Body>
                    <Right/>
                </Header>
            </Container>
        );
    }
}
