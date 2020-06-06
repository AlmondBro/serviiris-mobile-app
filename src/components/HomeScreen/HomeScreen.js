import React from 'react';

import { ImageBackground, Alert } from 'react-native';

import { HomeScreenContainerView, HomeScreenHeaderContainerView, 
        HomeScreenHeader, ImageBackgroundStyled, WelcomeText, 
        SafeAreaViewStyled } from './App_StyledComponents.js';

let HomeScreen = (props) => {
    return (
        <HomeScreenContainerView>
            <ImageBackground
                source={ backgroundImage }
                style={ 
                    { 
                        flex: 1,
                        resizeMode: "cover",
                        justifyContent: "center"
                    }
                }
            >
                <AppHeaderContainerView>
                    <HomeScreenHeader />
                    
                </AppHeaderContainerView>
            </ImageBackground>
        </HomeScreenContainerView>
    ); //end return statement
}; //end HomeScreen()

export default HomeScreen;