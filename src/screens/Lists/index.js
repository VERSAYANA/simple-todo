import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

export default class ListContainer extends React.Component {

	go() {

		this.props.navigator.showModal({
			title: 'Todo',
			screen: 'simpletodo.Todoes',
			navigatorStyle: {
				statusBarColor: '#0097A7',
				navBarBackgroundColor: '#00BCD4',
				navBarTextColor: 'white',
				navBarButtonColor: 'white',
			}
		});
	}

	render() {
		return (
			<TouchableNativeFeedback
				onPress={() => { this.go() }}>
				<View style={{backgroundColor:'blue'}}>
					<Text>List</Text>
				</View>
			</TouchableNativeFeedback>
		)
	}
}
