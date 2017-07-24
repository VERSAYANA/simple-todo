import React, { Component } from 'react';
import {
  Vibration,
  View,
  Text,
  TouchableNativeFeedback,
  TextInput
} from 'react-native';

import Buttons from './Buttons';
import style from './style/SingleList';


export default class SingleList extends React.Component {
  render() {
    const {
      list,
      viewList,
      toggleEdit,
      deleteList,
      toggleListTitle,
      submitEditList
    } = this.props;

    let left = null;
    if (!list.editTitle) {
      left = <Text style={style.listTitle}>{list.title}</Text>;
    } else {
      left = (
        <TextInput
          style={style.textInput}
          defaultValue={list.title}
          autoFocus={true}
          onBlur={() => {
            toggleListTitle(list.title);
            toggleEdit(list.title);
          }}
          returnKeyType={'done'}
          onSubmitEditing={value => {
            submitEditList(list.title, value.nativeEvent.text);
            toggleListTitle(value.nativeEvent.text);
            toggleEdit(value.nativeEvent.text);
          }}
        />
      );
    }

    let right = null;
    if (!list.edit) {
      right = <Text style={style.counterText}>{list.count}</Text>;
    } else {
      right = (
        <Buttons
          title={list.title}
          deleteList={deleteList}
          toggleListTitle={toggleListTitle}
        />
      );
    }

    return (
      <TouchableNativeFeedback
        onPress={() => {
          viewList(list.title);
        }}
        onLongPress={() => {
          toggleEdit(list.title);
          Vibration.vibrate([0, 40]);
        }}
        delayLongPress={300}
      >
        <View style={style.listRow}>

          <View style={style.left}>
            {left}
          </View>

          <View>
            {right}
          </View>

        </View>
      </TouchableNativeFeedback>
    );
  }
}
