import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom';
import { buyCartThunk, getCartThunk } from '../store/slices/cart.slice'
import '../styles/sidebar.css'


const Sidebar = () => {

    //Sidebar button
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => {
        const token = localStorage.getItem('token')
        if (token) {
            setShow(true)
        } else {
            navigate('/login');
        }
    };

    //Cart Items
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    //console.log(cart)
    return (
        <div>
            <Button variant="danger" onClick={handleShow} className="button">
                <i className="fa-solid fa-cart-shopping"></i>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Items in cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <Button variant="success" onClick={() => dispatch(buyCartThunk())}>
                        Buy Cart
                    </Button>
                        {cart.map(cartItem => {
                            return (
                                <div 
                                    key={cartItem.id} 
                                    className='cart-item'>

                                    <h6 onClick={() => navigate(`/product/${cartItem.id}`)} type={"button"}>
                                        {cartItem.title}
                                    </h6>

                                    <h6>
                                        Price: {cartItem.price}
                                    </h6>

                                    <h6>
                                        Quantity: {cartItem.productsInCart.quantity}
                                    </h6>
                                </div>
                            )
                        })}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Sidebar;