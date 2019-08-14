import React from 'react';
import {toggleAddBtn} from '../actions';
import { connect } from 'react-redux';


const AdditionalFeature = props => {
  console.log('Addn ft', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=> props.toggleAddBtn}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(null,{toggleAddBtn})(AdditionalFeature);
