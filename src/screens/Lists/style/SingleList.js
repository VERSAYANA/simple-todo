import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  listRow: {
    backgroundColor: "#263238",
    height: 55,
    // paddingLeft: 16,
    // paddingRight: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: 'rgba(255, 255, 255, 0.30)',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  left: {
    flex: 1,
    paddingLeft: 16
  },
  listTitle: {
    color: "rgba(255, 255, 255, 0.87)",
    fontSize: 15
  },
  textInput: {
    color: "rgba(255, 255, 255, 0.87)",
		paddingLeft: 0,
		marginLeft: 0,
  },
  counterText: {
    color: "rgba(255, 255, 255, 0.60)",
    paddingRight: 16,
    paddingLeft: 16,
		fontSize: 15
  }
});

export default style;
