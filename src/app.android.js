import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';
import store from './store';
import { iconsMap, iconsLoaded } from './icons';

registerScreens(store, Provider);

const navigatorStyle = {
  statusBarColor: '#0097A7',
  navBarBackgroundColor: '#00BCD4',
  navBarTextColor: 'white',
	orientation: 'portrait'
};


iconsLoaded.then(() => {
  startApp();
});

function startApp() {
	Navigation.startSingleScreenApp({
	  screen: {
	    screen: 'simpletodo.Lists',
	    title: 'Lists',
	    navigatorStyle,
			navigatorButtons: {
				fab: {
					collapsedId: 'new-list',
					collapsedIcon: iconsMap['plus'],
					backgroundColor: '#FF4081'
				}
			}
	  }
	});
}
