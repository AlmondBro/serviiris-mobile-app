import React from 'react';

//Import styled to create react native styled components
import styled from 'styled-components/native';

const ContainerView = styled.View`
    flex: 0.08;
    flex-direction: row;

    background-color: #7A40DB;

    border-radius: 0;
    border-top-width: 0px;
    border-color: white;

`;

const BoxView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    color: white;
    /* background-color:  ${props => ( (props.title === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }; */

    border-radius: 0;
    border-right-width: ${props => props.noBorder ? "0px" : "1px"};
    border-color: white;

    /* box-shadow: 10px 3px 5px black; */
`;

let ButtonTouchableOpacity = styled.TouchableOpacity`

`;

let Button = ({ renderAsStudent, setRenderAsStudent, onPress, title, noBorder, activeOpacity, ...props }) => {
    return (
        <BoxView
            renderAsStudent =   { renderAsStudent }
            title           =   {   title    }
            noBorder        =   {   noBorder  }
        >
            <ButtonTouchableOpacity
                activeOpacity   =   { activeOpacity || 0.2}
                onPress         =   { onPress }
            >
                { props.children }
            </ButtonTouchableOpacity>
        </BoxView>
    );
}; //end return statement

const BoxText = styled.Text`
    color: white;
`;
export { ContainerView, Button};