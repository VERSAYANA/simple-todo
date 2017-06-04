import React, { Component } from 'react';
import {
  ViewPagerAndroid,
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
  TextInput
} from 'react-native';
// import reactMixin from 'react-mixin';
// import TimerMixin from 'react-timer-mixin';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SingleTodo from './SingleTodo';

import style from './style/MiniCalendar';

export default class MiniCalendar extends React.Component {
  // mixins: [TimerMixin];

  constructor(props) {
    super(props);

    this.state = {
      show: -props.start,
      input: false
    };

    this.viewAdditionalNote = this.viewAdditionalNote.bind(this);
    this.showListSelector = this.showListSelector.bind(this);

    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    const { today, dateToday } = this.props;
    const dateNow = new Date();

    // let h = dateNow.getHours();
    // let m = dateNow.getMinutes();
    // let s = dateNow.getSeconds();
    // console.log(h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000 + 999);

    // this.setTimeout(() => {
    //   dateNow = new Date();
    // }, h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000 + 999);

    if (!today || today !== dateNow.toDateString()) {
      dateToday(dateNow.toDateString());
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

  showListSelector(list, id) {
    this.props.navigator.showLightBox({
      screen: 'simpletodo.ListSelector',
      passProps: {
        list,
        id
      },
      style: {
        backgroundBlur: 'dark'
      }
    });
  }

  showDay(selected, show) {
		if(show === selected && selected !== false) {
			this.setState({ show: false });
		} else {
    this.setState({ show: selected });
		}
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

  // count(todos) {
  //   return todos.filter(t => !t.completed).length;
  // }

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

            <TouchableNativeFeedback onPress={() => this.showDay(i, this.state.show)}>
              <View style={style.titleContainer}>
                <Text
                  style={
                    this.state.show === i
                      ? style.titleColoredText
                      : style.titleText
                  }
                >
                  {this.dayTitle(i, start)}
                </Text>

                <View style={style.listAdditions}>
                  {/*
                  <View>
                    <Text>{this.count(todos)}</Text>
                  </View> */}

                  <TouchableNativeFeedback
                    onPress={() => {
                      this.showDay(i);
                      this.showInput(i);
                    }}
                  >
                    <View style={style.additions}>
                      <Icon name="plus" size={20} />
                    </View>
                  </TouchableNativeFeedback>

                </View>

              </View>
            </TouchableNativeFeedback>

            {this.state.show === i
              ? todos.map((todo, j) => (
                  <SingleTodo
                    key={j}
                    todo={todo}
                    complete={complete}
                    editMode={editMode}
                    deleteTodo={deleteTodo}
                    textMode={textMode}
                    textTodo={textTodo}
                    dateTodo={dateTodo}
                    viewAdditionalNote={this.viewAdditionalNote}
                    showListSelector={this.showListSelector}
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

// reactMixin(MiniCalendar.prototype, TimerMixin);
