import React, { Component } from "react";
import {
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import SingleList from "./SingleList";
import style from "./style/Lists";

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: false
    };
    this.viewList = this.viewList.bind(this);
  }

  viewList(title) {
    this.props.navigator.push({
      screen: "simpletodo.Todoes",
      title,
      animated: true,
      passProps: {
        title
      },
      navigatorStyle: {
        navBarBackgroundColor: "#263238",
        navBarTextColor: "rgba(255, 255, 255, 0.87)",
        navBarButtonColor: "rgba(255, 255, 255, 0.87)"
      }
    });
  }

  setInputValue(value) {
    this.setState({ inputValue: value });
  }

  clearTextInput = () => {
    this._textInput.setNativeProps({ text: "" });
  };

  render() {
    const {
      lists,
      createList,
      toggleEdit,
      deleteList,
      toggleListTitle,
      submitEditList
    } = this.props;

    return (
      <View>
        <ScrollView>
          {lists.map((list, i) =>
            <SingleList
              key={i}
              list={list}
              viewList={this.viewList}
              deleteList={deleteList}
              toggleEdit={toggleEdit}
              toggleListTitle={toggleListTitle}
              submitEditList={submitEditList}
            />
          )}

          <View style={style.newlistInput}>
            <TextInput
              ref={component => (this._textInput = component)}
              style={style.textInput}
              placeholder={"New List"}
              placeholderTextColor={"#80CBC4"}
              underlineColorAndroid={"transparent"}
              onChangeText={newText => this.setInputValue(newText)}
              onSubmitEditing={value => {
                createList(value.nativeEvent.text.trim());
                this.clearTextInput();
                this.setInputValue(false);
              }}
            />

            <TouchableWithoutFeedback
              onPress={() => {
                if (!this.state.inputValue) {
                  this._textInput.focus();
                } else {
                  createList(this.state.inputValue.trim());
                  this.clearTextInput();
                  this.setInputValue(false);
                }
              }}
            >
              <View style={style.plusIcon}>
                <Icon name="plus" size={22} color="#26c9b3" />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
