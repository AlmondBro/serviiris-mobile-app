import React from 'react';

import { ImageBackground, Alert, TouchableOpacity, View, Text } from 'react-native';

import { HomeScreenContainerView, HomeScreenHeaderContainerView, CreateAccountContainerArc,
    BottomHalfContainer, CreateAccountContainer, HomeScreenHeader, ImageBackgroundStyled, WelcomeText, 
        SafeAreaViewStyled, LogInButton, LogInText, RegisterWithLine, RegisterWith } from './HomeScreen_StyledComponents.js';

import * as Svg from 'react-native-svg';

import * as Animatable from 'react-native-animatable';

import IrisLogo from './iris-logo-original.svg';

let HomeScreen = ({width, ...props}) => {
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
                <HomeScreenHeaderContainerView as={Animatable.View} animation="fadeIn" duration={2000}>
                    <IrisLogo
                        width       =   { 150 }
                        height      =   { 150 }
                    />
                </HomeScreenHeaderContainerView>


                <BottomHalfContainer>
                    <CreateAccountContainerArc/>
                    <CreateAccountContainer>
                        <LogInButton>Iniciar Sesión</LogInButton>
                        <RegisterWith width={width}/>

                    </CreateAccountContainer>
        
                </BottomHalfContainer>

            {/* </ImageBackground> */}
        </HomeScreenContainerView>
    ); //end return statement
}; //end HomeScreen()

export default HomeScreen;