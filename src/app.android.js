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

	topTabTextColor: 'rgba(255, 255, 255, 0.8)',
	selectedTopTabTextColor: 'rgba(255, 255, 255, 1)',
	selectedTopTabIndicatorHeight: 2,
	selectedTopTabIndicatorColor: 'white',
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'simpletodo.TopTabsScreen',
    title: 'Simple Todo',
    navigatorStyle,
    topTabs: [
      {
        screenId: 'simpletodo.Lists',
        title: 'Lists'
      },
      {
        screenId: 'simpletodo.MiniCalendar',
        title: 'MiniCalendar'
      }
    ]
  },
  drawer: {
    right: {
      screen: 'simpletodo.SideMenu'
    }
  }
});
