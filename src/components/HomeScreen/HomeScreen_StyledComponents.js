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
    align-self: stretch;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    width: ${props => props.width ? props.width : "auto"};

    background-color: #7A40DB;

    /* border-top-left-radius: 25;
    border-top-right-radius: 25; */
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

export { HomeScreenContainerView, HomeScreenHeaderContainerView, BottomHalfContainer, CreateAccountContainerArc,CreateAccountContainer, HomeScreenHeader, ImageBackgroundStyled, WelcomeText, SafeAreaViewStyled, BlueSectionContainer };