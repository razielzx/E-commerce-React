import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom';
import { buyCartThunk, getCartThunk } from '../store/slices/cart.slice'



const Sidebar = () => {

    //Sidebar button
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const handleShow = () => {
        const token = localStorage.getItem('token')
        if(token){
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
    },[]) 
    
    console.log(cart)
    return (
        <div>
            <Button variant="info" onClick={handleShow}>
                Cart
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
                        <div key={cartItem.id}>
                            <div onClick={() => navigate(`/product/${cartItem.id}`)} type={"button"}>
                                {cartItem.title}
                            </div>
                            <div>
                                {cartItem.price}
                            </div>
                            <div>
                                {cartItem.productsInCart.quantity}
                            </div>
                        </div>   
                        )
                    })}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Sidebar;