import React from "react";

const Nav = () => {
  return (
    <nav className="drawer drawer-end">
      <input id="navbar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="flex gap-5 bg-red-100 items-center p-3">
          <div className="text-2xl font-semibold">Alu</div>

          <div className="flex-grow hidden xl:flex justify-end">
            <a href="/">Home</a>
            <a href="/">All Products</a>
            <a href="/">Profile</a>
            <a href="/">Admin</a>
            <a href="/">Cart</a>
            <a href="/">Login</a>
          </div>

          <div className="flex-grow flex xl:hidden justify-end">
            <label htmlFor="navbar" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="navbar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
