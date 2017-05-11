import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import style from './style/Buttons';

export default class Buttons extends React.Component {
  render() {
		const { id, deleteTodo, textMode } = this.props;
    return (
      <View style={style.row}>

        <TouchableNativeFeedback onPress={() => { deleteTodo(id) }}>
          <View style={style.container}>
            <Icon name="delete" size={19} color="rgba(0, 0, 0, 0.87)" />
            <Text style={style.text}>Delete</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => { textMode(id) }}>
          <View style={style.container}>
            <Icon name="pencil" size={19} color="rgba(0, 0, 0, 0.87)" />
            <Text style={style.text}>Edit</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={style.container}>
            <Icon name="alarm-plus" size={19} color="rgba(0, 0, 0, 0.87)" />
            <Text style={style.text}>Reminder</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={style.container}>
            <Icon
              name="note-plus-outline"
              size={19}
              color="rgba(0, 0, 0, 0.87)"
            />
            <Text style={style.text}>Note</Text>
          </View>
        </TouchableNativeFeedback>

      </View>
    );
  }
}
