// Import React's Components
import { useState, useEffect } from "react";

// Import API
import ProductList from "./ProductList";
import LoadingComponent from "../../app/Layout/LoadingComponent";
import Agent from "../../app/API/Agent";
import { Product } from "../../app/Models/Product";

// Codes
export default function Catalog() {
  // State Conditions
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="Loading Products" />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
