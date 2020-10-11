import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 
import styled from 'styled-components/native';

let HomeScreenContainerView = styled.View`
    flex: 1;
    background-color: white;
`;

let HomeScreenHeaderContainerView = styled.View`
    flex: 1;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background-color: white;
`;

const HomeScreenHeader = styled.View``;

const ImageBackgroundStyled = styled.ImageBackground`
    flex: 1;
    justify-content: "center";
`;


const WelcomeText = styled.Text`
    color: #B41A1F;
    font-size: 25;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

let BlueSectionContainer = styled.View`
    flex-direction: column;
    align-self: stretch;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    width: ${props => props.width ? props.width : "auto"};
`;

const BottomHalfContainer = styled.View`
    flex: 0.8;

`;

const CreateAccountContainerArc = styled.View`
    width: 20%;
    height: 70;
              
    position : absolute;
    left: 40%;
    bottom: 290;

    background-color: #7A40DB;

    border-radius: 35;

    transform: scale(5, 1);
`;

let CreateAccountContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding: 0;
    margin: 0;

    width: ${props => props.width ? props.width : "auto"};

    background-color: #7A40DB;

    /* border-top-left-radius: 25;
    border-top-right-radius: 25; */
`;

const LogInButtonContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: white;
    border-radius: 10;

    height: 70;
    width: 200;
`;

const LogInText = styled.Text`
    text-align: center;
    color: #7A40DB;
    font-size: 20;
`;

let SafeAreaViewStyled = styled.SafeAreaView.attrs( (props) => ({
    forceInset: { bottom: 'never' },
}))`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    background-color: #F4F7F9;
    padding: 0;
    margin: 0;
`
;

const RegisterWithContainer = styled.View`
    position: relative;
    /* flex-direction: row; */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: ${props => props.width || "100%"};
`;
const RegisterWithLine = styled.View`
    position: relative;
    /* bottom: 10; */

    border-bottom-color: white;
    border-bottom-width: ${StyleSheet.hairlineWidth};

    /* vertical-align: middle; */
    /* align-self:  stretch; */
    width: 25%;

    margin-left: 10;
    margin-right: 10;
`;

const RegisterWithText = styled.Text`
    /* position: absolute;

    top: 0;
    bottom: 0;
    left: 50%;
    right: 0; */

    justify-content: center;
    align-items: center;

    color: white;
    font-size: 20;
    /* width: 35%; */
`;

const RegisterWith = ({width, children }) => {
    return (
        <RegisterWithContainer width={width}>
            <RegisterWithLine/>
            <RegisterWithText>{ children }</RegisterWithText>
            <RegisterWithLine/>
        </RegisterWithContainer>
    ); //end return statement
}; //end RegisterWith

const SocialMediaButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const SocialMediaIconContainer= styled.View`
    background-color: white;

    padding-top: 10;
    padding-bottom: 10;
    padding-left: 15;
    padding-right: 15;

    border-radius: 100;
    
`;

const SocialMediaButton = ({iconName, onPress,...props}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            underlayColor="black"
            onPress={ onPress }
        >
            <SocialMediaIconContainer>
                    <FontAwesome name={iconName} size={30} color="#7A40DB" />
            </SocialMediaIconContainer>
        </TouchableOpacity>
    )
};

const LogInButton = ({ children,...props }) => {
    return (
        <TouchableOpacity   
            activeOpacity={0.8}
            underlayColor="black"
            onPress={() => alert('Pressed!')}
        >
            <LogInButtonContainer
            >
                <LogInText>
                    { children }
                </LogInText>
            </LogInButtonContainer>
        </TouchableOpacity>
    ); //end return statement
}; //end LogInButton

export { HomeScreenContainerView, HomeScreenHeaderContainerView, BottomHalfContainer, CreateAccountContainerArc,CreateAccountContainer, HomeScreenHeader, ImageBackgroundStyled, WelcomeText, SafeAreaViewStyled, BlueSectionContainer, LogInButton, RegisterWithLine, RegisterWith, SocialMediaButtonContainer, SocialMediaButton };