import React, { Component } from "react";
import {
  ViewPagerAndroid,
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import SingleTodo from "../../components/SingleTodo";
import NewTodoInput from "../../components/NewTodoInput";
import style from "./style/Week";

export default class Week extends React.Component {
  constructor(props) {
    super(props);
    
    this._viewAdditionalNote = this._viewAdditionalNote.bind(this);
    this._showListSelector = this._showListSelector.bind(this);
  }

  componentWillMount() {
    const { today, dateToday } = this.props;
    const dateNow = new Date();

    if (!today || today !== dateNow.toDateString()) {
      dateToday(dateNow.toDateString());
    }
  }

  _viewAdditionalNote(id, note) {
    this.props.navigator.showModal({
      screen: "simpletodo.AdditionalNote",
      title: "Note",
      animated: true,
      passProps: {
        id,
        note
      },
      navigatorStyle: {
        statusBarColor: "#D81B60",
        navBarBackgroundColor: "#EC407A",
        navBarTextColor: "white",
        navBarButtonColor: "white",
        screenBackgroundColor: "#FAFAFA"
      },
      navigatorButtons: {
        rightButtons: [
          {
            id: "done-note",
            icon: require("../../icons/check-74-white.png"),
            buttonColor: "white"
          }
        ]
      }
    });
  }

  _showListSelector(list, id) {
    this.props.navigator.showLightBox({
      screen: "simpletodo.ListSelector",
      passProps: {
        list,
        id
      },
      style: {
        backgroundBlur: "dark"
      }
    });
  }

  dayTitle(index, todayIndex) {
    if (index === todayIndex) {
      return "Today";
    }
    switch (index) {
      case 0:
        return "Saturday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Sunday";
    }
  }

  dayDate(index, todayIndex, today) {
    const date = new Date(today);
    date.setDate(date.getDate() - (todayIndex - index));
    return date.toDateString();
  }

  render() {
    const {
      today,
      week,
      addTodo,
      list,
      id,
      complete,
      deleteTodo,
      editMode,
      textMode,
      textTodo,
      dateTodo,
      toggleFocus
    } = this.props;
    const todayIndex = new Date(today).getDay();

    return (
      <ScrollView>
        {week.map((dayTodos, index) =>
          <View
            key={index}
            style={index !== 6 ? style.dayContainer : style.lastContainer}
          >
            <View style={style.subheaderContainer}>
              <Text style={index !== todayIndex ? style.subheader : style.todaySubheader}>
                {this.dayTitle(index, todayIndex)}
              </Text>
            </View>

            <NewTodoInput
              addTodo={addTodo}
              list={list}
              date={this.dayDate(index, todayIndex, today)}
              focus={false}
              id={id}
            />

            {dayTodos.map((todo, i) =>
              <SingleTodo
                key={i}
                todo={todo}
                complete={complete}
                editMode={editMode}
                deleteTodo={deleteTodo}
                textMode={textMode}
                textTodo={textTodo}
                dateTodo={dateTodo}
                viewAdditionalNote={this.viewAdditionalNote}
                showListSelector={this.showListSelector}
                toggleFocus={toggleFocus}
              />
            )}
          </View>
        )}

        <View style={{ height: 50 }} />

      </ScrollView>
    );
  }
}
