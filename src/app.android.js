import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';
import store from './store';

registerScreens(store, Provider);

const navigatorStyle = {
  statusBarColor: '#0097A7',
  navBarBackgroundColor: '#00BCD4',
  navBarTextColor: 'white'
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'simpletodo.Lists',
    title: 'Lists',
    navigatorStyle
  }
});
