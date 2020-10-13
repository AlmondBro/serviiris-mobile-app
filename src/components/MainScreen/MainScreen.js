import React, {  useEffect } from 'react';
import { Text } from 'react-native';

import { MainScreenContainerView } from './MainScreenStyledComponents.js';

import Header from './../Header/Header.js';

const MainScreen = ({ navigation, showAppHeader, showFooter, route }) => {
    useEffect(() => {
        showAppHeader(true);
        showFooter(true);
        console.log(route.name);
    }, []);

    return (
        <MainScreenContainerView>
            <Text>Main Screen</Text>
        </MainScreenContainerView>
    ); //end return statement
}; //end MainScreen

export default MainScreen;