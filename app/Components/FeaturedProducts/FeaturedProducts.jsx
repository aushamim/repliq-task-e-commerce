"use client";
import React from "react";
import Product from "../Product/Product";
import { useProductsStore } from "@/app/Hooks/store";

const FeaturedProducts = () => {
  const products = useProductsStore((state) => state.products);
  return (
    <>
      {products.map((product) => (
        <Product key={product?.id} product={product} />
      ))}
    </>
  );
};

export default FeaturedProducts;
