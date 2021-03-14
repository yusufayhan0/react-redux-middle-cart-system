import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


export default function productReducer(state = initialState.products, action) {

    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS:
            return action.payload

        case actionTypes.DECREMENT_STOCK:
            return state.map(product => {//eğer gelen id değeri statedeki ürünlerden birinin id sine eşitse o ürünün stok değerini bir azalt

                if(product.id === action.payload){
                    product.unitsInStock -= 1
                }

                return product
            });

        case actionTypes.INCREMENT_STOCK:
            
            return state.map(product => {//eğer gelen id değeri statedeki ürünlerden birinin id sine eşitse o ürünün stok değerini bir artır
                //console.log(product)
                if(product.id === action.payload){
                    product.unitsInStock += 1
                }
                
                return product
            });

        default:
            return state;
    }
}






//#region sepete ekleyince stok azalacaksa kullanılabilir
/*
import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


export default function productReducer(state = initialState.products, action) {

    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS:
            return action.payload

        case actionTypes.DECREMENT_STOCK:
            return state.map(product => {//eğer gelen id değeri statedeki ürünlerden birinin id sine eşitse o ürünün stok değerini bir azalt

                if(product.id === action.payload){
                    product.unitsInStock -= 1
                }

                return product
            });

        case actionTypes.INCREMENT_STOCK:
            
            return state.map(product => {//eğer gelen id değeri statedeki ürünlerden birinin id sine eşitse o ürünün stok değerini bir artır
                //console.log(product)
                if(product.id === action.payload){
                    product.unitsInStock += 1
                }
                
                return product
            });

        default:
            return state;
    }
}



*/

//#endregion
