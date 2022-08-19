import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getCategoryThunk, getProductsThunk, getSearchThunk } from '../store/slices/products.slice';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from 'react-router';
import ListGroup from 'react-bootstrap/ListGroup';
import titleImage from '../assets/logo.png'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import '../styles/home.css'

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("")
    const [categoryId, setCategoryId] = useState([])

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
        <div >
            <div className='header-title'>
                <img
                    src={titleImage}
                    alt="logo"
                    className='title-img' />
            </div>

            <div class="bottom-bar">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-6">
                            <div class="search">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    onChange={e => setSearchValue(e.target.value)}
                                    value={searchValue} />
                                <button
                                    onClick={() => dispatch(getSearchThunk(searchValue))}>
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Container className='container'>
                <Row>
                    <Col>
                    <Carousel variant="dark" className='img-container'>
                            <Carousel.Item interval={3000} className="img-item">
                                    <img
                                        className="d-block w-100"
                                        src={products[0]?.productImgs[0]}
                                        alt="First slide"
                                    />
                                <Carousel.Caption>
                                    <h3>{products[0]?.title}</h3>
                                    <p>{products[0]?.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item >
                            <Carousel.Item interval={3000} className="img-item">
                                <img
                                    className="d-block w-100"
                                    src={products[1]?.productImgs[0]}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>{products[1]?.title}</h3>
                                    <p>{products[1]?.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item  interval={3000} className="img-item">
                                <img
                                    className="d-block w-100"
                                    src={products[2]?.productImgs[0]}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>{products[2]?.title}</h3>
                                    <p>{products[2]?.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item  interval={3000} className="img-item">
                                <img
                                    className="d-block w-100"
                                    src={products[3]?.productImgs[0]}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>{products[3]?.title}</h3>
                                    <p>{products[3]?.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item  interval={3000} className="img-item">
                                <img
                                    className="d-block w-100"
                                    src={products[4]?.productImgs[0]}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>{products[4]?.title}</h3>
                                    <p>{products[4]?.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item  interval={3000} className="img-item">
                                <img
                                    className="d-block w-100"
                                    src={products[5]?.productImgs[0]}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>{products[5]?.title}</h3>
                                    <p>{products[5]?.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item  interval={3000} className="img-item">
                                <img
                                    className="d-block w-100"
                                    src={products[6]?.productImgs[0]}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>{products[6]?.title}</h3>
                                    <p>{products[6]?.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item  interval={3000} className="img-item">
                                <img
                                    className="d-block w-100"
                                    src={products[7]?.productImgs[0]}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>{products[7]?.title}</h3>
                                    <p>{products[7]?.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item  interval={3000} className="img-item">
                                <img
                                    className="d-block w-100"
                                    src={products[8]?.productImgs[0]}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>{products[8]?.title}</h3>
                                    <p>{products[8]?.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item  interval={3000} className="img-item">
                                <img
                                    className="d-block w-100"
                                    src={products[9]?.productImgs[0]}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>{products[9]?.title}</h3>
                                    <p>{products[9]?.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item  interval={3000} className="img-item">
                                <img
                                    className="d-block w-100"
                                    src={products[10]?.productImgs[0]}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>{products[10]?.title}</h3>
                                    <p>{products[10]?.price}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={3}>
                    <ListGroup variant="flush">
                            {categoryId.map((category) => (
                                <div
                                    key={category.id}
                                    onClick={() => dispatch(getCategoryThunk(category.id))}
                                    type='button'>
                                    <ListGroup.Item id='col-category'>
                                        {category.name} <i class="fa-solid fa-arrow-right"></i>
                                    </ListGroup.Item>
                                </div>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

            <div className='flex-container'>
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
        </div>
    );
};

export default Home;