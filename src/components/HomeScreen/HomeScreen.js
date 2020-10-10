import React from 'react';

import { ImageBackground, Alert } from 'react-native';

import { HomeScreenContainerView, HomeScreenHeaderContainerView, CreateAccountContainerArc,
    CreateAccountContainer, HomeScreenHeader, ImageBackgroundStyled, WelcomeText, 
        SafeAreaViewStyled  } from './HomeScreen_StyledComponents.js';

import * as Svg from 'react-native-svg';


import IrisLogo from './iris-logo-original.svg';

let HomeScreen = (props) => {
    return (
        <HomeScreenContainerView>
            {/* <ImageBackground
                source={ backgroundImage }
                style={ 
                    { 
                        flex: 1,
                        resizeMode: "cover",
                        justifyContent: "center"
                    }
                }
            > */}
                <HomeScreenHeaderContainerView>
                    <IrisLogo
                        width       =   { 150 }
                        height      =   { 150 }
                    />
                </HomeScreenHeaderContainerView>
                
                <CreateAccountContainerArc/>
                <CreateAccountContainer/>
            {/* </ImageBackground> */}
        </HomeScreenContainerView>
    ); //end return statement
}; //end HomeScreen()

export default HomeScreen;