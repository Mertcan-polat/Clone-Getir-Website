import { useState, useEffect } from "react";
import Products from "api/products.json";
import ProductItem from "components/ui/ProductItem";
import Title from "./ui/Title";

export default function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <Title>Favoriler</Title>
      <div className="overflow-hidden rounded-lg grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0.1">
        {products &&
          products.map((product) => <ProductItem product={product} />)}
      </div>
    </div>
  );
}
