import React from 'react';

import { HeaderContainer, ProfileSectionContainer, ProfileTextContainer, NameText, AddressText, NotificationsButton, AvatarButton } from './HeaderStyledComponents.js';

const Header = ({ width, goBack }) => {
    return (
        <HeaderContainer width={width}>
            <ProfileSectionContainer>
                <AvatarButton onPress={ goBack }/>
                <ProfileTextContainer>
                    <NameText>Juan David Lopez</NameText>
                    <AddressText>3220 Merrill Dr</AddressText>
                </ProfileTextContainer>
            </ProfileSectionContainer>
            <NotificationsButton />
        </HeaderContainer>
    ); //end return statement
}; //end MainScreen

export default Header;