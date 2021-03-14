import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

//kayıt edilen veya güncellenen verinin tekrar döndürüldüğü yapıda reducer 
//kullanılır eğer ihtiyaç yoksa kullanılmayabilir
export default function saveProductReducer(state = initialState.saveProduct, action) {
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload
        default:
            return state
    }
}