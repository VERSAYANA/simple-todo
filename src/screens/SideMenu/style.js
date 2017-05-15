import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
		// opacity: 0.85
  },
	row: {
		height: 50,
		paddingLeft: 16,
		paddingRight: 16,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.12)',
	},
	showCompleted: {
		justifyContent: 'space-between',
	}
});

export default style;
