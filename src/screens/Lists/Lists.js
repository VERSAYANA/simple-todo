import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

import SingleList from './SingleList';
import style from './Style/Lists';

export default class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.viewList = this.viewList.bind(this);
  }

  viewList(title) {
    this.props.navigator.showModal({
      screen: 'simpletodo.Todoes',
			title,
      passProps: {
        title
      }
    });
  }

  render() {
    const { lists } = this.props;
    console.log(this.props);

    return (
      <View>

        {lists.map((list, i) => (
          <SingleList key={i} list={list} viewList={this.viewList} />
        ))}

      </View>
    );
  }
}
