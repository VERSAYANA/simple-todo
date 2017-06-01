import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  DatePickerAndroid,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import style from './style/Buttons';

export default class Buttons extends React.Component {
  showDatePicker = async (id, options) => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open(
        options
      );
      if (action !== DatePickerAndroid.dismissedAction) {
        const { dateTodo } = this.props;
        dateTodo(new Date(year, month, day).toDateString(), id);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  render() {
    const {
      id,
      note,
      date,
      list,
      deleteTodo,
      dateTodo,
      textMode,
      viewAdditionalNote,
      showListSelector
    } = this.props;
    let calendarIcon = '';
    if (date) {
      calendarIcon = (
        <Icon name="calendar-blank" size={19} color="rgba(0, 0, 0, 0.87)" />
      );
    } else {
      calendarIcon = (
        <Icon name="calendar-plus" size={19} color="rgba(0, 0, 0, 0.87)" />
      );
    }
    let noteIcon = '';
    if (note) {
      noteIcon = (
        <Icon name="note-outline" size={19} color="rgba(0, 0, 0, 0.87)" />
      );
    } else {
      noteIcon = (
        <Icon name="note-plus-outline" size={19} color="rgba(0, 0, 0, 0.87)" />
      );
    }

    return (
      <View style={style.row}>

        <TouchableNativeFeedback
          onPress={() => {
            deleteTodo(id);
          }}
        >
          <View style={style.container}>
            <Icon name="delete" size={19} color="rgba(0, 0, 0, 0.87)" />
            <Text style={style.text}>Delete</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => showListSelector(list, id)}>
          <View style={style.container}>
            <Icon
              name="format-list-bulleted"
              size={19}
              color="rgba(0, 0, 0, 0.87)"
            />
            <Text style={style.text}>List</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            if (!date) {
              this.showDatePicker(id, {});
            } else {
              Alert.alert(`Date`, `${date}`, [
                {
                  text: 'CANCEL'
                },
                {
                  text: 'Remove',
                  onPress: () => {
                    dateTodo(false, id);
                  }
                },
                {
                  text: 'Change',
                  onPress: () => {
                    this.showDatePicker(id, { date: new Date(date) });
                  }
                }
              ]);
            }
          }}
        >
          <View style={style.container}>
            {calendarIcon}
            <Text style={style.text}>Date</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            viewAdditionalNote(id, note);
          }}
        >
          <View style={style.container}>
            {noteIcon}
            <Text style={style.text}>Note</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            textMode(id);
          }}
        >
          <View style={style.container}>
            <Icon name="pencil" size={19} color="rgba(0, 0, 0, 0.87)" />
            <Text style={style.text}>Edit</Text>
          </View>
        </TouchableNativeFeedback>

      </View>
    );
  }
}
