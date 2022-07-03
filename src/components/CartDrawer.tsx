import React from 'react'
// Data
import ItemData from '../data/items.json'

import {Box, Badge, IconButton, Drawer, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Divider} from '@mui/material'

// Context
import {useShoppingCart} from '../context/ShoppingCartContext'

// Utilities
import {formatCurrency} from '../utilities/formatCurrency'

export function CartDrawer () {
    const {cartQty,cartItems, cartDrawer, openCart, closeCart, removeItem} = useShoppingCart()

    const findItem = (id: number) => {
        return ItemData.find(item => item.id === id)
    }

    const CartList = (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {cartItems.map((item, index) => (
                <ListItem alignItems="center" key={index}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={findItem(item.id)?.imgUrl} />
                    </ListItemAvatar>
                    <Box sx={{width: 300}}>
                        <ListItemText primary={findItem(item.id)?.name} secondary={`Price: ${formatCurrency(findItem(item.id)?.price * item.qty || 0)}`} />
                        <ListItemText secondary={`Qty: ${item.qty}`} />
                    </Box>
                    <IconButton sx={{ml:3}} color="error" onClick={() => removeItem(item.id)}>
                        <span className="material-symbols-outlined">delete</span>
                    </IconButton>
                </ListItem>
            ))}
            <ListItem>
                <Typography variant="h5" sx={{flexGrow: 1}}>Total:</Typography>
                <Typography variant="h6">{formatCurrency(cartItems.reduce((old, item) => (findItem(item.id)?.price * item.qty) + old,0))}</Typography>
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