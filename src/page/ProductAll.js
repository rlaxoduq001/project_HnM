import React, { useEffect, useState } from 'react'
import { ProductCard } from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ProductAll = () => {
    
    const [productList,setProductList] = useState([]);

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async () => {
        let url = `http://localhost:3004/products`;
        let response = await fetch(url)
        let data = await response.json();
        setProductList(data);
    }

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu) => (
                        <Col key={menu.id} lg={3}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
