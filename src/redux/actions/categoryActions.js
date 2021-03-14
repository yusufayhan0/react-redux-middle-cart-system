import * as actionTypes from "./actionTypes"
import axios from "axios"

export const changeCategory=(category)=>{
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}
}


export const getCategories=()=>
    (dispatch)=>{
        axios.get("http://localhost:3000/categories")
        .then(response=>
            dispatch({type:actionTypes.GET_CATEGORIES_SUCCESS,payload:response.data})
        )
        .catch(err=>dispatch({type:actionTypes.ERROR,payload:err}))
    }


   