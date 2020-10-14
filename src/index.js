import React from 'react';
import { registerRootComponent } from 'expo';

import App from './components/App/App.js';

import { SafeAreaProvider } from 'react-native-safe-area-context';

if(__DEV__) {
    //Initialize Reactotron
    import('./config/reactotron.dev.js').then(() => console.log('Reactotron Configured'));
}

console.disableYellowBox = true;

const AppInSafeArea = () => {
    return (
        <SafeAreaProvider>
            <App/>
        </SafeAreaProvider>
    );
}; //end AppInSafeArea

registerRootComponent(AppInSafeArea);


