import React from 'react';
import { Text } from 'react-native';

import { MainScreenContainerView } from './MainScreenStyledComponents.js';

import Header from './../Header/Header.js';

const MainScreen = ({navigation}) => {
    return (
        <MainScreenContainerView>
            <Text>Main Screen</Text>
        </MainScreenContainerView>
    ); //end return statement
}; //end MainScreen

export default MainScreen;