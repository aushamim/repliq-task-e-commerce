import React from "react";

const AllCounts = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
      <div className="min-h-28 xl:min-h-36 bg-green-100 rounded-lg py-3 px-5 flex flex-col justify-end relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-16 absolute top-1 left-1 stroke-green-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
        <p className="text-end z-10 text-3xl xl:text-6xl font-bold text-green-600">
          125
        </p>
        <p className="text-sm xl:text-lg text-end text-green-600">
          Orders Today
        </p>
      </div>

      <div className="min-h-28 xl:min-h-36 bg-purple-100 rounded-lg py-3 px-5 flex flex-col justify-end relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-16 absolute top-1 left-1 stroke-purple-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
        <p className="text-end z-10 text-3xl xl:text-6xl font-bold text-purple-600">
          12378
        </p>
        <p className="text-sm xl:text-lg text-end text-purple-600">
          Orders Last Month
        </p>
      </div>

      <div className="min-h-28 xl:min-h-36 bg-orange-100 rounded-lg py-3 px-5 flex flex-col justify-end relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-16 absolute top-0 left-2 stroke-orange-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          />
        </svg>
        <p className="text-end z-10 text-3xl xl:text-6xl font-bold text-orange-600">
          253k<span className="text-xl xl:text-4xl"> Tk</span>
        </p>
        <p className="text-sm xl:text-lg text-end text-orange-600">
          Total Earnings
        </p>
      </div>
    </div>
  );
};

export default AllCounts;
