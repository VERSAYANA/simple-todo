import { Navigation } from 'react-native-navigation';

import Lists from './Lists';
import Todoes from './Todoes';

export function registerScreens(store, Provider) {
  Navigation.registerComponent(
    'simpletodo.Lists',
    () => Lists,
    store,
    Provider
  );
  Navigation.registerComponent(
    'simpletodo.Todoes',
    () => Todoes,
    store,
    Provider
  );
}
