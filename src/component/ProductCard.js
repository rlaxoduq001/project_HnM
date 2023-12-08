import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({item}) => {

  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/productDetail/${item.id}`);
  }

  return (
    <div onClick={()=>showDetail()}>
        <img className='product_img'
            width={250} src={item.img} alt="상품이미지"/>
        <div>{item?.choice === true ? 'Conscious Choice':''}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new === true ? '신제품':''}</div>
    </div>
  )
}
