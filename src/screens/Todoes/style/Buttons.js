import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';


const style = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: 45,
	},
	container: {
		width: (Dimensions.get('window').width / 4) - 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: 'rgba(0, 0, 0, 0.87)',
		fontSize: 11,
	},
})

export default style;
