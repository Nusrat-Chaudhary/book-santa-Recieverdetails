import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
//import { AppTabNavigator } from './components/AppTabNavigator'
import BookDonateScreen from './screens/BookDonateScreen'


export default function App() {
  return (
    <AppContainer/>
  );
}
// Thank you ma'am...
//magical..how did you do it?
// updated a few packages.. :) 

// feel free to contact!! 


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

//Please check anydesk message ma'am 