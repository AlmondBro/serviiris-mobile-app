import React from 'react';

import * as Animatable from 'react-native-animatable';

import IrisLogo from './iris-logo-original.svg';

import { HomeScreenContainerView, HomeScreenHeaderContainerView, CreateAccountContainerArc,
        BottomHalfContainer, CreateAccountContainer, LogInButton, RegisterWith,  
        SocialMediaButtonContainer, SocialMediaButton, AlreadyHaveAnAccountText,RegisterButton
    } from './HomeScreen_StyledComponents.js';

let HomeScreen = ({ width }) => {
    return (
        <HomeScreenContainerView>
                <HomeScreenHeaderContainerView 
                    as          =   { Animatable.View } 
                    animation   =   "fadeIn" 
                    duration    =   { 2000 }
                >
                    <IrisLogo
                        width       =   { 150 }
                        height      =   { 150 }
                    />
                </HomeScreenHeaderContainerView>

                <BottomHalfContainer>
                    <CreateAccountContainerArc/>
                    <CreateAccountContainer>
                        <LogInButton>Iniciar Sesión</LogInButton>

                        <RegisterWith width={width}>
                            o ingresa con
                        </RegisterWith>

                       <SocialMediaButtonContainer width={width}>
                            <SocialMediaButton iconName="facebook" />
                            <SocialMediaButton iconName="google" />
                            <SocialMediaButton iconName="apple" />
                       </SocialMediaButtonContainer>

                        <AlreadyHaveAnAccountText>Ya tienes cuenta?</AlreadyHaveAnAccountText>
                        <RegisterButton>Regístrate</RegisterButton>

                    </CreateAccountContainer>
                </BottomHalfContainer>
        </HomeScreenContainerView>
    ); //end return statement
}; //end HomeScreen()

export default HomeScreen;