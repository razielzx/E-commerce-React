import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import '../styles/purchases.css'

const Purchases = () => {

    const dispatch = useDispatch();
    const purchases = useSelector(state => state.purchases);

    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, [])

    //console.log(purchases)

    return (
        <div className='purchased-item-container'>
            <div className='header'>
                <h1>My Purchases</h1>
            </div>
            <div className='container'>
            {purchases.map(purchase => {
                return(
                    <div key={purchase.id} className='purchased-products-list'>
                        <h6 className='item-date'>
                            {purchase.createdAt}
                        </h6>
                        {purchase.cart?.products.map(productItem => (
                        <div key={productItem.id}>
                            
                            <div className='purchased-item'>
                                <h6 className='title-product'>
                                    {productItem.title}
                                </h6>

                                <h6 className='price-product'>
                                    Price: {productItem.price}
                                </h6>

                                <h6 className='price-quantity'>
                                    Quantity: {productItem.productsInCart.quantity}
                                </h6>
                            </div>
                        </div>
                        ))}
                    </div>
                )
            })} 
            </div>
        </div>
    );
};

export default Purchases;