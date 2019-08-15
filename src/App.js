import React from 'react';
import { createStore } from 'redux';
// import {Provider} from 'react-redux';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {toggleAddBtn} from './actions'

// import { Reducer } from './reducer'



// const store = createStore(Reducer);
// console.log(store)

const App = () => {
  // console.log(props, 'App prps')

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    // <Provider store={store}>   {/* define store into provider */}
    <div className="boxes">
      <div className="box">
         <Header/>
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total/>
      </div>
    </div>
    // </Provider>
  );
};

// const mapStateToProps = state => {
//   console.log(state, 'state');
//   return {
//     car: state.car,
//     store: state.store,
//     additionalPrice: state.additionalPrice
//   };
// }

export default  /*connect(mapStateToProps, {toggleAddBtn})*/(App);
