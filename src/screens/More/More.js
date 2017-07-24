import React, { Component } from 'react';
import {
	View,
	ScrollView,
	Text,
	Switch,
	TouchableNativeFeedback,
	Alert,
	Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import style from './style/More';

export default class Home extends React.Component {
	render() {
		const { filter, toggleCompletedFilter, clearCompleted } = this.props;

		return (
			<ScrollView>
				<View style={style.section}>
					<View style={style.titileContainer}>
						<Text style={style.title}>Settings</Text>
					</View>

					<View style={style.items}>
						<TouchableNativeFeedback onPress={() => toggleCompletedFilter()}>
							<View style={[style.item, { justifyContent: 'space-between' }]}>
								<Text style={style.itemText}>Show completed</Text>
								<Switch
									style={style.switch}
									onValueChange={() => toggleCompletedFilter()}
									value={filter}
									onTintColor={'#e6e6e6'}
									thumbTintColor={'#f2f2f2'}
								/>
							</View>
						</TouchableNativeFeedback>

						<TouchableNativeFeedback
							onPress={() =>
								Alert.alert(
									`Clear completed`,
									`Are you sure you want to clear all completed to-dos?`,
									[
										{ text: 'Cancel' },
										{
											text: 'Yes',
											onPress: () => {
												clearCompleted();
											}
										}
									]
								)}
						>
							<View style={style.item}>
								<Text style={style.itemText}>Clear completed</Text>
							</View>
						</TouchableNativeFeedback>
					</View>
				</View>

				<View style={style.section}>
					<View style={style.titileContainer}>
						<Text style={style.title}>Account</Text>
					</View>

					<View style={style.items}>
						<View style={style.item}>
							<Text style={style.itemText}>Sign up / Login</Text>
						</View>
					</View>
				</View>

				<View style={style.lastSection}>
					<View style={style.titileContainer}>
						<Text style={style.title}>Developer</Text>
					</View>

					<View style={style.items}>
						<TouchableNativeFeedback
							onPress={() => Linking.openURL('https://github.com/VERSAYANA/')}
						>
							<View style={style.item}>
								<Icon
									style={style.icon}
									name={'github-box'}
									size={20}
									color={'rgba(255, 255, 255, 0.87)'}
								/>
								<Text style={style.itemText}>VERSAYANA</Text>
							</View>
						</TouchableNativeFeedback>

						<TouchableNativeFeedback
							onPress={() => Linking.openURL('mailto:kh.ramtin@gmail.com')}
						>
							<View style={style.item}>
								<Icon
									style={style.icon}
									name={'gmail'}
									size={20}
									color={'rgba(255, 255, 255, 0.87)'}
								/>
								<Text style={style.itemText}>KH.RAMTIN</Text>
							</View>
						</TouchableNativeFeedback>
					</View>
				</View>
			</ScrollView>
		);
	}
}
