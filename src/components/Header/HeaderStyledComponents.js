import React from 'react';
import { TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 

const HeaderContainer = styled.View`
    flex: 0.08;
    flex-direction: row;
    justify-content: space-between;

    width: ${props => props.width} ;
    background-color: white;

    border-color: transparent;
    border-bottom-width: 1px;
`;

const AvatarIconContainer = styled.View`
    margin-left: 10;
`;

const NotificationIconContainer = styled.View`
    margin-right: 10;
`;

const ProfileSectionContainer = styled.View`
    flex-direction: row;
`;

const ProfileTextContainer = styled.View`
    flex-direction: column;

    margin-left: 7;
`;

const NameText = styled.Text`
    color: #7A40DB;
`;

const AddressText = styled(NameText)`
    font-size: 11;
    padding-left: 10;
`;

const NotificationsButton = () => {
    return (
        <TouchableHighlight>
            <NotificationIconContainer>
                <FontAwesome name="bell" size={35} color="#7A40DB" />
            </NotificationIconContainer>
        </TouchableHighlight>
    ); //end return statement
}; //end  NotificationsButton

const AvatarButton = ({ onPress }) => {
    return (
        <TouchableHighlight 
            onPress =   { onPress }
        >
            <AvatarIconContainer>
                <FontAwesome name="user-circle" size={35} color="#7A40DB" />
            </AvatarIconContainer>
        </TouchableHighlight>
    ); //end return statement
}; //end  NotificationsButton


export { HeaderContainer, ProfileSectionContainer, ProfileTextContainer, NameText, AddressText, NotificationsButton, AvatarButton };