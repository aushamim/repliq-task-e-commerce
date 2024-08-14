"use client";
import React from "react";
import Product from "../Product/Product";
import { useProductsStore } from "@/app/Hooks/store";
import Loader from "../Loader/Loader";

const FeaturedProducts = () => {
  const products = useProductsStore((state) => state.products);
  const loading = useProductsStore((state) => state.loading);
  return (
    <>
      {loading ? (
        <div className="col-span-2 xl:col-span-4">
          <Loader />
        </div>
      ) : (
        <>
          {products.map((product) => (
            <Product key={product?.id} product={product} />
          ))}
        </>
      )}
    </>
  );
};

export default FeaturedProducts;
