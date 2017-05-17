import React from 'react';
import { connect } from 'react-redux';
import _2Weeks from './2Weeks';

const mapStateToProps = state => ({
  today: state.today,
});

const mapDispatchToProps = {
  // createList: title => ({
  //   type: "CREATE_LIST",
  //   title
  // }),
};


export default connect(mapStateToProps, mapDispatchToProps)(_2Weeks);
