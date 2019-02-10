import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Body, Button, Container, Header, Icon, Left, Right, Title} from 'native-base';

export default class Accounts extends Component {
    render() {
        return (
            <Container style={{backgroundColor: '#9b9494'}}>
                <Header>
                    <Body>
                    <Title>Accounts</Title>
                    </Body>
                    <Left/>
                    <Right>
                        <Button onPress={() => this.props.openControlPanel()} iconLeft light>
                            <Icon name='list'/>
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}
