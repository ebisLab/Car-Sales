import React from 'react';
import { connect } from 'react-redux';
import {removeBtnPrice} from '../actions';


const AddedFeature = props => {
  const dispatch = () => {
    props.removeBtnPrice(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={dispatch}>X</button>
      {props.feature.name}
    </li>
  );
};


const mapStateToProps = state => {
  // console.log(state, 'state');
  return {

  };
}


export default connect(mapStateToProps,{removeBtnPrice})(AddedFeature);
