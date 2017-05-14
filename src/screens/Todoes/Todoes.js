import React, { Component } from 'react';
import {
  Keyboard,
  ScrollView,
  View,
  TextInput,
  Text,
  Switch
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SingleTodo from './SingleTodo';
import style from './style/Todoes';

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextInput: false
    };
    this.viewAdditionalNote = this.viewAdditionalNote.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow.bind(this)
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide.bind(this)
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  showTextInput(val) {
    this.setState({ showTextInput: val });
  }

  keyboardDidShow() {
    this.props.navigator.setButtons({
      fab: {}
    });
  }

  keyboardDidHide() {
    this.showTextInput(false);
    this.props.navigator.setButtons({
      fab: {
        collapsedId: 'new-todo',
        collapsedIcon: require('../../icons/plus-60-white.png'),
        backgroundColor: '#FF4081'
      }
    });
  }

  onNavigatorEvent(event) {
    if (event.id === 'new-todo') {
      _scrollView.scrollToEnd({ animated: true });
      this.showTextInput(true);
    }
  }

  viewAdditionalNote(id, note) {
    this.props.navigator.showModal({
      screen: 'simpletodo.AdditionalNote',
      title: 'Note',
      animated: true,
      passProps: {
        id,
        note
      },
      navigatorStyle: {
        statusBarColor: '#D81B60',
        navBarBackgroundColor: '#EC407A',
        navBarTextColor: 'white',
        navBarButtonColor: 'white',
        screenBackgroundColor: '#FAFAFA'
      },
      navigatorButtons: {
        rightButtons: [
          {
            id: 'done-note',
            icon: require('../../icons/check-74-white.png'),
            buttonColor: 'white'
          }
        ]
      }
    });
  }

  render() {
    const {
      todoes,
      list,
      id,
      filter,
      addTodo,
      toggleFilter,
      complete,
      editMode,
      deleteTodo,
      textMode,
      textTodo,
			dateTodo
    } = this.props;

    return (
      <ScrollView
        ref={scrollView => {
          _scrollView = scrollView;
        }}
      >
        <View style={style.switchRow}>
          <View style={{ paddingLeft: 16 }}>
            <Text>Show completed todoes</Text>
          </View>
            <Switch
              style={{ marginRight: 6 }}
              value={filter}
              onValueChange={() => {
                toggleFilter();
              }}
            />
        </View>
        {todoes.map((todo, i) => (
          <SingleTodo
            key={i}
            todo={todo}
            complete={complete}
            editMode={editMode}
            deleteTodo={deleteTodo}
            textMode={textMode}
            textTodo={textTodo}
            viewAdditionalNote={this.viewAdditionalNote}
						dateTodo={dateTodo}
          />
        ))}

        <View style={{ height: 80 }}>
          {this.state.showTextInput
            ? <View style={style.textInputContainer}>
                <Icon
                  style={style.checkBox}
                  name="checkbox-blank-outline"
                  size={23}
                  color="rgba(0, 0, 0, 0.68)"
                />
                <TextInput
                  autoFocus={true}
                  style={style.textInput}
                  placeholder={'New List'}
                  underlineColorAndroid={'transparent'}
                  placeholderTextColor={'white'}
                  onSubmitEditing={value => {
                    this.showTextInput(false);
                    addTodo(value.nativeEvent.text.trim(), list, id);
                  }}
                />
              </View>
            : null}
        </View>

      </ScrollView>
    );
  }
}
