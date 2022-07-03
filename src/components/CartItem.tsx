import React, {FC} from 'react'

// Data
import ItemData from '../data/items.json'

import{Box, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton} from '@mui/material'

// Context
import {useShoppingCart} from '../context/ShoppingCartContext'

// Utilities
import {formatCurrency} from '../utilities/formatCurrency'

type Props = {
    id: number,
    qty: number
}
export const CartItem: FC<Props> = ({id, qty}) => {
    
    const {removeItem} = useShoppingCart()

    const item =  ItemData.find(cart => cart.id === id)
    if(item == null) return null

    return (
        <ListItem alignItems="center">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.imgUrl} />
            </ListItemAvatar>
            <Box sx={{width: 300}}>
                <ListItemText primary={item.name} secondary={`Price: ${formatCurrency(item.price * qty || 0)}`} />
                <ListItemText secondary={`Qty: ${qty}`} />
            </Box>
            <IconButton sx={{ml:3}} color="error" onClick={() => removeItem(item.id)}>
                <span className="material-symbols-outlined">delete</span>
            </IconButton>
        </ListItem>
    )
}