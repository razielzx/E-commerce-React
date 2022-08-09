import React, { useEffect, useState } from 'react';
import { getCategoryThunk, getProductsThunk, getSearchThunk } from '../store/slices/products.slice';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from 'react-router';
import '../styles/home.css'
import axios from 'axios';

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("")
    const [categoryId, setCategoryId] =useState([])

    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductsThunk());
    }, []);

    useEffect(() => {
        axios
        .get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/")
        .then((res) => setCategoryId(res.data.data.categories));
    }, []);

    //console.log(products)
    //console.log(searchValue)
    //console.log(categoryId)

    return (
        <div className='flex-container'>
            <h1>Home</h1>
            {categoryId.map((category) => (
                <div 
                    key={category.id} 
                    onClick={() => dispatch(getCategoryThunk(category.id))}
                    type='button'>
                    <div>
                        {category.name}
                    </div>
                </div>
            ))}
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    onChange={e => setSearchValue(e.target.value)}
                    value={searchValue} />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={() => dispatch(getSearchThunk(searchValue))}>Search</button>
            </div>
            {products.map((productItem) => (
                <div
                    key={productItem.id}
                    className='flex-item'
                >

                    <div className='title'>
                        {productItem.title}
                    </div>

                    <div className='img-container'>
                        <img
                            src={productItem.productImgs[0]}
                            alt=""
                            className='product-img'
                            onClick={() => navigate(`/product/${productItem.id}`)}
                            type='button' />
                    </div>

                    <div className='product-price'>
                        $ {productItem.price}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;