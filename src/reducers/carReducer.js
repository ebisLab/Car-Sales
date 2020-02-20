import { createStore } from "redux"
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
 
    switch(action.type){
        
        case 'ADD_FEATURES':
            const addPrice ={
                name: action.payload.name,
                price: action.payload.price
            }
            return {
                ...state,
                car: {...state.car, features: [...state.car.features, addPrice]}
            }
        case 'REMOVE_FEATURES':
            return{}
        case 'TOTAL_PRICE':
            return{}
            default:
                return state;

    }
}

const store = createStore(carReducer)