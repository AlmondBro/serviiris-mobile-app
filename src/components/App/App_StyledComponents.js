import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

let AppContainerView = styled.View`
    flex: 1;
`;

let AppHeaderContainerView = styled.View`
    flex: 2;

    flex-direction: column;
    justify-content: space-evenly;
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

let SafeAreaViewStyled = styled(SafeAreaView).attrs( (props) => ({
    // forceInset: { bottom: 'never' },
}))`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    background-color: #7A40DB;
    padding: 0;
    margin: 0;
`;

const StatusBarSafeView = styled(SafeAreaView).attrs( (props) => ({
    // forceInset: { bottom: 'never' },
}))`
    flex: 0;
    flex-direction: row;

    background-color: red;
`;

export { StatusBarSafeView, AppContainerView, AppHeaderContainerView, SafeAreaViewStyled, BlueSectionContainer };