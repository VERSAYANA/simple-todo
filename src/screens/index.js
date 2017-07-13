import { Navigation } from 'react-native-navigation';

import Lists from './Lists';
import Todoes from './Todoes';
import AdditionalNote from './AdditionalNote';
import SideMenu from './SideMenu';
import MiniCalendar from './MiniCalendar';
import ListSelector from './ListSelector';
import Home from './Home';

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
    'simpletodo.MiniCalendar',
    () => MiniCalendar,
    store,
    Provider
  );
  Navigation.registerComponent(
    'simpletodo.ListSelector',
    () => ListSelector,
    store,
    Provider
  );
  Navigation.registerComponent(
    'simpletodo.Home',
    () => Home,
    store,
    Provider
  );
}
