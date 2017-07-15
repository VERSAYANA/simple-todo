import React, { Component } from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import SingleTodo from "../../components/SingleTodo";
import NewTodoInput from "../../components/NewTodoInput";

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextInput: false
    };
    this._viewAdditionalNote = this._viewAdditionalNote.bind(this);
    this._showListSelector = this._showListSelector.bind(this);
  }

  showTextInput(val) {
    this.setState({ showTextInput: val });
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
        statusBarColor: "#0db09a",
        navBarBackgroundColor: "#26c9b3",
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

          <View style={{ height: 50 }}></View>
        </ScrollView>
    );
  }
}
