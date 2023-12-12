import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { productAction } from '../redux/actions/productAction';
import { useSelector } from 'react-redux';

export const ProductDetail = () => {

  let {id} = useParams();
  // const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const product = useSelector((state)=>state.product.selectedItem);
 
  useEffect(() => {
    getProductDetail();
  },[]);

  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  }
  
  const containerStyle = {
    flexBasis: '40%',
    display: 'flex',
    justifyContent: 'space-evenly',
  };
  
  return (
    <div>
      <Container>
        <Row>
          <Col style={containerStyle}>
            <img width={350} src={product?.img} alt="상품이미지"/>
          </Col>
          <Col style={{ flexBasis: '60%' }}>
            <div><h1>{product?.title}</h1></div>
            <div><h2>₩{product?.price}</h2></div>
            {product?.choice === true ?
              <div>Conscious Choice</div> :''
            }

          <Form.Select aria-label="Default select example" style={{ width: "30%", margin: "10px 0px 10px 0px" }}>
            {product?.size.map((item, idx) => (
              <option key={idx} value={idx}>
                {item}
              </option>
            ))}
          </Form.Select>

          <Button style={{ width: "100%" }} variant="primary">구매</Button>{' '}
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}