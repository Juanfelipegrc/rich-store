import { typesCart } from "../types/typesCart";

export const cartReducer = (state = [], action) => {

    switch (action.type) {
        case typesCart.add:
            return[
                ...state,
                action.payload, 
            ]
        case typesCart.remove:
            return state.filter(product => product.id2 != action.payload)
            
        case typesCart.removeAll:
            return state = action.payload
        default:
            return state;
    }

}