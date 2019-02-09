import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import Drawer from 'react-native-drawer'
import LeftSideBar from './LeftSideBar';
import MainView from './MainView';

export default class App extends Component<Props> {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                openDrawerOffset={0.2}
                open={true}
                content={<LeftSideBar closeControlPanel={() => this.closeControlPanel()}/>}
            >
                <MainView openControlPanel={() => this.openControlPanel()}/>
            </Drawer>
        )
    }
}