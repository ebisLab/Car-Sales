import React from 'react';
import {connect} from 'react-redux'
import {deleteFeatures} from '../actions'

const AddedFeature = props => {
  console.log(props, 'added features')
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> props.deleteFeatures(props.feature)}
      className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// export default AddedFeature;

const mapStateToProps = state =>{
  return {
additionalPrice: state.additionalPrice,
car: state.car,
store: state.store
  }
}


export default 
connect(mapStateToProps, {deleteFeatures})(AddedFeature); //function currying

