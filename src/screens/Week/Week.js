import React, { Component } from 'react';
import {
	NativeModules,
	LayoutAnimation,
	ViewPagerAndroid,
	View,
	Text,
	TouchableNativeFeedback,
	ScrollView,
	TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SingleTodo from '../../components/SingleTodo';
import NewTodoInput from '../../components/NewTodoInput';
import style from './style/Week';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
	UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Week extends React.Component {
	constructor(props) {
		super(props);

		const todayIndex = new Date(props.today).getDay();
		let array = [];
		for (i = 0; i <= 6; i++) {
			if (i === todayIndex) {
				array.push(true);
			} else array.push(false);
		}

		this.state = { show: array };

		this._viewAdditionalNote = this._viewAdditionalNote.bind(this);
		this._showListSelector = this._showListSelector.bind(this);
	}

	componentWillMount() {
		const { today, dateToday } = this.props;
		const dateNow = new Date();

		if (!today || today !== dateNow.toDateString()) {
			dateToday(dateNow.toDateString());
		}
	}

	_viewAdditionalNote(id, note) {
		this.props.navigator.showModal({
			screen: 'simpletodo.AdditionalNote',
			title: 'Note',
			passProps: {
				id,
				note
			},
			navigatorStyle: {
				statusBarColor: '#347f78',
				navBarBackgroundColor: '#4d9891',
				navBarTextColor: 'white',
				navBarButtonColor: 'white',
				screenBackgroundColor: '#FAFAFA'
			},
			navigatorButtons: {
				rightButtons: [
					{
						id: 'done-note',
						icon: require('../../icons/check-74-white.png'),
						buttonColor: 'white'
					}
				]
			}
		});
	}

	_showListSelector(list, id) {
		this.props.navigator.showLightBox({
			screen: 'simpletodo.ListSelector',
			passProps: {
				list,
				id
			},
			style: {
				backgroundBlur: 'dark'
			}
		});
	}

	_dayTitle(index, todayIndex) {
		if (index === todayIndex) {
			return 'Today';
		}
		switch (index) {
			case 0:
				return 'Sunday';

			case 1:
				return 'Monday';
			case 2:
				return 'Tuesday';
			case 3:
				return 'Wednesday';
			case 4:
				return 'Thursday';
			case 5:
				return 'Friday';
			case 6:
				return 'Saturday';
		}
	}

	_dayDate(index, todayIndex, today) {
		const date = new Date(today);
		date.setDate(date.getDate() - (todayIndex - index));
		return date.toDateString();
	}

	_showDay(index) {
		const array = this.state.show;
		array[index] = !array[index];
		this.setState({ show: array });
	}

	render() {
		const {
			today,
			week,
			addTodo,
			list,
			id,
			complete,
			deleteTodo,
			editMode,
			textMode,
			textTodo,
			dateTodo,
			toggleFocus
		} = this.props;
		const todayIndex = new Date(today).getDay();

		return (
			<ScrollView>
				{week.map((dayTodos, index) =>
					<TouchableNativeFeedback
						key={index}
						onPress={() => {
							LayoutAnimation.easeInEaseOut();
							this._showDay(index);
						}}
					>
						<View
							style={index !== 6 ? style.dayContainer : style.lastContainer}
						>
							<View style={style.subheaderContainer}>
								<Text
									style={
										index !== todayIndex
											? style.subheader
											: style.todaySubheader
									}
								>
									{this._dayTitle(index, todayIndex)}
								</Text>
								{!this.state.show[index]
									? <Icon
											name={'chevron-down'}
											size={20}
											color={'rgba(255, 255, 255, 0.65)'}
										/>
									: <Icon
											name={'chevron-up'}
											size={20}
											color={'rgba(255, 255, 255, 0.65)'}
										/>}
							</View>

							{this.state.show[index]
								? <View>
										<NewTodoInput
											addTodo={addTodo}
											list={list}
											date={this._dayDate(index, todayIndex, today)}
											focus={false}
											id={id}
										/>

										{dayTodos.map((todo, i) =>
											<SingleTodo
												key={i}
												todo={todo}
												complete={complete}
												editMode={editMode}
												deleteTodo={deleteTodo}
												textMode={textMode}
												textTodo={textTodo}
												dateTodo={dateTodo}
												viewAdditionalNote={this.viewAdditionalNote}
												showListSelector={this.showListSelector}
												toggleFocus={toggleFocus}
											/>
										)}
									</View>
								: null}
						</View>
					</TouchableNativeFeedback>
				)}

				<View style={{ height: 50 }} />
			</ScrollView>
		);
	}
}
