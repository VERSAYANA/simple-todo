import React, { Component } from 'react';
import {
  ViewPagerAndroid,
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SingleTodo from './SingleTodo';

import style from './style/2Weeks';

const HEIGHT = 600;

export default class _2Weeks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: HEIGHT - 0.01 };

    // this.viewAdditionalNote = this.viewAdditionalNote.bind(this);
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    const { today, dateToday } = this.props;
    const dateNow = new Date().toDateString();

    if (!today || today !== dateNow) {
      console.log('hello');
      dateToday(dateNow);
    }
  }

  componentDidMount() {
    this.setState({ height: HEIGHT });
  }

  go(page) {
    this.viewPager.setPage(page);
  }

  dayTitle(i) {
    switch (i) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return 'hello?';
    }
  }

  render() {
    const {
      thisWeek,
      nextWeek,
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
    console.log(this.props);
    return (
      <ViewPagerAndroid
        style={{ height: this.state.height }}
        initialPage={0}
        // scrollEnabled={false}
        ref={viewPager => {
          this.viewPager = viewPager;
        }}
      >

        <View>

          <View>
            <TouchableNativeFeedback onPress={() => this.go(1)}>

              <View style={style.paiger}>
                <Text style={style.paigerText}>This Week</Text>
                <Icon name="chevron-right" size={22} />
              </View>

            </TouchableNativeFeedback>
          </View>

          <ScrollView>
            {thisWeek.map((todos, i) => (
              <View key={i} style={style.week}>

                <View style={style.titleContainer}>
                  <Text style={style.titleText}>{this.dayTitle(i)}</Text>
                  <Icon name="plus" size={20} />
                </View>

                  {todos.map((todo, i) => (
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

              </View>
            ))}
						<View style={{height: 200}}></View>
          </ScrollView>

        </View>

        <View>
          <TouchableNativeFeedback onPress={() => this.go(0)}>

            <View style={style.paiger}>
              <Icon name="chevron-left" size={24} />
              <Text style={style.paigerText}>Next Week</Text>
            </View>

          </TouchableNativeFeedback>
        </View>

      </ViewPagerAndroid>
    );
  }
}
