import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import SingleTodo from "../../components/SingleTodo";
import NewTodoInput from "../../components/NewTodoInput";
import style from "./style/Home";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todayInputValue: false,
      focusInputValue: false
    };
    this.viewAdditionalNote = this._viewAdditionalNote.bind(this);
    this.showListSelector = this._showListSelector.bind(this);
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  _viewAdditionalNote(id, note) {
    this.props.navigator.showModal({
      screen: "simpletodo.AdditionalNote",
      title: "Note",
      passProps: {
        id,
        note
      },
      navigatorStyle: {
        statusBarColor: "#347f78",
        navBarBackgroundColor: "#4d9891",
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

  setTodayInputValue(value) {
    this.setState({ todayInputValue: value });
  }
  setFocusInputValue(value) {
    this.setState({ focusInputValue: value });
  }

  clearTodayInput = () => {
    this._todayInput.setNativeProps({ text: "" });
  };
  // clearFocusInput = () => {
  //   this._focusInput.setNativeProps({text: ''});
  // }

  render() {
    const {
      todayTodoes,
      focusTodoes,
      today,
      list,
      id,
      addTodo,
      toggleFilter,
      complete,
      editMode,
      deleteTodo,
      textMode,
      textTodo,
      dateTodo,
      toggleFocus
    } = this.props;

    return (
      <ScrollView>
        <View style={style.todayContainer}>
          <View style={style.subheaderContainer}>
            <Text style={style.subheader}>Today</Text>
          </View>

          <NewTodoInput
            addTodo={addTodo}
            list={list}
            date={today}
            focus={false}
            id={id}
          />

          {todayTodoes.map((todo, i) =>
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

        <View style={style.focusContainer}>
          <View style={style.subheaderContainer}>
            <Text style={style.subheader}>Focus</Text>
          </View>

          <NewTodoInput
            addTodo={addTodo}
            list={list}
            date={false}
            focus={true}
            id={id}
          />

          {focusTodoes.map((todo, i) =>
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

        <View style={{ height: 50 }} />

      </ScrollView>
    );
  }
}
