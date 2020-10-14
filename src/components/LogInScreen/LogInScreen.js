import React, { useEffect } from 'react';

import { useIsFocused } from "@react-navigation/native";

import * as Animatable from 'react-native-animatable';

import IrisLogo from './iris-logo-original.svg';

import { LogInScreenContainerView, LogInScreenHeaderContainerView, CreateAccountContainerArc,
        BottomHalfContainer, CreateAccountContainer, LogInButton, RegisterWith,  
        SocialMediaButtonContainer, SocialMediaButton, AlreadyHaveAnAccountText,RegisterTouchableText
    } from './LogInScreenStyledComponents.js';


let LogInScreen = ({ width, showAppHeader, showFooter, navigation, route }) => {
    const { navigate } = navigation;

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            showAppHeader(false);
            showFooter(false);
        }
        console.log(route.name);
        
    }, [ isFocused ]);

    return (
        <LogInScreenContainerView>
                <LogInScreenHeaderContainerView 
                    as          =   { Animatable.View } 
                    animation   =   "fadeIn" 
                    duration    =   { 2000 }
                >
                    <IrisLogo
                        width       =   { 150 }
                        height      =   { 150 }
                    />
                </LogInScreenHeaderContainerView>

                <BottomHalfContainer>
                    <CreateAccountContainerArc/>
                    <CreateAccountContainer>
                        <LogInButton
                            onPress={ () =>  navigate('Main') } 
                        >
                            Iniciar Sesión
                        </LogInButton>

                        <RegisterWith width={width}>
                            o ingresa con
                        </RegisterWith>

                       <SocialMediaButtonContainer width={width}>
                            <SocialMediaButton iconName="facebook" />
                            <SocialMediaButton iconName="google" />
                            <SocialMediaButton iconName="apple" />
                       </SocialMediaButtonContainer>

                        <AlreadyHaveAnAccountText>Ya tienes cuenta?</AlreadyHaveAnAccountText>
                        <RegisterTouchableText >Regístrate</RegisterTouchableText>

                    </CreateAccountContainer>
                </BottomHalfContainer>
        </LogInScreenContainerView>
    ); //end return statement
}; //end LogInScreen()

export default LogInScreen;