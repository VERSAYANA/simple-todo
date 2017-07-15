import React, { Component } from "react";
import {
  Keyboard,
  ScrollView,
  View,
  TextInput,
  Text
  // Switch
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import SingleTodo from "../../components/SingleTodo";
import NewTodoInput from "../../components/NewTodoInput";
import style from "./style/Todoes";

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextInput: false
    };
    this._viewAdditionalNote = this._viewAdditionalNote.bind(this);
    this._showListSelector = this._showListSelector.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  showTextInput(val) {
    this.setState({ showTextInput: val });
  }

  onNavigatorEvent(event) {
    if (event.id === "new-todo") {
      // _scrollView.scrollToEnd({ animated: true });
      this.showTextInput(true);
    }
    if (event.id === "side-menu") {
      this.props.navigator.toggleDrawer({
        side: "right"
      });
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

  render() {
    const {
      todoes,
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
        <NewTodoInput
          addTodo={addTodo}
          list={list}
          date={false}
          focus={false}
          id={id}
        />

        {todoes.map((todo, i) =>
          <SingleTodo
            key={i}
            todo={todo}
            complete={complete}
            editMode={editMode}
            deleteTodo={deleteTodo}
            textMode={textMode}
            textTodo={textTodo}
            dateTodo={dateTodo}
            viewAdditionalNote={this._viewAdditionalNote}
            showListSelector={this._showListSelector}
            toggleFocus={toggleFocus}
          />
        )}

        <View style={{ height: 50 }} />
      </ScrollView>
    );
  }
}
