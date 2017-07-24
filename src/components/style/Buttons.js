import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';


const style = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: 50,
	},
	container: {
		width: (Dimensions.get('window').width / 5) - 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: 9,
	},
})

export default style;
