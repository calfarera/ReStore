// Import Material-UI
import { Grid } from '@mui/material';

// Import Components
import { Product } from "../../app/Models/Product";
import ProductCard from './ProductCard';

interface Props {
    products: Product[];
}

// Codes
export default function ProductList({products}: Props) {
  return (
    <div>
        <Grid container spacing={4}  >
            {products.map(product => (           
                <Grid item xs={3} key={product.id} >
                  <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    </div>
  )
}
