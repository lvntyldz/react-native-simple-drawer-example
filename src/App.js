import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';

import Drawer from 'react-native-drawer'
import LeftSideBar from './LeftSideBar';
import Dashboard from './Dashboard';
import Accounts from './Accounts';

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            screenType: "Dashboard",
            sideBarOpen: true
        }
    }

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    changeScreenByType = (screenType) => {

        if (!screenType) {
            screenType = "Dashboard";
        }

        this.setState({screenType: screenType, sideBarOpen: false});
    }

    loadScreenByType = () => {

        if (this.state.screenType === "Accounts") {
            return <Accounts openControlPanel={() => this.openControlPanel()}/>;
        }

        if (this.state.screenType === "Dashboard") {
            return <Dashboard openControlPanel={() => this.openControlPanel()}/>;
        }

        return <Dashboard openControlPanel={() => this.openControlPanel()}/>;
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                openDrawerOffset={0.2}
                open={this.state.sideBarOpen}
                content={<LeftSideBar closeControlPanel={() => this.closeControlPanel()}
                                      changeScreenByType={(d) => this.changeScreenByType(d)}/>}
            >
                {this.loadScreenByType()}
            </Drawer>
        )
    }
}