import React from 'react';
import {toggleAddBtn} from '../actions';
import { connect } from 'react-redux';


const AdditionalFeature = props => {
  console.log('Addn ft', props)

  const dispatch = () => {
  props.toggleAddBtn(props.feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={dispatch}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log(state, 'state');
  return {
    // car: state.car,
    // store: state.store,
    // additionalPrice: state.additionalPrice
  };
}



export default connect(mapStateToProps,{toggleAddBtn})(AdditionalFeature);
