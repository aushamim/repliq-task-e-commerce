"use client";
import React from "react";
import { useProductsStore } from "../Hooks/store";
import Loader from "../Components/Loader/Loader";
import Product from "../Components/Product/Product";

const AllProducts = () => {
  const products = useProductsStore((state) => state.products);
  const loading = useProductsStore((state) => state.loading);
  return (
    <div className="mt-5 min-h-[80vh]">
      <h1 className="text-3xl text-center font-semibold border-b pb-2">
        All Products
      </h1>

      <div className="mt-5 xl:mt-10 grid grid-cols-2 xl:grid-cols-4 gap-7">
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
      </div>
    </div>
  );
};

export default AllProducts;
