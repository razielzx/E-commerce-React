import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const dispatch = useDispatch();
    const purchases = useSelector(state => state.purchases);

    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, [])

    console.log(purchases)

    return (
        <div className='purchased-item'>
            <div className='header'>
                <h1>My Purchases</h1>
            </div>
            <div className='purchase-products-list'>
            {purchases.map(purchase => {
                return(
                    <div key={purchase.id}>
                        {purchase.cart?.products.map(productItem => (
                        <div key={productItem.id}>
                            
                            <div className='name-product'>
                                {productItem.title}
                            </div>

                            <div className='price-product'>
                                {productItem.price}
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