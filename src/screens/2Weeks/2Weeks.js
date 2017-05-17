import React, { Component } from 'react';
import {
  ViewPagerAndroid,
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import style from './style';

const HEIGHT = 600;

export default class _2Weeks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: HEIGHT - 0.01 };

    // this.viewAdditionalNote = this.viewAdditionalNote.bind(this);
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    this.setState({ height: HEIGHT });
  }

  go(page) {
    this.viewPager.setPage(page);
  }

  render() {
    return (
      <ViewPagerAndroid
        style={{ height: this.state.height }}
        initialPage={0}
        // scrollEnabled={false}
        ref={viewPager => {
          this.viewPager = viewPager;
        }}
      >

        <View>
          <TouchableNativeFeedback onPress={() => this.go(1)}>

            <View style={style.paiger}>
              <Text style={style.paigerText}>This Week</Text>
              <Icon name="chevron-right" size={22} />
            </View>

          </TouchableNativeFeedback>

        </View>

        <View>
          <TouchableNativeFeedback onPress={() => this.go(0)}>

						<View style={style.paiger}>
							<Icon name="chevron-left" size={24} />
              <Text style={style.paigerText}>Next Week</Text>
            </View>

          </TouchableNativeFeedback>
        </View>

      </ViewPagerAndroid>
    );
  }
}
