import React, { Component } from 'react';
import {
	NativeModules,
	LayoutAnimation,
	TextInput,
	View,
	TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import style from './style/NewTodoInput';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
	UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Buttons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: false
		};
	}

	setInputValue(value) {
		this.setState({ inputValue: value });
	}

	clearTextInput = () => {
		this._textInput.setNativeProps({ text: '' });
	};

	render() {
		const { addTodo, list, date, focus, id } = this.props;

		return (
			<View style={style.textInputContainer}>
				<TouchableWithoutFeedback
					onPress={() => {
						if (!this.state.inputValue) {
							this._textInput.focus();
						} else {
							LayoutAnimation.easeInEaseOut();
							addTodo(this.state.inputValue.trim(), list, date, focus, id);
							this.clearTextInput();
							this.setInputValue(false);
						}
					}}
				>
					<View style={style.plusIcon}>
						<Icon name="plus" size={22} color="#26c9b3" />
					</View>
				</TouchableWithoutFeedback>

				<TextInput
					ref={component => (this._textInput = component)}
					style={style.textInput}
					placeholder={'New To-Do'}
					placeholderTextColor={'#26c9b3'}
					underlineColorAndroid={'transparent'}
					onChangeText={newText => this.setInputValue(newText)}
					onSubmitEditing={value => {
						LayoutAnimation.easeInEaseOut();
						addTodo(value.nativeEvent.text.trim(), list, date, focus, id);
						this.clearTextInput();
						this.setInputValue(false);
					}}
				/>
			</View>
		);
	}
}
