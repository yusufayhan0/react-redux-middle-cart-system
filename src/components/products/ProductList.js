import React, { Component, useEffect } from 'react'
import { connect } from "react-redux"
import { Badge, Button, ListGroup, ListGroupItem, Table } from 'reactstrap'
import { getPropduct,decrementStock } from "../../redux/actions/productActions"
import { addToCart } from "../../redux/actions/cartActions"
import alertify from "alertifyjs"
import { Link } from 'react-router-dom'


const ProductList = (props) => {

    useEffect(() => {
        props.getPropduct()
    }, [])

    const addToCart=(product)=>{
        if (product.unitsInStock!==0){
            props.decrementStock(product)
            props.addToCart(product)
        }
        else
            {alertify.error("Ürünün stoğu bitmiştir")}
    }

    return (
        <div>
            <h3>
            
                <Badge color="warning">Product</Badge>
                <Badge color="success">{props.currentCategory.categoryName}</Badge></h3>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>productName</th>
                        <th>unitPrice</th>
                        <th>Stock</th>
                        <th>Sepete Ekle</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product =>
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            
                            <td> <Link to={"/saveproduct/"+ product.id}>{product.productName}</Link> </td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <th><Button color="info" onClick={()=>addToCart(product)} >Ekle</Button> </th>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer,
        carts: state.cartReducer
    }
}



export default connect(mapStateToProps, { getPropduct ,addToCart,decrementStock})(ProductList)