import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

let LogInScreenContainerView = styled.View`
    flex: 1;
    background-color: white;
`;

let LogInScreenHeaderContainerView = styled.View`
    flex: 1;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background-color: white;
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
    flex-direction: row;
    justify-content: center;

    background-color: white;
    border-radius: 10;

    height: auto;
    width: auto;

    padding-top:  15;
    padding-bottom: 15;
    padding-left:  10;
    padding-right: 10;
`;

const LogInText = styled.Text`
    text-align: center;
    color: #7A40DB;
    font-size: 20;

    margin-right: 7;
`;

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

const AlreadyHaveAnAccountText = styled.Text`
    color: white;
`;

const RegisterText = styled.Text`
    color: white;

    font-size: 16;
    font-weight:  bold;
`;

const RegisterTouchableText = ({ children,onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            underlayColor="black"
            onPress={ onPress }
        >  
            <RegisterText>
                { children }
            </RegisterText>
        </TouchableOpacity> 
    ); //end return
}; //end RegisterButton()

const SocialMediaButton = ({iconName, onPress,...props}) => {
    return (
        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="black"
            onPress={ onPress }
        >
            <SocialMediaIconContainer>
                    <FontAwesome name={iconName} size={30} color="#7A40DB" />
            </SocialMediaIconContainer>
        </TouchableHighlight>
    )
};

const LogInButton = ({ children, onPress, ...props }) => {
    return (
        <TouchableOpacity   
            activeOpacity={0.8}
            underlayColor="black"
            onPress={ onPress }
        >
            <LogInButtonContainer
            >
                <LogInText>
                    { children }
                </LogInText>
                <FontAwesome5 name="phone" size={30} color="#7A40DB" />
            </LogInButtonContainer>
        </TouchableOpacity>
    ); //end return statement
}; //end LogInButton

export { LogInScreenContainerView, LogInScreenHeaderContainerView, BottomHalfContainer, CreateAccountContainerArc,CreateAccountContainer, BlueSectionContainer, LogInButton, RegisterWithLine, RegisterWith, SocialMediaButtonContainer, SocialMediaButton, AlreadyHaveAnAccountText, RegisterTouchableText };