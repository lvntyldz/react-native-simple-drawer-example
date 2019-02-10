import React, {Component} from 'react';
import {View} from 'react-native';

import {
    Body,
    Button,
    Container,
    Content,
    Header,
    Icon,
    Left,
    ListItem,
    Right,
    Subtitle,
    Text,
    Title
} from 'native-base';
import Dashboard from "./Dashboard";

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

                <Content>
                    <ListItem icon>
                        <Left>
                            <Button onPress={() => this.props.changeScreenByType("Dashboard")}
                                    style={{backgroundColor: "#FF9501"}}>
                                <Icon active name="pie"/>
                            </Button>
                        </Left>
                        <Body>
                        <Text>Dashboard</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button onPress={() => this.props.changeScreenByType("Accounts")}
                                    style={{backgroundColor: "#007AFF"}}>
                                <Icon active name="person"/>
                            </Button>
                        </Left>
                        <Body>
                        <Text>Accounts</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: "#007AFF"}}>
                                <Icon active name="bluetooth"/>
                            </Button>
                        </Left>
                        <Body>
                        <Text>Bluetooth Configuration</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: "#007AFF"}}>
                                <Icon active name="wifi"/>
                            </Button>
                        </Left>
                        <Body>
                        <Text>Wi-Fi Configuration</Text>
                        </Body>
                    </ListItem>

                </Content>

            </Container>
        );
    }
}
