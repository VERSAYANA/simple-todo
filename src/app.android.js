import React from 'react';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
// import store from './store';

registerScreens();

const navigatorStyle = {
	statusBarColor: '#0097A7',
	navBarBackgroundColor: '#00BCD4',
	navBarTextColor: 'white',
};

Navigation.startSingleScreenApp({
	screen: {
		screen: 'simpletodo.Lists',
		title: 'Lists',
		navigatorStyle,

	},

});
