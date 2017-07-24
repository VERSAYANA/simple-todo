import React, { Component } from 'react';
import {
	NativeModules,
	LayoutAnimation,
	Alert,
	View,
	Text,
	TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import style from './style/Buttons';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
	UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Buttons extends React.Component {
	render() {
		const { title, deleteList, toggleListTitle } = this.props;
		return (
			<View style={style.container}>
				<TouchableNativeFeedback
					onPress={() =>
						Alert.alert(
							`Delete "${title}"`,
							`Everything inside "${title}" will be deleted`,
							[
								{ text: 'CANCEL' },
								{
									text: 'DELETE',
									onPress: () => {
										LayoutAnimation.easeInEaseOut();
										deleteList(title);
									}
								}
							]
						)}
				>
					<View style={style.buttonWrapper}>
						<Icon name="delete" size={18} color="rgba(255, 255, 255, 0.75)" />
						<Text style={style.buttonText}>Delete</Text>
					</View>
				</TouchableNativeFeedback>

				<TouchableNativeFeedback
					onPress={() => {
						toggleListTitle(title);
					}}
				>
					<View style={style.buttonWrapper}>
						<Icon name="pencil" size={18} color="rgba(255, 255, 255, 0.75)" />
						<Text style={style.buttonText}>Edit</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		);
	}
}
