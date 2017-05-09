/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Lists from './Lists';
import Todoes from './Todoes';

export function registerScreens() {
	Navigation.registerComponent('simpletodo.Lists', () => Lists);
	Navigation.registerComponent('simpletodo.Todoes', () => Todoes);
}
