import React, { useEffect, useState } from 'react'
import { ProductCard } from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch,useSelector } from 'react-redux';

export const ProductAll = () => {
    
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    const productList = useSelector((state)=>state.product.productList);

    const getProducts = () => {
        let searchQuery = query.get('q') || "";
        dispatch(productAction.getProducts(searchQuery));
    }

    useEffect(()=>{
        getProducts();
    },[query])

    return (
        <div>
            <Container>
                <Row>
                    {productList && productList.map((menu) => (
                        <Col key={menu.id} lg={3}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
