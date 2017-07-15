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
    backgroundColor: "#21272B",
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
    borderBottomColor: "rgba(255, 255, 255, 0.12)"
  },
  text: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.87)"
  },
  selectedText: {
    color: "#26c9b3",
    fontSize: 14
  },
  cancelText: {
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    color: "rgba(255, 255, 255, 0.87)",
    fontWeight: "bold"
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
