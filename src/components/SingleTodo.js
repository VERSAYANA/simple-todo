import React, { Component } from 'react';
import {
	NativeModules,
	LayoutAnimation,
	View,
	Text,
	TouchableNativeFeedback,
	TextInput,
	TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Buttons from './Buttons';
import style from './style/SingleTodo';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
	UIManager.setLayoutAnimationEnabledExperimental(true);

export default class SingleTodo extends React.Component {
	render() {
		const {
			todo,
			complete,
			deleteTodo,
			editMode,
			textMode,
			textTodo,
			viewAdditionalNote,
			dateTodo,
			showListSelector,
			toggleFocus
		} = this.props;

		let checkBox = null;
		if (!todo.completed) {
			checkBox = (
				<Icon
					name="checkbox-blank-outline"
					size={20}
					color="rgba(255, 255, 255, 0.80)"
				/>
			);
		} else {
			checkBox = (
				<Icon
					name="checkbox-marked"
					size={20}
					color="rgba(255, 255, 255, 0.80)"
				/>
			);
		}

		let todoTitle = null;
		if (!todo.editText) {
			if (!todo.completed) {
				todoTitle = (
					<Text style={style.text}>
						{todo.text}
					</Text>
				);
			} else {
				todoTitle = (
					<Text style={style.completedText}>
						{todo.text}
					</Text>
				);
			}
		} else {
			todoTitle = (
				<TextInput
					style={style.textInput}
					defaultValue={todo.text}
					autoFocus={true}
					onBlur={() => {
						textMode(todo.id);
						editMode(todo.id);
					}}
					returnKeyType={'done'}
					onSubmitEditing={v => {
						textTodo(v.nativeEvent.text, todo.id);
						textMode(todo.id);
						editMode(todo.id);
					}}
				/>
			);
		}

		return (
			<TouchableNativeFeedback
				onPress={() => {
					LayoutAnimation.easeInEaseOut();
					editMode(todo.id);
				}}
			>
				<View style={style.todoWrapper}>
					<View style={style.todoRow}>
						<View style={style.left}>
							<TouchableWithoutFeedback
								onPress={() => {
									LayoutAnimation.easeInEaseOut();
									complete(todo.id);
								}}
							>
								<View style={style.checkBox}>
									{checkBox}
								</View>
							</TouchableWithoutFeedback>

							<View style={style.textContainer}>
								{todoTitle}
							</View>
						</View>

						{/* <View style={style.iconsContainer}> */}
						{/* {todo.note
                ? <Icon
										style={style.icon}
                    name="note-outline"
                    size={16}
                    color="rgba(0, 0, 0, 0.54)"
                  />
                : null} */}
						{/* {showDateIcon && todo.date
                ? <Icon
									style={style.icon}
                    name="calendar-blank"
                    size={16}
                    color="rgba(0, 0, 0, 0.54)"
                  />
                : null} */}
						<TouchableNativeFeedback onPress={() => toggleFocus(todo.id)}>
							<View style={style.iconStar}>
								{!todo.focus
									? <Icon
											name="star-outline"
											size={20}
											color="rgba(255, 255, 255, 0.80)"
										/>
									: <Icon
											name="star"
											size={20}
											color="rgba(255, 255, 255, 0.80)"
										/>}
							</View>
						</TouchableNativeFeedback>

						{/* </View> */}
					</View>
					{todo.editMode
						? <Buttons
								deleteTodo={deleteTodo}
								textMode={textMode}
								id={todo.id}
								note={todo.note}
								date={todo.date}
								list={todo.list}
								viewAdditionalNote={viewAdditionalNote}
								dateTodo={dateTodo}
								showListSelector={showListSelector}
							/>
						: null}
				</View>
			</TouchableNativeFeedback>
		);
	}
}
