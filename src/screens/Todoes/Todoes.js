import React, { Component } from 'react';
import { ScrollView, View, TextInput } from 'react-native';

import SingleTodo from './SingleTodo';

export default class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextInput: true
    };
  }

  render() {
    const { todoes, list, id, addTodo } = this.props;
    console.log(this.props);

    return (
      <ScrollView>

        {todoes.map((todo, i) => <SingleTodo key={i} todo={todo} />

			)}
			<View>
				<TextInput
					onSubmitEditing={value => {
						addTodo(value.nativeEvent.text.trim(), list, id );
					}}
				 />
			</View>
      </ScrollView>
    );
  }
}
