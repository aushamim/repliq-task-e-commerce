import CartIndicator from "@/app/Components/CartIndicator/CartIndicator";
import Link from "next/link";
import React from "react";

const OrderComplete = () => {
  return (
    <div className="mt-10 min-h-[80vh]">
      <CartIndicator page="order-complete" />

      <h1 className="text-2xl xl:text-5xl font-semibold text-center mt-10">
        Order Placed Successfully
      </h1>
      <div className="flex items-center justify-center">
        <Link href="/" className="btn mt-5">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderComplete;
