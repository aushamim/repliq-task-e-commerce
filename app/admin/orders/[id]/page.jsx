"use client";
import { useOrderStore } from "@/app/Hooks/store";
import { useParams } from "next/navigation";
import React from "react";

const OrderDetails = () => {
  const params = useParams();
  const order = useOrderStore((state) =>
    state.orders.find((order) => order.orderId == params.id)
  );
  console.log(order);
  return (
    <div>
      <div className="text-xl font-semibold border-b-2 w-full pb-1">
        Order Details - {params.id}
      </div>

      <div className="mt-5 border rounded overflow-x-scroll xl:overflow-x-hidden">
        <div className="w-[180vw] xl:w-full grid grid-cols-7 gap-3 uppercase font-semibold text-center border-b px-3 py-2 text-xs xl:text-base">
          <h3 className="">image</h3>
          <h3 className="col-span-2 text-start">Product Name</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Discount</h3>
          <h3>Total</h3>
        </div>

        {order?.cart?.map((cart_item) => (
          <div
            key={cart_item?.product?.id}
            className="w-[180vw] xl:w-full grid grid-cols-7 gap-3 p-3 items-center text-xs xl:text-base"
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
            <div className="font-semibold text-center">
              {cart_item?.quantity}
            </div>
            <div className="font-semibold text-center">
              {cart_item?.product?.discount}%
            </div>
            <div className="font-semibold text-center">
              <p>
                {(
                  (cart_item?.product?.price -
                    (cart_item?.product?.price * cart_item?.product?.discount) /
                      100) *
                  cart_item?.quantity
                ).toFixed(2)}{" "}
                tk
                {cart_item?.product?.discount > 0 ? (
                  <>
                    <br />
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
          </div>
        ))}
      </div>

      <div className="mt-5 mb-28 flex flex-col items-center xl:items-end">
        <div className="w-11/12 xl:w-1/4 border rounded">
          <div className="grid grid-cols-2 gap-3 px-4 py-3 font-semibold border-b">
            <p>Subtotal</p>
            <p>{order?.totalPrice} tk</p>
          </div>
          <div className="grid grid-cols-2 gap-3 px-4 py-3 font-semibold border-b">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="grid grid-cols-2 gap-3 px-4 py-3 font-semibold">
            <p>Total</p>
            <p>{order?.totalPrice} tk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
