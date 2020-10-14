import React, {  useEffect } from 'react';
import { Text } from 'react-native';

import { MainScreenContainerView, ButtonRow, SectionButton } from './MainScreenStyledComponents.js';

const MainScreen = ({ navigation, showAppHeader, showFooter, route }) => {
    useEffect(() => {
        showAppHeader(true);
        showFooter(true);
        console.log(route.name);
    }, []);

    return (
        <MainScreenContainerView>
            <ButtonRow>
                <SectionButton fa5 iconName="box-open">Entrega de paquetes</SectionButton>
                <SectionButton fa5 iconName="money-check-alt">Cosignaciones Bancarias</SectionButton>
            </ButtonRow>
            <ButtonRow>
                <SectionButton fa5 iconName="utensils">Restaurantes</SectionButton>
                <SectionButton fa5 iconName="shopping-cart">Mercado</SectionButton>
            </ButtonRow>
        </MainScreenContainerView>
    ); //end return statement
}; //end MainScreen

export default MainScreen;