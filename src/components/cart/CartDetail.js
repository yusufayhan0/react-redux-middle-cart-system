import { connect } from "react-redux"
import { Table, Button } from "reactstrap"
import { removeFromCart } from "../../redux/actions/cartActions"
import { incrementStock } from "../../redux/actions/productActions"

const CartDetail = (props) => {


    const deleteButtonClick = (cart) => {
        props.incrementStock(cart)
        props.removeFromCart(cart)
    }


    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>

                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Piece price</th>
                        <th>Count</th>
                        <th>Sepete Ekle</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {props.carts.map(cart =>
                        <tr key={cart.product.id}>
                            <th scope="row">{cart.product.id}</th>

                            <td>{cart.product.productName}</td>
                            <td>{cart.product.unitPrice}</td>
                            <td>{cart.product.unitPrice * cart.count}</td>
                            <td>{cart.count}</td>
                            <th><Button color="info" onClick={() => deleteButtonClick(cart)} >Sil</Button> </th>
                        </tr>
                    )}
                    <tr>
                        <td scope="row"></td>
                        <td><h3>Toplam</h3></td>
                        <td></td>
                        <td>
                            <h3>
                                {props.carts.map(cart => cart.count * cart.product.unitPrice)
                                    .reduce((acumulator, currentValue) => acumulator + currentValue, 0)
                                } TL
                            </h3>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}



const mapStateToProps = (state) => {

    return {
        carts: state.cartReducer
    }
}

export default connect(mapStateToProps, { removeFromCart, incrementStock })(CartDetail)