import React, { Component } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Keyboard
} from 'react-native';

import SingleList from './SingleList';
import { iconsMap } from '../../icons';
import style from './style/Lists';

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextInput: false
    };

    this.viewList = this.viewList.bind(this);
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

  keyboardDidShow() {
		// console.log('show');
    this.props.navigator.setButtons({
      fab: {},
      animated: false
    });
  }

  keyboardDidHide() {
		// console.log('hide');
    this.props.navigator.setButtons({
      fab: {
        collapsedId: 'new-list',
        collapsedIcon: iconsMap['plus'],
        backgroundColor: '#FF4081'
      },
      animated: false
    });
    this.showTextInput(false);
  }

  showTextInput(val) {
    this.setState({ showTextInput: val });
  }

  onNavigatorEvent(event) {
    if (event.id === 'new-list') {
      this.showTextInput(true);
    }
  }

  viewList(title) {
    this.props.navigator.push({
      screen: 'simpletodo.Todoes',
      title,
      passProps: {
        title
      },
      navigatorStyle: {
        statusBarColor: '#0097A7',
        navBarBackgroundColor: '#00BCD4',
        navBarTextColor: 'white',
        navBarButtonColor: 'white'
      },
      navigatorButtons: {
        fab: {
          collapsedId: 'new-todo',
          collapsedIcon: iconsMap['plus'],
          backgroundColor: '#FF4081'
        }
      }
    });
  }

  render() {
    const {
      lists,
      createList,
      toggleEdit,
      deleteList,
      toggleListTitle,
			submitEditList,
    } = this.props;

    return (
      <ScrollView>
        {lists.map((list, i) => (
          <SingleList
            key={i}
            list={list}
            viewList={this.viewList}
						deleteList={deleteList}
            toggleEdit={toggleEdit}
            toggleListTitle={toggleListTitle}
						submitEditList={submitEditList}
          />
        ))}

        <View style={{ height: 80 }}>
          {this.state.showTextInput
            ? <TextInput
                autoFocus={true}
                style={style.textInput}
                placeholder={'New List'}
                underlineColorAndroid={'transparent'}
                placeholderTextColor={'white'}
                onSubmitEditing={value => {
                  createList(value.nativeEvent.text.trim());
                }}
              />
            : null}
        </View>
      </ScrollView>
    );
  }
}
