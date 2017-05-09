import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import style from './Style/SingleList';

export default class SingleList extends React.Component {
  render() {
    const { list, viewList } = this.props;
    console.log(this.props);

    return (
      <TouchableNativeFeedback
        onPress={() => {
          viewList(list.title);
        }}
      >
        <View style={style.listRow}>

          <View>
            <Text>{list.title}</Text>
          </View>

          <View>
            <Text>{list.count}</Text>
          </View>

        </View>
      </TouchableNativeFeedback>
    );
  }
}
