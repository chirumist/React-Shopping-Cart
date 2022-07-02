// Library
import React, {FC, useState, memo} from 'react'

// Ui Components
import {Grid, Box, Card, CardMedia, CardContent, CardActions, Button , Typography} from '@mui/material'

// Custom Components
import {QtyButton} from './QtyButton'

// Utilities
import {formatCurrency} from '../utilities/formatCurrency'

// Context
import {useShoppingCart} from '../context/ShoppingCartContext'

interface Props {
    id: number,
    imgUrl: string,
    name: string,
    price: number,
}

export const ProductCard: FC<Props> = (props) => {
    const {
        getItemQuantity,
        increaseItemQuantity, 
        decreaseItemQuantity,
        removeItem
    } = useShoppingCart()
    const qty = getItemQuantity(props.id)
    return (
        <Card variant="outlined">
            <CardMedia
            component="img"
            height="300"
            loading="lazy"
            image={props.imgUrl}
            alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="h6" color="text.secondary" component="div" sx={{mb: 3}}>
                    {formatCurrency(props.price)}
                </Typography>
                {qty !== 0 ? (
                    <Box sx={{textAlign: 'center'}}>
                        <Grid container>
                            <Grid item xs={12}>
                                <QtyButton value={qty} onAdd={() => increaseItemQuantity(props.id)} onReamove={() => decreaseItemQuantity(props.id)}></QtyButton>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="error" onClick={() => removeItem(props.id)}>Remove</Button>
                            </Grid>
                        </Grid>
                    </Box>
                ) : (
                    <CardActions sx={{justifyContent: 'center'}} >
                        <Button onClick={() => increaseItemQuantity(props.id)} variant="outlined" color="primary" size="small">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            Add To Cart
                        </Button>
                    </CardActions>
                )}
            </CardContent>
        </Card>
    )
}
