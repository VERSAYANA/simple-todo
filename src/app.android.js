import React from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { registerScreens } from "./screens";
import store from "./store";

registerScreens(store, Provider);

// const navigatorStyle = {
//   statusBarColor: "#0097A7",
//   navBarBackgroundColor: "#00BCD4",
//   navBarTextColor: "white",
//   screenBackgroundColor: "#FAFAFA"
  // navBarHideOnScroll: true,

  // topTabTextColor: 'rgba(255, 255, 255, 0.8)',
  // selectedTopTabTextColor: 'rgba(255, 255, 255, 1)',
  // selectedTopTabIndicatorHeight: 2,
  // selectedTopTabIndicatorColor: 'white',
// };

Navigation.startTabBasedApp({
  tabs: [
    {
      screen: "simpletodo.Home",
      label: "Home",
      icon: require("./icons/home-60-white.png"),
    },
    {
      screen: "simpletodo.Lists",
      label: "Lists",
      icon: require("./icons/view-list-60-white.png")
    },

    {
      screen: "simpletodo.MiniCalendar",
      label: "Week",
      icon: require("./icons/calendar-text-60-white.png")
    }
  ],
  appStyle: {
    orientation: "portrait",
    statusBarColor: "#0097A7",
    screenBackgroundColor: "#FAFAFA"
  },
  drawer: {
    right: {
      screen: "simpletodo.SideMenu"
    }
  }
});
