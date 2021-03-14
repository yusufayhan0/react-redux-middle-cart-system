import React, { Component, useEffect } from 'react'
import { connect } from "react-redux"
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import { changeCategory, getCategories } from "../../redux/actions/categoryActions"
import { getPropduct } from "../../redux/actions/productActions"

let additem = [
    {
        product: {
            id: 2,
            name: "sasdasd",
            stok: 10
        },
        count: 0
    },
    {
        product: {
            id: 2,
            name: "sasdasd",
            stok: 10
        },
        count: 0
    },
    {
        product: {
            id: 2,
            name: "sasdasd",
            stok: 10
        },
        count: 0
    },
    {
        product: {
            id: 2,
            name: "sasdasd",
            stok: 10
        },
        count: 0
    }
]

let deneme={
    product: {
        id: 2,
        name: "sasdasd",
        stok: 10
    },
    count: 0
}

//console.log([...additem,deneme])

const CategoryList = (props) => {


    useEffect(() => {
        props.getCategories()
    }, [])

    const categorySelect = (category) => {
        props.changeCategory(category)
        props.getPropduct(category.id)
    }

    return (
        <div>
            <h3><Badge>Categories</Badge></h3>

            <ListGroup>

                {props.categoryList.map(category =>
                    <ListGroupItem active={category.id === props.currentCategory.id} onClick={() => categorySelect(category)} key={category.id}>{category.categoryName}</ListGroupItem>
                )}

            </ListGroup>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentCategory: state.changeCategoryReducer,
        categoryList: state.categoryListReducer
    }
}



export default connect(mapStateToProps, { getCategories, changeCategory, getPropduct })(CategoryList)