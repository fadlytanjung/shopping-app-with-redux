const initialState = {
    cart_product:[]
};

export default function(state = initialState, action ) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart_product:[...state.cart_product,action.payload]
            };
        case 'ADD_AMOUNT_PRODUCT':
            let data = action.payload

            state.cart_product.forEach((item)=>{
                if(item.id === data[0]){
                    item.count = data[1]
                }
            })
            return {
                ...state,
                cart_product:state.cart_product
            };
        case 'MIN_AMOUNT_PRODUCT':
                let data_c = action.payload
                // state.cart_product[data[0]].count = data[1]
                if(data_c[1]===0){
                    state.cart_product = state.cart_product.filter(e=>e.id !== data_c[0])
                }
                state.cart_product.forEach((item)=>{
                    if(item.id === data_c[0]){
                        item.count = data_c[1]
                    }
                })
                return {
                    ...state,
                    cart_product:state.cart_product
                };
        default: 
            return state;
    }
}