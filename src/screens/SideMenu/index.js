import React, { Component } from 'react';
import {
  Picker,
  Alert,
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import style from './style';

class SideMenu extends React.Component {
  render() {
    const { filter, miniCalendar, miniCal, toggleFilter, clearCompleted } = this.props;

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

				<View style={style.cat}>

					<View style={style.catTitle}>
						<Text style={style.catText}>COMPLETED ITEMS</Text>
					</View>

	        <TouchableNativeFeedback
	          onPress={() => {
	            toggleFilter();
	          }}
	        >
						<View style={style.row}>

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

				<View style={style.cat}>

					<View style={style.catTitle}>
						<Text style={style.catText}>MINICALENDAR</Text>
					</View>

					<View style={style.row}>

						<View>
							<Text>Start</Text>
						</View>

		        <Picker
							style={style.picker}
		          selectedValue={miniCalendar.starst}
		          onValueChange={start => miniCal(start, miniCalendar.end)}
		        >
		          <Picker.Item label="-6" value={-6} />
		          <Picker.Item label="-5" value={-5} />
		          <Picker.Item label="-4" value={-4} />
		          <Picker.Item label="-3" value={-3} />
		          <Picker.Item label="-2" value={-2} />
		          <Picker.Item label="-1" value={-1} />
		          <Picker.Item label="0" value={0} />
		        </Picker>

					</View>

					<View style={style.row}>

						<View>
							<Text>End</Text>
						</View>

		        <Picker
							style={style.picker}
		          selectedValue={miniCalendar.end}
		          onValueChange={end => miniCal(miniCalendar.start, end)}
		        >
		          <Picker.Item label="0" value={0} />
							<Picker.Item label="+1" value={1} />
							<Picker.Item label="+2" value={2} />
							<Picker.Item label="+3" value={3} />
							<Picker.Item label="+4" value={4} />
							<Picker.Item label="+5" value={5} />
							<Picker.Item label="+6" value={6} />
		        </Picker>

					</View>


				</View>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.filter,
  miniCalendar: state.miniCalendar
});

const mapDispatchToProps = {
  toggleFilter: () => ({
    type: 'TOGGLE_FILTER'
  }),
  clearCompleted: () => ({
    type: 'CLEAR_COMPLETED'
  }),
  miniCal: (start, end) => ({
    type: 'MINICAL',
    start,
    end
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
