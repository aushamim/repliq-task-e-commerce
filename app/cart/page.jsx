"use client";
import React from "react";
import CartIndicator from "../Components/CartIndicator/CartIndicator";
import { useCartStore } from "../Hooks/store";
import Link from "next/link";

const Cart = () => {
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore((state) => state);

  return (
    <div className="mt-10 min-h-[80vh]">
      <CartIndicator page="cart" />

      {cart?.length > 0 ? (
        <>
          <div className="mt-8 xl:mt-14 border rounded overflow-x-scroll xl:overflow-x-hidden">
            <div className="w-[180vw] xl:w-full grid grid-cols-8 gap-3 uppercase font-semibold text-center border-b p-3 text-xs xl:text-base">
              <h3 className="">image</h3>
              <h3 className="col-span-2 text-start">Product Name</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Discount</h3>
              <h3>Total</h3>
              <h3>Action</h3>
            </div>
            <div>
              {cart?.map((cart_item) => (
                <div
                  key={cart_item?.product?.id}
                  className="w-[180vw] xl:w-full grid grid-cols-8 gap-3 p-3 items-center text-xs xl:text-base"
                >
                  <div className="p-2 border rounded">
                    <img
                      className="max-h-28 mx-auto"
                      src={cart_item?.product?.image}
                      alt={cart_item?.product?.name}
                    />
                  </div>
                  <div className="col-span-2 font-semibold">
                    {cart_item?.product?.name}
                  </div>
                  <div className="font-semibold text-center">
                    {cart_item?.product?.price} tk
                  </div>
                  <div className="font-semibold">
                    <div className="flex items-center border w-1/2 mx-auto pl-3 rounded">
                      <p className="flex-grow">{cart_item?.quantity}</p>
                      <div className="flex flex-col items-center justify-center">
                        <button
                          className="pr-2 hover:text-lime-500 duration-300"
                          onClick={() => {
                            increaseQuantity(cart_item?.product);
                          }}
                        >
                          +
                        </button>
                        <button
                          className="pr-2 hover:text-lime-500 duration-300"
                          onClick={() => {
                            if (cart_item?.quantity > 1) {
                              decreaseQuantity(cart_item?.product);
                            }
                          }}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="font-semibold text-center">
                    {cart_item?.product?.discount}%
                  </div>
                  <div className="font-semibold text-center">
                    <p>
                      {(
                        (cart_item?.product?.price -
                          (cart_item?.product?.price *
                            cart_item?.product?.discount) /
                            100) *
                        cart_item?.quantity
                      ).toFixed(2)}{" "}
                      tk
                      {cart_item?.product?.discount > 0 ? (
                        <>
                          {" "}
                          <span className="text-sm line-through text-gray-300">
                            {(
                              cart_item?.product?.price * cart_item?.quantity
                            ).toFixed(2)}{" "}
                            tk
                          </span>
                        </>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="btn"
                      onClick={() => {
                        removeFromCart(cart_item);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 mb-28 flex flex-col items-center xl:items-end">
            <div className="w-11/12 xl:w-1/4 border rounded">
              <div className="grid grid-cols-2 gap-3 px-4 py-3 font-semibold border-b">
                <p>Subtotal</p>
                <p>{totalPrice} tk</p>
              </div>
              <div className="grid grid-cols-2 gap-3 px-4 py-3 font-semibold border-b">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="grid grid-cols-2 gap-3 px-4 py-3 font-semibold">
                <p>Total</p>
                <p>{totalPrice} tk</p>
              </div>
            </div>
            <div className="mt-5 w-11/12 xl:w-1/4">
              <Link
                href="/cart/checkout"
                className="btn btn-success w-full uppercase text-white tracking-wide"
              >
                Checkout
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="p-10">
          <img
            className="w-16 mx-auto"
            src="/assets/images/food.png"
            alt="no foods"
          />
          <p className="text-center mt-2">No product in the cart</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
