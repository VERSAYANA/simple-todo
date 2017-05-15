import React, { Component } from 'react';
import { Alert, View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import style from './style'

class SideMenu extends React.Component {
  render() {
    const { filter, toggleFilter, clearCompleted } = this.props;

    let filterIcon = null;
    if (!filter) {
      filterIcon = (
        <Icon
          name="checkbox-blank-outline"
          size={23}
          color="rgba(0, 0, 0, 0.80)"
        />
      );
    } else {
      filterIcon = <Icon name="checkbox-marked" size={23} color="#FF4081" />;
    }

    return (
      <View style={style.container}>

				<TouchableNativeFeedback
					onPress={() => {
						toggleFilter();
					}}
				>
        <View style={[style.row, style.showCompleted]}>

          <Text>Show completed todes</Text>

            {filterIcon}
        </View>
			</TouchableNativeFeedback>

			<TouchableNativeFeedback
				onPress={() =>
					Alert.alert(
						`Clear all completed todes`,
						`Are you sure you want to clear all completed todoes?`,
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
        <View style={style.row}>

            <Text>Clear completed todes</Text>
        </View>
			</TouchableNativeFeedback>

      </View>
    );
  }
}


const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = {
  toggleFilter: () => ({
    type: 'TOGGLE_FILTER'
  }),
  clearCompleted: () => ({
    type: 'CLEAR_COMPLETED'
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
