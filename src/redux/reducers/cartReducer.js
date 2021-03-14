import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


//cart: [...state.cart, action.payload]
export default function cartReducer(state = initialState.cart, action) {
    
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let newItem
            let addItem = state.find(cart => cart.product.id === action.payload.id)
            if (addItem) {
                newItem={...addItem}
                newItem.count += 1
                newItem.product.unitsInStock -= 1
                console.log(state)
                addItem.count=newItem.count
                
                return [...state]
            }
                        
            newItem = { product: {...action.payload}, count: 1 }
            newItem.product.unitsInStock-=1
            return [...state,newItem]

        case actionTypes.REMOVE_FROM_CART:
            let newDeleteItem
            var deleteItem = state.find(cart => cart.product.id === action.payload.product.id)
            if(deleteItem.count>1){
                //newDeleteItem={...deleteItem}
                deleteItem.count-=1
                deleteItem.product.unitsInStock+=1
                newDeleteItem=state.find(cart => cart.product.id === action.payload.product.id)
                newDeleteItem.count=deleteItem.count
                newDeleteItem.product.unitsInStock=deleteItem.product.unitsInStock
                return [...state]
            }
            return [...state.filter(cart=>cart.product.id!==action.payload.product.id)]

        default:
            return state;
    }
}

