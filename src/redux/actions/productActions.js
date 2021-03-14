import * as actionTypes from "./actionTypes"
import axios from "axios"
import alertify from "alertifyjs"


export const getPropduct = (categoryId) =>
    (dispatch) => {
        let url;
        if (categoryId)
            url = `http://localhost:3000/products/?categoryId=${categoryId}`;
        else
            url = "http://localhost:3000/products";
        axios.get(url)
            .then(response => dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: response.data }))
            .catch(err => dispatch({ type: actionTypes.ERROR, payload: err }))
    }

export const createProductSuccess = (product) => {
    return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product }
}

export const updateProductSuccess = (product) => {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product }
}

export const saveProductApi = (product) => {
    return fetch("http://localhost:3000/products/" + (product.id || ""), {
        method: product.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product)
    })
        .then(handleResponse)
        .catch(handleError)

}

export const saveProduct = (product) =>
    (dispatch) =>
        saveProductApi(product).then(saveProduct => {
            product.id
                ? dispatch(updateProductSuccess(saveProduct))
                : dispatch(createProductSuccess(saveProduct))
        })
        .catch(error=>{throw error})

export const handleResponse= async(response)=>{
    if(response.ok){
        return response.json()
    }
    const error=await response.text();
    throw new Error(error)
}

export const handleError=(error)=>{
    console.error(error)
    throw error;
}




export const decrementStock = (product) =>
    (dispatch) => {
        if (product.unitsInStock !== 0) {
            axios.put("http://localhost:3000/products/" + product.id, {
                ...product, unitsInStock: product.unitsInStock - 1
            })
                .then(response => dispatch({ type: actionTypes.DECREMENT_STOCK, payload: product.id }))
                .catch(err => dispatch({ type: actionTypes.ERROR, payload: err }))
        }
        else { alertify.error("Ürünün stoğu bitmiştir") }
    }


export const incrementStock = (cart) =>
    (dispatch) => {
        console.log("action: ", cart)
        axios.put("http://localhost:3000/products/" + cart.product.id, {
            ...cart.product, unitsInStock: cart.product.unitsInStock + 1
        })
            .then(response => dispatch({ type: actionTypes.INCREMENT_STOCK, payload: cart.product.id }))
            .catch(err => dispatch({ type: actionTypes.ERROR, payload: err }))
    }