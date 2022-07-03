import React from 'react'

import {Badge, IconButton, Drawer, List, ListItem, Typography} from '@mui/material'

// Custom Components
import {CartItem} from './CartItem'

// Context
import {useShoppingCart} from '../context/ShoppingCartContext'

// Data
import ItemData from '../data/items.json'

// Utilities
import {formatCurrency} from '../utilities/formatCurrency'

export function CartDrawer () {
    const {cartQty,cartItems, cartDrawer, openCart, closeCart} = useShoppingCart()

    const CartList = (
        <List sx={{ width: '100%', maxWidth: {xs: '100vw',md: 360}, bgcolor: 'background.paper' }}>
            <ListItem>
                <Typography variant="h4" sx={{flexGrow: 1}}>Cart</Typography>
                <IconButton onClick={closeCart}><span className="material-symbols-outlined">close</span></IconButton>
            </ListItem>
            {cartItems.map((item, index) => (
                <CartItem {...item} key={index} />
            ))}
            <ListItem>
                <Typography variant="h5" sx={{flexGrow: 1}}>Total:</Typography>
                <Typography variant="h6">{formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                        const item =  ItemData.find(cart => cart.id === cartItem.id)
                        if(item == null) return total
                        return total + item.price * cartItem.qty
                    }, 0)
                )}</Typography>
            </ListItem>
        </List>
    )
    return (
        <>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={openCart}
                color="inherit"
            >
                <Badge badgeContent={cartQty} color="error">
                    <span className="material-symbols-outlined">notifications</span>
                </Badge>
            </IconButton>
            <Drawer
            anchor='right'
            open={cartDrawer}
            onClose={() => closeCart()}
            >
                {CartList}
            </Drawer>
        </>
    )
}