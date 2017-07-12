import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Dimensions,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { selectList } from "../../actionCreators";

class ListSelector extends React.Component {
  cancel() {
    this.props.navigator.dismissLightBox();
  }

  render() {
    const { lists, list, id, selectList } = this.props;
    return (
      <View style={style.container}>
        <ScrollView>
          {lists.map((l, i) =>
            <TouchableNativeFeedback
              key={i}
              onPress={() => {
                selectList(l.title, id);
                this.cancel();
              }}
            >
              <View style={style.list}>
                <Text style={l.title == list ? style.selectedText : style.text}>
                  {l.title}
                </Text>
              </View>
            </TouchableNativeFeedback>
          )}
        </ScrollView>

        <TouchableNativeFeedback onPress={() => this.cancel()}>
          <View style={style.cancelButton}>
            <Text style={style.cancelText}>CANCEL</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: Dimensions.get("window").width - 30,
    height: Dimensions.get("window").height - 180,
    justifyContent: "space-between"
  },
  list: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 50,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.16)"
  },
  text: {
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.87)"
  },
  selectedText: {
    color: "#00BCD4",
    fontSize: 15
  },
  cancelText: {
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    color: "#FF4081"
  }
});

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  list: ownProps.list,
  lists: state.lists
});

const mapDispatchToProps = {
  selectList: (list, id) => selectList(list, id)
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSelector);
