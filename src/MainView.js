import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, Header, Left, Body, Button, Icon, Right, Title, Subtitle} from 'native-base';

export default class MainView extends Component {
    render() {
        return (
            <Container style={{backgroundColor: '#9b9494'}}>
                <Header>
                    <Body>
                    <Title>Main Screen</Title>
                    <Subtitle>Content Will be Below</Subtitle>
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
