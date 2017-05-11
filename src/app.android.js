import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';
import store from './store';

registerScreens(store, Provider);

const navigatorStyle = {
  statusBarColor: '#0097A7',
  navBarBackgroundColor: '#00BCD4',
  navBarTextColor: 'white',
	screenBackgroundColor: '#FAFAFA',
};



Navigation.startSingleScreenApp({
  screen: {
    screen: 'simpletodo.Lists',
    title: 'Lists',
    navigatorStyle,
		navigatorButtons: {
			fab: {
				collapsedId: 'new-list',
				collapsedIcon: require('./icons/plus-60-white.png'),
				backgroundColor: '#FF4081'
			}
		}
  }
});
