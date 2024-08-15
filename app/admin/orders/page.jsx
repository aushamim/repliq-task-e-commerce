"use client";
import { useOrderStore } from "@/app/Hooks/store";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  const orders = useOrderStore((state) => state.orders.reverse());
  return (
    <div>
      <div className="text-xl font-semibold border-b-2 w-full pb-1">
        All Orders
      </div>
      {orders.length > 0 ? (
        <div className="mt-2 border rounded overflow-x-scroll xl:overflow-x-hidden">
          <div className="w-[150vw] xl:w-full grid grid-cols-6 gap-3 font-semibold px-3 py-2 text-xs xl:text-base border-b">
            <h3>ID</h3>
            <h3>Customer Name</h3>
            <h3>Email</h3>
            <h3>Phone No.</h3>
            <h3>Unique Products</h3>
            <h3>Total Price</h3>
          </div>

          {orders?.map((order) => (
            <div
              className="w-[150vw] xl:w-full grid grid-cols-6 gap-3 px-3 py-2 text-xs xl:text-sm border-t"
              key={orders.indexOf(order)}
            >
              <Link
                href={`/admin/orders/${order?.orderId}`}
                className="hover:text-orange-500 duration-300"
              >
                {order?.orderId}
              </Link>
              <h3>{order?.orderDetails?.name}</h3>
              <h3>{order?.orderDetails?.email}</h3>
              <h3>+880{order?.orderDetails?.phone}</h3>
              <h3>{order?.cart?.length}</h3>
              <h3>{order?.totalPrice} tk</h3>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="mt-2 text-2xl font-semibold">No Orders Yet</h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
