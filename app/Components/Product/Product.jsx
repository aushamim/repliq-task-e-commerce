/* eslint-disable @next/next/no-img-element */
"use client";
import { useCartStore } from "@/app/Hooks/store";
import React from "react";

const Product = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      <div className="border border-gray-100 py-8 rounded hover:border-gray-50 hover:shadow-xl transition duration-300 relative">
        {parseFloat(product?.discount) > 0 ? (
          <p className="font-semibold text-xs px-2 py-1 text-lime-700 bg-lime-200 rounded-l-full absolute top-3 right-0">
            {parseFloat(product?.discount)}% Off
          </p>
        ) : (
          ""
        )}
        <img
          className="h-20 xl:h-40 mx-auto"
          src={product?.image}
          alt={product?.name}
        />
        <p className="uppercase mt-6 text-xs xl:text-sm font-medium text-center text-orange-500">
          {product?.category?.name}
        </p>
        <p className="mt-2 font-semibold text-center text-base xl:text-lg">
          {product?.name}
        </p>
        <p className="mt-2 font-semibold text-center text-xs xl:text-base">
          $
          {(
            parseFloat(product?.price) -
            (parseFloat(product?.price) * parseFloat(product?.discount)) / 100
          ).toFixed(2)}
          {parseFloat(product?.discount) > 0 ? (
            <>
              {" "}
              <span className="text-sm line-through text-gray-300">
                ${parseFloat(product?.price).toFixed(2)}
              </span>
            </>
          ) : (
            ""
          )}
        </p>

        <div className="mt-5 xl:mt-8 flex gap-5 items-center justify-center">
          <div className="tooltip" data-tip="Quick View">
            <button
              className="bg-slate-200 hover:bg-slate-300 p-2 rounded-full"
              onClick={() => {
                document
                  .getElementById(`product-quick-view-${product?.id}`)
                  .showModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="tooltip" data-tip="Add to Cart">
            <button
              className="bg-slate-200 hover:bg-slate-300 p-2 rounded-full"
              onClick={() => {
                addToCart(product);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div>
        <dialog id={`product-quick-view-${product?.id}`} className="modal">
          <div className="modal-box xl:w-1/2 max-w-5xl rounded-lg relative">
            <div className="p-3 xl:p-0 grid grid-cols-1 xl:grid-cols-2 gap-5 items-center">
              <div className="border rounded-lg max-h-96 p-5 overflow-hidden">
                <img
                  className="w-full h-full object-contain mx-auto"
                  src={product?.image}
                  alt={product?.name}
                />
              </div>
              <div className="">
                <p className="uppercase text-sm font-medium text-orange-500">
                  {product?.category?.name}
                </p>
                <p className="mt-2 font-semibold text-3xl">{product?.name}</p>
                <p className="mt-3 font-semibold text-xl">
                  {parseFloat(product?.discount) > 0 ? (
                    <>
                      {" "}
                      <span className="text-sm line-through text-gray-300">
                        ${parseFloat(product?.price).toFixed(2)}
                      </span>{" "}
                      <br />
                    </>
                  ) : (
                    ""
                  )}
                  $
                  {(
                    parseFloat(product?.price) -
                    (parseFloat(product?.price) *
                      parseFloat(product?.discount)) /
                      100
                  ).toFixed(2)}
                </p>
                <div className="mt-5 rating">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                </div>
                <div>
                  <button
                    className="mt-5 btn uppercase"
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                document.getElementById("product-quick-view-close").click();
              }}
            >
              ✕
            </button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button id="product-quick-view-close">close</button>
          </form>
        </dialog>
      </div>
      {/* Modal */}
    </div>
  );
};

export default Product;
