import * as actionTypes from "./actionTypes"
import axios from "axios"


//cart dizisi bulunmadığı için post yapılmıyor eğer oluşturulursa ağaşıdaki bir kaç yeri değiştirerek yapabilirsin
// export const addToCart=(product)=>
//     (dispatch)=>{
//         axios.post("http://localhost:3000/products",{
//             ...product
//         })
//         .then(response=>dispatch({type:actionTypes.ADD_TO_CART,payload:product}))
//         .catch(err=>dispatch({type:actionTypes.ERROR,payload:err}))
//     }


//     export const removeFromCart=(productId)=>
//     (dispatch)=>{
//         axios.post("http://localhost:3000/products/"+productId)
//         .then(response=>dispatch({type:actionTypes.ADD_TO_CART,payload:product}))
//         .catch(err=>dispatch({type:actionTypes.ERROR,payload:err}))
//     }



export const addToCart = (product) =>{
    return { type: actionTypes.ADD_TO_CART, payload: product }
}

export const removeFromCart = (cart) =>
    ({ type: actionTypes.REMOVE_FROM_CART, payload: cart })