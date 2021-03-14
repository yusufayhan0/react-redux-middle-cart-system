import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getCategories } from "../../redux/actions/categoryActions"
import { saveProduct } from "../../redux/actions/productActions"
import ProductDetail from "./ProductDetail"

const AddOrUpdateProduct = ({
    products,
    categories,
    getProducts,
    getCategories,
    history,
    saveProduct,
    ...props//burada mapToState ile gelen verilerde bulunuyor
}) => {

    const [product, setProduct] = useState({ ...props.product })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (categories.length === 0) {
            getCategories()
        }
        setProduct({ ...props.product })
    }, [props.product])

    function handleChange(event) {
        const { name, value } = event.target
        console.log(name, value)
        setProduct(previousProduct => {

            return {
                ...previousProduct,
                [name]:
                    name === "categoryId"
                        ? parseInt(value, 10)//onluk sayı değerini kullan tabanın 10 olsun 
                        : value

            }
        })

        //validate(name, value)

    }

    const validate = (name, value) => {
        if (name==="productName"&&value === "")
            setErrors(previousErrors => ({
                ...previousErrors,
                productName: "ürün ismi olmalıdır",
            }))

        else{
            setErrors(previousErrors => ({
                ...previousErrors,
                productName: "",
            }))
        }
        
    }

    function handleSave(event) {
        event.preventDefault();
        saveProduct(product).then(() => (
            history.push("/")
        ))
    }

    return (
        <ProductDetail
            product={product}//mapStateToProps içindeki product
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
            errors={errors}
        />
    )
}


export function getPropductById(products, productId) {
    let product = products.find(product => product.id == productId) || null
    return product
}

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.productId
    const product = productId && state.productListReducer.length > 0
        ? getPropductById(state.productListReducer, productId)
        : {}
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}



export default connect(mapStateToProps, { saveProduct, getCategories })(AddOrUpdateProduct)