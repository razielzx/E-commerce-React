import React, { useEffect, useState } from 'react';
import swal from '@sweetalert/with-react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate, useParams } from 'react-router-dom';
import { addCartThunk } from '../store/slices/cart.slice';
import { getProductsThunk } from '../store/slices/products.slice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import '../styles/productdetail.css'

const ProductDetail = () => {
    const allProducts = useSelector((state) => state.products);
    const [productDetail, setProductDetail] = useState({});
    const [suggProducts, setSuggProducts] = useState([]);
    const [quantity, setQuantity] = useState(1)

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [])

    useEffect(() => {
        const productInfo = allProducts.find((productItem) => productItem.id === Number(id));
        setProductDetail(productInfo);

        const fltdProducts = allProducts.filter(productItem => productItem.category.id === productInfo.category.id)
        setSuggProducts(fltdProducts)
        //console.log(fltdProducts)
    }, [allProducts, id])

    //console.log(allProducts)
    //console.log(suggProducts)

    //Add product function & quantity
    const addItemToCart = () => {
        const product = {
            id: productDetail.id,
            quantity
        }
        dispatch(addCartThunk(product));
        swal(<h1>Product added to Cart</h1>)
        console.log(product);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
    };

    return (
        <div>
            <Container className='container'>
                <Row>
                    <Col>
                        <div className='product-title'>
                            <h1>{productDetail?.title}</h1>
                        </div>

                        <div className='product-img'>
                            <img src={productDetail?.productImgs?.[0]} alt={productDetail?.title} />
                        </div>
                        <div className='product-price'>
                            <h3 >{productDetail?.price}</h3>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className='product-btn d-flex flex-column'>
                            <button onClick={increaseQuantity}>+</button>
                            <div className='quantity d-flex justify-content-center'>
                                {quantity}
                            </div>
                            <button onClick={decreaseQuantity}>-</button>
                            <button
                                className='add-btn'
                                onClick={addItemToCart}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}>
                                Add product
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <div className='container'>
                <div className='product-description'>
                    <p>{productDetail?.description}</p>
                </div>
            </div>

            <h1 className='related-products'>Related Products</h1>
            <div className='container'>
                <div>
                    {suggProducts.map((productItem) => (
                        <div
                            className='related-products-container'
                            key={productItem.id}
                            onClick={() => navigate(`/product/${productItem.id}`)}>
                            <h6 className='prd-realted-title'>
                                {productItem.title}
                            </h6>

                            <div className='prd-realted-img'>
                                <img src={productItem.productImgs} alt="" type='button' />
                            </div>

                            <h6 className='prd-realted-price'>
                                $ {productItem.price}
                            </h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;