import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import {toggleAddBtn} from '../actions';



const AdditionalFeatures = props => {

  console.log(props, 'props')
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

//making what i have in state and making it equal to that. (like setState)
const mapStateToProps = state => {
  console.log(state, 'state');
  return {
 store: state.store,
  };
}


export default connect(mapStateToProps,{})(AdditionalFeatures);
