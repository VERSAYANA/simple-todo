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
        collapsedIcon: require('../../icons/plus-white-48.png'),
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
    } = this.props;
    console.log(this.props);

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
            style={{ paddingRight: 16 }}
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
          />
        ))}

        <View style={{ height: 80 }}>
          {this.state.showTextInput
            ? <View style={style.textInputContainer}>
                <Icon
                  style={style.checkBox}
                  name="checkbox-blank-outline"
                  size={23}
                  color="#757575"
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
