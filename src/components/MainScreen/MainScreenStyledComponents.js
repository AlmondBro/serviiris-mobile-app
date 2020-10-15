import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

import styled from 'styled-components/native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 


const MainScreenContainerView = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    background-color: white;
`;

const ButtonRow = styled.View`
    flex: 0.5;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const SocialMediaIconContainer= styled.View`
    width:  125;
    height: 125;

    background-color: #7A40DB;

    flex-direction:  column;
    justify-content: center;
    align-items: center;

    padding-top: 20;
    padding-bottom: 20;
    padding-left: 30;
    padding-right: 30;

    border-radius: 10;
`;

const ButtonName = styled.Text`
    color: #7A40DB;

    max-width: 125;

    margin-top: 10;
    text-align: center;
`;

const SectionButton = ({ iconName, onPress, fa5, children }) => {
    return (
        <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="white"
            onPress={ () => console.log("ButtonPressed") }
        >
            <View>
                <SocialMediaIconContainer>
                    {
                        fa5 ? (
                            <FontAwesome5 name={iconName} size={50} color="white" />

                        ) : ( <FontAwesome name={iconName} size={50} color="white" /> )
                    }
                </SocialMediaIconContainer>
                <ButtonName>{ children }</ButtonName>
            </View>
        </TouchableHighlight>
    )
};

export { MainScreenContainerView, ButtonRow, SectionButton };