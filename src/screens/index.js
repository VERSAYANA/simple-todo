import { Navigation } from 'react-native-navigation';

import Lists from './Lists';
import Todoes from './Todoes';
import AdditionalNote from './AdditionalNote';
import SideMenu from './SideMenu';
import TopTabsScreen from './TopTabsScreen';
import Test from './Test';

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
  Navigation.registerComponent(
    'simpletodo.AdditionalNote',
    () => AdditionalNote,
    store,
    Provider
  );
  Navigation.registerComponent(
    'simpletodo.SideMenu',
    () => SideMenu,
    store,
    Provider
  );
  Navigation.registerComponent(
    'simpletodo.TopTabsScreen',
    () => TopTabsScreen,
    store,
    Provider
  );
  Navigation.registerComponent(
    'simpletodo.Test',
    () => Test,
    store,
    Provider
  );
}
