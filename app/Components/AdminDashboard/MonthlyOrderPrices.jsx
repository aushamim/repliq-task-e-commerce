"use client";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MonthlyOrderPrices = () => {
  const data = [
    { day: 1, orders: 12, totalPrice: 437 },
    { day: 2, orders: 7, totalPrice: 953 },
    { day: 3, orders: 19, totalPrice: 245 },
    { day: 4, orders: 4, totalPrice: 632 },
    { day: 5, orders: 11, totalPrice: 798 },
    { day: 6, orders: 15, totalPrice: 349 },
    { day: 7, orders: 9, totalPrice: 689 },
    { day: 8, orders: 14, totalPrice: 521 },
    { day: 9, orders: 2, totalPrice: 402 },
    { day: 10, orders: 17, totalPrice: 863 },
    { day: 11, orders: 3, totalPrice: 176 },
    { day: 12, orders: 8, totalPrice: 715 },
    { day: 13, orders: 6, totalPrice: 589 },
    { day: 14, orders: 18, totalPrice: 234 },
    { day: 15, orders: 5, totalPrice: 471 },
    { day: 16, orders: 12, totalPrice: 437 },
    { day: 17, orders: 7, totalPrice: 953 },
    { day: 18, orders: 19, totalPrice: 245 },
    { day: 19, orders: 4, totalPrice: 632 },
    { day: 20, orders: 11, totalPrice: 798 },
    { day: 21, orders: 15, totalPrice: 349 },
    { day: 22, orders: 9, totalPrice: 689 },
    { day: 23, orders: 14, totalPrice: 521 },
    { day: 24, orders: 2, totalPrice: 402 },
    { day: 25, orders: 17, totalPrice: 863 },
    { day: 26, orders: 3, totalPrice: 176 },
    { day: 27, orders: 8, totalPrice: 715 },
    { day: 28, orders: 6, totalPrice: 589 },
    { day: 29, orders: 18, totalPrice: 234 },
    { day: 30, orders: 5, totalPrice: 471 },
  ];

  return (
    <div className="mt-16">
      <h1 className="my-5 text-xl font-semibold">Monthly Order Prices</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis dataKey="totalPrice" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalPrice"
            fill="#fb923c"
            activeBar={<Rectangle fill="#f97316" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyOrderPrices;
