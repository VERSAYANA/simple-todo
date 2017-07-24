import React from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { registerScreens } from "./screens";
import store from "./store";

registerScreens(store, Provider);

const navigatorStyle = {
  // screenBackgroundColor: "#21272B",
  navBarHidden: true
};

Navigation.startTabBasedApp({
  tabs: [
    {
      screen: "simpletodo.Home",
      label: "Home",
      icon: require("./icons/home-60-white.png"),
      navigatorStyle
    },
    {
      screen: "simpletodo.Lists",
      label: "Lists",
      icon: require("./icons/view-list-60-white.png"),
      navigatorStyle
    },

    {
      screen: "simpletodo.Week",
      label: "Week",
      icon: require("./icons/calendar-text-60-white.png"),
      navigatorStyle
    }
  ],
  appStyle: {
    orientation: "portrait",
    statusBarColor: "#263238",
    screenBackgroundColor: "#21272B",
    tabBarBackgroundColor: "#263238",
    tabBarButtonColor: "#ffffff",
    // tabBarSelectedButtonColor: "#80CBC4",
    tabBarSelectedButtonColor: "#26c9b3",
  }
  // drawer: {
  //   right: {
  //     screen: "simpletodo.SideMenu"
  //   }
  // }
});
