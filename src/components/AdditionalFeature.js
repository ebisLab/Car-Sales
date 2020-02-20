import React from 'react';
import {connect} from 'react-redux'
import {addFeatures} from '../actions'
const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={props.buyItem}
      className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default AdditionalFeature;

const mapStateToProps = state =>{
  return {
additionalPrice: state.additionalPrice,
car: state.car,
store: state.store
  }
}


export default 
connect(mapStateToProps, {addFeatures})
(AdditionalFeature); //function currying

//connect is a function that gets called twice
//first call -
//takes 2 args -
    //1. a function {mapStateToProps}
// the second call takes the component you wish to connect as an args.

// const addFeatures = () => {
//   // dipsatch an action here to add an item
//   return { type: 'ADD_FEATURES'}
// };
