import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="xl:mt-10 xl:flex gap-10 min-h-[80vh]">
      <div
        tabIndex={0}
        className="collapse w-full xl:w-48 rounded-none bg-orange-50 xl:bg-white xl:collapse-open"
      >
        <div className="collapse-title text-xl font-medium px-5 py-3 xl:px-0 xl:pt-0 xl:pb-1 min-h-fit flex items-center">
          <p>Navigation</p>
          <p className="w-full flex justify-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </p>
        </div>

        <div className="collapse-content border-t-2 px-0 xl:pt-0.5 bg-white">
          <Link
            href="/admin"
            className="hover:bg-orange-50 hover:text-orange-600 block p-4 pl-5 xl:p-2 xl:pl-0 hover:pl-5 xl:rounded-lg font-medium duration-300 border-b-2 xl:border-none"
          >
            - Dashboard
          </Link>
          <Link
            href="/admin/orders"
            className="hover:bg-orange-50 hover:text-orange-600 block p-4 pl-5 xl:p-2 xl:pl-0 hover:pl-5 xl:rounded-lg font-medium duration-300 border-b-2 xl:border-none"
          >
            - All Orders
          </Link>
        </div>
      </div>

      <div className="p-5 xl:p-0 w-full">{children}</div>
    </div>
  );
};

export default layout;
