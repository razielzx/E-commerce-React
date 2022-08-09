import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductDetail = () => {
    const allProducts = useSelector((state) => state.products);
    const [productDetail, setProductDetail] = useState({});
    const [suggProducts, setSuggProducts] = useState([]);

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

    return (
        <div>
            <h1>{productDetail?.title}</h1>
            <img src={productDetail?.productImgs?.[0]} alt="" />
            <p>{productDetail?.description}</p>
            <div>
                <h1>Related Products</h1>
                <div>
                    {suggProducts.map((productItem) => (
                        <div 
                            key={productItem.id}
                            onClick={() => navigate(`/product/${productItem.id}`)}>
                            <div>
                                {productItem.title}
                            </div>
                            
                            <div>
                                <img src={productItem.productImgs} alt="" type='button' />
                            </div>

                            <div>
                                 $ {productItem.price}
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;