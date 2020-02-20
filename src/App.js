import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux'
import { createStore } from 'redux';
import { carReducer } from './reducers/carReducer';


const App = (props) => {
  console.log('props', props)

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {

    // dipsatch an action here to add an item
    console.log('Clickety mee woo hoo')
  };

  return (
    <div className="boxes">
      <div className="box">
        Something here
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} store={props.store} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  return {
additionalPrice: state.additionalPrice,
car: state.car,
store: state.store
  }
}


export default 
connect(mapStateToProps, {addFeatures})
(App); //function currying

//connect is a function that gets called twice
//first call -
//takes 2 args -
    //1. a function {mapStateToProps}
// the second call takes the component you wish to connect as an args.

const addFeatures = () => {
  // dipsatch an action here to add an item
  return { type: 'ADD_FEATURES'}
};