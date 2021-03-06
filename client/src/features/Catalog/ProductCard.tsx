// Import React's Components
import React from 'react';
import { Link } from 'react-router-dom';

// Import Components
import { Product } from '../../app/Models/Product';

// Import Material-UI
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

interface Props {
    product: Product;
}

// Codes
export default function ProductCard({product}: Props) {
  return (
    <div>
        <Card >
            <CardHeader 
                avatar={
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{ 
                    sx: {
                        fontWeight: 'bold', 
                        color: 'primary.main',
                    }
                 }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                image={product.pictureUrl}
                title={product.name}
            />
            
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    Rp. {(product.price / 100).toFixed(3)}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Add to Chart</Button>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
            </CardActions>

        </Card>
    </div>
  )
}
