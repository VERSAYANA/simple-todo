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
	navBarHideOnScroll: true,

};



Navigation.startSingleScreenApp({
  screen: {
    screen: 'simpletodo.Lists',
    title: 'Lists',
    navigatorStyle,
		navigatorButtons: {
			rightButtons: [
				{
					id: 'side-menu',
					icon: require('./icons/menu-74-white.png')
				}
			],
			fab: {
				collapsedId: 'new-list',
				collapsedIcon: require('./icons/plus-60-white.png'),
				backgroundColor: '#FF4081'
			}
		},
  },
	drawer: {
		right: {
			screen: 'simpletodo.SideMenu'
		}
	}
});
