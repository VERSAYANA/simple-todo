import React, { Component } from "react";
import { ScrollView, View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import SingleTodo from "../../components/SingleTodo";
import style from "./style/Home";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   showTextInput: false
    // };
    this.viewAdditionalNote = this._viewAdditionalNote.bind(this);
    this.showListSelector = this._showListSelector.bind(this);
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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
      <ScrollView style={style.contentContainer}>
        <View style={style.todayContainer}>
          <View style={style.subheaderContainer}>
            <Text style={style.subheader}>Today</Text>
          </View>

          {/* <View style={style.textInputContainer}>
            <Icon
              style={style.checkBox}
              name="plus"
              size={22}
              color="#26c9b3"
            />
            <TextInput
              style={style.textInput}
              placeholder={"New To-Do"}
              underlineColorAndroid={"transparent"}
              onSubmitEditing={value => {
                addTodo(value.nativeEvent.text.trim(), list, today, false, id);
              }}
            />
          </View> */}

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
      </ScrollView>
    );
  }
}
