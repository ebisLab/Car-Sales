import { ADD_FEATURES } from "../actions"

//3. Created a store

  export const initialState = {
    additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        store: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]

  }

  //calls it one time when app is bootstrapped
export const carReducer = (state = initialState, action) => {  // initial state is undefined when app starts up, so we initalize state with initialState in the case state is undefined
 console.log(action.payload, "action payload")
    switch(action.type){
        case ADD_FEATURES:
            return {
                ...state,
                car: {
                    ...state.car,
                    price: state.car.price + action.payload.price,
                     features: [...state.car.features,
                        action.payload
                        ]}
            }
        case 'REMOVE_FEATURES':
            return{}
        case 'TOTAL_PRICE':
            return{}
            default:
                return state;

    }
}
