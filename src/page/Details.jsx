import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Details = ({products}) => {
 const {id} = useParams()
  return (
    <Cart> 
      <p> {products[id-1].title}</p> 
      
      </Cart>
  )
}

export default Details

const Cart = styled.div`
   margin:auto;
    width: 500px;
    list-style: none;
    margin-top:50px;
    padding:50px;
    background-color:white;

`