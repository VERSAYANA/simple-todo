import React, { Component } from 'react';
import { View, TextInput, ScrollView, Keyboard } from 'react-native';

import SingleList from './SingleList';
import style from './style/Lists';

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextInput: false
    };

    this.showTextInput = this.showTextInput.bind(this);
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

  componentDidMount() {
    this.props.navigator.setButtons({
      fab: {
        collapsedId: 'new-list',
        collapsedIcon: require('../../icons/plus-60-white.png'),
        backgroundColor: '#FF4081'
      },
      rightButtons: [
        {
          icon: require('../../icons/menu-74-white.png'),
          id: 'side-menu'
        }
      ]
    });
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
    this.props.navigator.setButtons({
      fab: {
        collapsedId: 'new-list',
        collapsedIcon: require('../../icons/plus-60-white.png'),
        backgroundColor: '#FF4081'
      }
    });
    this.showTextInput(false);
  }

  onNavigatorEvent(event) {
    if (event.id === 'new-list') {
      this.showTextInput(true);
    }
    if (event.id === 'side-menu') {
      this.props.navigator.toggleDrawer({
        side: 'right'
      });
    }
  }

  viewList(title) {
    this.props.navigator.push({
      screen: 'simpletodo.Todoes',
      title,
      animated: true,
      passProps: {
        title
      },
      navigatorStyle: {
        statusBarColor: '#0097A7',
        navBarBackgroundColor: '#00BCD4',
        navBarTextColor: 'white',
        navBarButtonColor: 'white',
        screenBackgroundColor: '#FAFAFA'
      },
      navigatorButtons: {
        rightButtons: [
          {
            id: 'side-menu',
            icon: require('../../icons/menu-74-white.png')
          }
        ],
        fab: {
          collapsedId: 'new-todo',
          collapsedIcon: require('../../icons/plus-60-white.png'),
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
      submitEditList
    } = this.props;

    return (
			<View style={{flex: 1}}>
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

        <View style={{ height: 85 }}>
          {this.state.showTextInput
            ? <TextInput
                autoFocus={true}
                style={style.textInput}
                underlineColorAndroid={'transparent'}
                onSubmitEditing={value => {
                  this.showTextInput(false);
                  createList(value.nativeEvent.text.trim());
                }}
              />
            : null}
        </View>
      </ScrollView>
		</View>
    );
  }
}
