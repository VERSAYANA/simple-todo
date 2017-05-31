import React, { Component } from 'react';
import {
  ViewPagerAndroid,
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SingleTodo from './SingleTodo';

import style from './style/MiniCalendar';

export default class MiniCalendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: -props.start,
      input: false
    };

    this.viewAdditionalNote = this.viewAdditionalNote.bind(this);
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    const { today, dateToday } = this.props;
    const dateNow = new Date().toDateString();

    if (!today || today !== dateNow) {
      dateToday(dateNow);
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

  showDay(selected) {
    this.setState({ show: selected });
  }

  showInput(selected) {
    this.setState({ input: selected });
  }

  dayTitle(i, start) {
    if (i + start < 0) {
      return `${i + start}`;
    }
    if (i + start == 0) {
      return 'Today';
    }
    if (i + start > 0) {
      return `+${i + start}`;
    }
  }

  calDate(i, start, today) {
    const date = new Date(today);
    date.setDate(date.getDate() + (i + start));
    return date.toDateString();
  }

  render() {
    const {
      miniCalendar,
      start,
      id,
      today,
      addTodo,
      complete,
      additionalNote,
      textTodo,
      editMode,
      deleteTodo,
      textMode,
      dateTodo
    } = this.props;

    return (
      <ScrollView>
        {miniCalendar.map((todos, i) => (
          <View key={i} style={style.week}>

            <TouchableNativeFeedback onPress={() => this.showDay(i)}>
              <View style={style.titleContainer}>
                <Text
                  style={
                    this.state.show == i
                      ? style.titleColoredText
                      : style.titleText
                  }
                >
                  {this.dayTitle(i, start)}
                </Text>

                <TouchableNativeFeedback
                  onPress={() => {
                    this.showDay(i);
                    this.showInput(i);
                  }}
                >
                  <View style={style.plus}>
                    <Icon name="plus" size={20} />
                  </View>
                </TouchableNativeFeedback>

              </View>
            </TouchableNativeFeedback>

            {this.state.show == i
              ? todos.map((todo, j) => (
                  <SingleTodo
                    key={j}
                    todo={todo}
                    complete={complete}
                    editMode={editMode}
                    deleteTodo={deleteTodo}
                    textMode={textMode}
                    textTodo={textTodo}
                    viewAdditionalNote={this.viewAdditionalNote}
                    dateTodo={dateTodo}
                  />
                ))
              : null}

            {this.state.input === i
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
                    underlineColorAndroid={'transparent'}
                    onBlur={() => this.showInput(false)}
                    onSubmitEditing={value => {
                      this.showInput(false);
                      addTodo(
                        value.nativeEvent.text.trim(),
                        'All',
                        this.calDate(i, start, today),
												id
                      );
                    }}
                  />
                </View>
              : null}

          </View>
        ))}

      </ScrollView>
    );
  }
}
