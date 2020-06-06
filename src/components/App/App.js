//Import React/React Native modules
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Reactotron from 'reactotron-react-native';

//Import utility functions
import { dimensionsWidthHOC, navigationRef, navigate } from './../../utility-functions.js';

import * as Updates from 'expo-updates';

import { SafeAreaProvider } from 'react-native-safe-area-context';

//import styled components
import { AppContainerView, AppHeaderContainerView, ImageBackgroundStyled, WelcomeText, SafeAreaViewStyled } from './App_StyledComponents.js';

//Import App/Page components
import Header from './../Header/Header.js';
import PageContent from './../PageContent/PageContent.js';
import TabsFooter from './../TabsFooter/TabsFooter.js'

import HomeScreen from './../HomeScreen/HomeScreen.js';

const { Navigator, Screen } = createStackNavigator();

//const backgroundImage = require('./../../assets/images/theCVway-white.png');

const isDev = __DEV__;

const ReactotronDebug = isDev ? Reactotron : console;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdate          :   false, 
            adUserInfo          :   null,
            appWidth            :   this.props.width,

            irisLogoSource    :   require("./../../assets/images/CV-600x600-portal-red.png"),
            
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
    };

    clearLogOnUserData = async () => {
        try {
          await AsyncStorage.clear();
        } catch(e) {
            ReactotronDebug.log('clearLogOnUserData() clear');
        }
      
        console.log('Done.')
      }

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
        return (
            <NavigationContainer ref={navigationRef}>
                <SafeAreaProvider>
                    <StatusBar 
                        backgroundColor="#F4F7F9" 
                        barStyle="dark-content" 
                        translucent={true} 
                    />
                    { /* The following is a technique using two SafeAreaViews to have the
                        statusbar/top padding be a different color than the bottom padding. 
                        SafeAreaViews are only applicable on iOs 11+ on >iPhone X 

                        Source: https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
                    */ }
                    <SafeAreaViewStyled>
                        <AppContainerView>
                            <Navigator
                                headerMode      = "none"
                                screenOptions   =   {   { 
                                                            title: null, 
                                                            headerShown: false,
                                                            gestureEnabled: false,
                                                        }
                                                    }
                            >
                              
                                <Screen 
                                    name="Home" 
                                    // options={{ title: null, headerShown: false }}
                                >
                                    { props => <HomeScreen 
                                                    {...props}
                                                    authLoading         =   {   this.state.authLoading  }
                                                /> 
                                    }
                                </Screen>

    
                            </Navigator>
                        </AppContainerView>
                    </SafeAreaViewStyled>
                </SafeAreaProvider>
            </NavigationContainer>
        ); //end return statementt
    } //end render() function
} //end App class

export default dimensionsWidthHOC(App);