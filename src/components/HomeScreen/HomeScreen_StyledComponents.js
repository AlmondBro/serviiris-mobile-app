import styled from 'styled-components/native';

let HomeScreenContainerView = styled.View`
    flex: 1;
`;

let HomeScreenHeaderContainerView = styled.View`
    flex: 1;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background-color: yellow;
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

let CreateAccountContainer = styled.View`
    flex: 0.8;
    flex-direction: column;
    align-self: stretch;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    width: ${props => props.width ? props.width : "auto"};

    background-color: purple;

    border-top-left-radius: 25;
    border-top-right-radius: 25;
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
        margin: 0
    `
;

export { HomeScreenContainerView, HomeScreenHeaderContainerView, CreateAccountContainer, HomeScreenHeader, ImageBackgroundStyled, WelcomeText, SafeAreaViewStyled, BlueSectionContainer };