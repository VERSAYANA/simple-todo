import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TextInput,
	TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import style from './style/SingleTodo';

export default class SingleTodo extends React.Component {
  render() {
    const { todo } = this.props;

    let checkBox = null;
    if (!todo.completed) {
      checkBox = (
        <Icon name="checkbox-blank-outline" size={23} color="#757575" />
      );
    } else {
      checkBox = <Icon name="checkbox-marked" size={23} color="#FF4081" />;
    }

    return (
      <TouchableNativeFeedback>

        <View style={style.todoRow}>

          <View style={style.left}>
            <TouchableWithoutFeedback>
              <View style={style.checkBox}>
                {checkBox}
              </View>
            </TouchableWithoutFeedback>

            <View style={style.titleContainer}>
              <Text style={style.text}>{todo.text}</Text>
            </View>

          </View>

          <View>
            <Text>placeholder</Text>
          </View>

        </View>

      </TouchableNativeFeedback>
    );
  }
}
