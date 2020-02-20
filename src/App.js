import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux'


const App = (props) => {
  console.log('props', props)


  return (
    <div className="boxes">
      <div className="box">
        Something here
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} />
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
connect(mapStateToProps, {})(App); //function currying

//connect is a function that gets called twice
//first call -
//takes 2 args -
    //1. a function {mapStateToProps}
// the second call takes the component you wish to connect as an args.
