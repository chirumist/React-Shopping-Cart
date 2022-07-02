// Library
import React from 'react'

// Data
import ItemData from '../data/items.json'

// Ui Components
import {Box,Grid} from '@mui/material'

// Custom Components
import {ProductCard} from '../components/ProductCard'

export function Store () {
    return (
        <Box>
            <Grid container spacing={3}>
                {ItemData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={item.id}>
                        <ProductCard {...item}></ProductCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}