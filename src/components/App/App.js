//Import React/React Native modules
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';

import AsyncStorage from '@react-native-community/async-storage';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Reactotron from 'reactotron-react-native';

import * as Updates from 'expo-updates';

import { SafeAreaProvider } from 'react-native-safe-area-context';

//import styled components
import { AppContainerView, SafeAreaViewStyled,StatusBarView } from './App_StyledComponents.js';

//Import utility functions
import { dimensionsWidthHOC, navigationRef, navigate, goBack } from './../../utility-functions.js';

//Import App/Page components
// import Header from './../Header/Header.js';
// import PageContent from './../PageContent/PageContent.js';
// import TabsFooter from './../TabsFooter/TabsFooter.js'

//Import screens
import LogInScreen from './../LogInScreen/LogInScreen.js';
import MainScreen from './../MainScreen/MainScreen.js';

//Import Header
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

const { Navigator, Screen } = createStackNavigator();

const isDev = __DEV__;

const ReactotronDebug = isDev ? Reactotron : console;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdate          :   false, 
            adUserInfo          :   null,
            appWidth            :   this.props.width,
            showAppHeader       :   false,
            showFooter          :   false,

            // irisLogoSource    :   require("./../../assets/images/iris-logo-original.svg"),
            
            authLoading         :   null
        }; //end this.state object
    } //end constructor


    USER_INFO = '@user_info';
    
    checkforExistingLogOn = async () => {
        try {
            let currentUserState = await AsyncStorage.getItem(this.USER_INFO);

            if (currentUserState !== null) {
                this.setState({ ...JSON.parse(currentUserState) });
                return true;
            } else {
                return false;
            }
        } catch (error) {
            Reactotron.log("checkforExistingLogOn() Error:\t" + JSON.stringify(error));
        }
    }; //end checkforExistingLogOn

    setLogOnUserData = async (userDataObject) => {
        try {
            const userDataObjectJSON = JSON.stringify(userDataObject);
            await AsyncStorage.setItem(this.USER_INFO, userDataObjectJSON);
          } catch (e) {
            Reactotron.log("setLogOnUserData() Error:\t" + JSON.stringify(error));
          }
    }; //end setLogOnUserData()

    clearLogOnUserData = async () => {
        try {
          await AsyncStorage.clear();
        } catch(e) {
            ReactotronDebug.log('clearLogOnUserData() clear');
        }
      
        console.log('Done.')
    }; //end clearLogOnUserData()

    showAppHeader = (showAppHeader) =>  {
        this.setState({ showAppHeader : showAppHeader });
        return;
    }; //end showAppHeader()


    showFooter = (showFooter) =>  {
        this.setState({ showFooter : showFooter });
        return;
    }; //end showAppHeader()

    componentDidMount = () => {
        const checkforUpdatesDev = false;
        
        //console.log("Props:\t" + JSON.stringify(this.props) );
        console.log("Width:\t" + this.props.width);

        if (__DEV__ && Reactotron) {
            Reactotron.log('Reactotron running');
        }
        
        if (!__DEV__ || checkforUpdatesDev === true) {
            Updates.checkForUpdateAsync().then(update => {
                if (update.isAvailable) {
                  this.setState({ showUpdate: true } );
                } //end if-statement
              });
        }

        // if (this.checkforExistingLogOn() === true) {
        //     navigate('Page-Content');
        // };

        this.clearLogOnUserData();
    }; //end componentDidMount

    render = () => {
        const navigatorScreenOptions =   { 
            title: null, 
            headerShown: false,
            gestureEnabled: false,
        }; 

        return (
            <NavigationContainer ref={navigationRef}>
                <SafeAreaProvider>
                    <StatusBarView>
                        <StatusBar 
                            backgroundColor="#00000" 
                            barStyle="light-content" 
                            translucent={true} 
                        />
                    </StatusBarView>
                  
                    { /* The following is a technique using two SafeAreaViews to have the
                        statusbar/top padding be a different color than the bottom padding. 
                        SafeAreaViews are only applicable on iOs 11+ on >iPhone X 

                        Source: https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
                    */ }
                    <SafeAreaViewStyled>
                        {
                            this.state.showAppHeader ? (
                                <Header
                                    width   =   { this.state.appWidth }
                                />
                            ) : null
                        }
                       
                        <AppContainerView>
                            <Navigator
                                headerMode      = "none"
                                screenOptions   =   { navigatorScreenOptions }
                            >
    
                                <Screen 
                                    name="Home" 
                                >
                                    { props => <LogInScreen 
                                                    {...props}
                                                    width               =   { this.state.appWidth}
                                                    authLoading         =   {   this.state.authLoading  }

                                                    showAppHeader       =   { this.showAppHeader }
                                                    showFooter          =   { this.showFooter }
                                                /> 
                                    }
                                </Screen>
                                <Screen 
                                    name="Main" 
                                    options={{ title: "Main", headerShown: true }}
                                >
                                    { props => <MainScreen 
                                                    {...props}
                                                    width               =   { this.state.appWidth}
                                                    authLoading         =   {  this.state.authLoading  }

                                                    showAppHeader       =   { this.showAppHeader }
                                                    showFooter          =   { this.showFooter }

                                                    ReactotronDebug     =   { ReactotronDebug }
                                                /> 
                                    }
                                </Screen>
                            </Navigator>
                        </AppContainerView>
                        {
                            this.state.showFooter ? (
                                <Footer 
                                    goBack  =   { goBack }
                                /> 
                            ) : null
                        }
                    </SafeAreaViewStyled>
                </SafeAreaProvider>
            </NavigationContainer>
        ); //end return statement
    } //end render() function
} //end App class

export default dimensionsWidthHOC(App);