"use client";
import { useParams } from "next/navigation";
import React from "react";

const OrderDetails = () => {
  const params = useParams();
  return <div>Order ID: {params.id} </div>;
};

export default OrderDetails;
