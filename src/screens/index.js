import { Navigation } from 'react-native-navigation';

import Home from './Home';

import Lists from './Lists';
import Todoes from './Todoes';
import Week from './Week';
import More from './More';
import AdditionalNote from './AdditionalNote';
import ListSelector from './ListSelector';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('simpletodo.Home', () => Home, store, Provider);
	Navigation.registerComponent(
		'simpletodo.Lists',
		() => Lists,
		store,
		Provider
	);
	Navigation.registerComponent('simpletodo.Week', () => Week, store, Provider);
	Navigation.registerComponent('simpletodo.More', () => More, store, Provider);
	Navigation.registerComponent(
		'simpletodo.Todoes',
		() => Todoes,
		store,
		Provider
	);
	Navigation.registerComponent(
		'simpletodo.AdditionalNote',
		() => AdditionalNote,
		store,
		Provider
	);
	Navigation.registerComponent(
		'simpletodo.ListSelector',
		() => ListSelector,
		store,
		Provider
	);
}
