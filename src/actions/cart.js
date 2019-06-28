
export const addToCart = (data) => dispatch => {
    dispatch({
        type: 'ADD_TO_CART',
        payload: data
    });

}

export const addAmount = (data) => dispatch =>{
    
    dispatch({
        type:'ADD_AMOUNT_PRODUCT',
        payload:data
    })
}

export const minAmount = (data) => dispatch =>{
    dispatch({
        type:'MIN_AMOUNT_PRODUCT',
        payload:data
    })
}
