import { Badge, Col, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, Row, UncontrolledDropdown } from "reactstrap"
import { connect } from "react-redux"
import { removeFromCart } from "../../redux/actions/cartActions"
import { incrementStock } from "../../redux/actions/productActions"
import { Link } from "react-router-dom"

const CartSummary = (props) => {

    const clickToDelete = (cart) => {
        props.incrementStock(cart)
        props.removeFromCart(cart)
        console.log("cart:",cart)
    }


    return (
        <div>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {/* ilk başta sadece countları dönen bir dizi oluşturduk map ile daha sonra bunları toplayacak olan reduce fonksiyonunu çağırdık */}
                    Sepet ({props.carts.map(cart => cart.count).reduce((accumulator, currentValue) => {
                        return accumulator + currentValue
                    }, 0)})
              </DropdownToggle>
                <DropdownMenu right>
                    {props.carts.length > 0 ? props.carts.map(cart =>
                        <DropdownItem key={cart.product.id}>
                            <Row>
                                <Col xs="10">
                                    {
                                        cart.product.productName.length > 22 ?
                                            cart.product.productName.substring(0, 23) + "..." :
                                            cart.product.productName
                                    }
                                    <Badge className="ml-1">{cart.count}</Badge>
                                </Col>
                                <Col xs="2"><Badge onClick={() => clickToDelete(cart)} color="danger">sil</Badge></Col>
                            </Row>


                        </DropdownItem>
                    )

                        : <h5 className="text-center">Sepetiniz Boş</h5>}

                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to={"/cart"}>Sepete Git</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        carts: state.cartReducer

    }
}



export default connect(mapStateToProps, { removeFromCart, incrementStock })(CartSummary)