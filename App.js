import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import firebase from 'firebase'

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef'
import ResultAuthScreen from './src/screens/ResultAuthScreen'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'

const switchNavigator = createSwitchNavigator({
  ResultAuth: ResultAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
let firebaseConfig = {
  apiKey: "AIzaSyAciBTWzR4XiBxBFE08fi3_bqaMM_2GRDc",
  authDomain: "maptracking-32fae.firebaseapp.com",
  databaseURL: "https://maptracking-32fae.firebaseio.com",
  projectId: "maptracking-32fae",
  storageBucket: "maptracking-32fae.appspot.com",
  messagingSenderId: "997151259987",
  appId: "1:997151259987:web:33d603c1ec79321a5475a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}