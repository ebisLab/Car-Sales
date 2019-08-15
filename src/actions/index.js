export const ADD_PRICE = 'ADD_PRICE';
export const REMOVE_PRICE = 'REMOVE_PRICE';




//action creat - fn that creates and returns actions
export const toggleAddBtn = item => {
    console.log('its invoked')
    return {type: 'ADD_PRICE', payload: item}

}

export const removeBtnPrice = item => {
    console.log('its invoked to remove')
    return {type: 'REMOVE_PRICE', payload: item}

}