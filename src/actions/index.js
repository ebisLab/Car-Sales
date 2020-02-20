export const ADD_FEATURES = 'ADD_FEATURES';
export const DELETE_FEATURES = 'DELETE_FEATURES';

// export const addPrice 

export const addFeatures = (itemAdd) => {
    // dipsatch an action here to add an item
    return { type: ADD_FEATURES, payload: itemAdd} //payload --> any information you want to add into the reducer -- for this specific action
  };

  export const deleteFeatures = (itemDelete) => {
    // dipsatch an action here to add an item
    return { type: DELETE_FEATURES, payload: itemDelete} //payload --> any information you want to add into the reducer -- for this specific action
  };
