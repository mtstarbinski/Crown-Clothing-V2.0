import React from 'react'
import { CartItemContainer, Image, ItemDetails, Name } from './CartItem.style'

const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  
  return (
    <CartItemContainer>
        <Image src={imageUrl} alt='item' />
        <ItemDetails>
            <Name>{name}</Name>
            <span>{quantity} x ${price}</span>
        </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem