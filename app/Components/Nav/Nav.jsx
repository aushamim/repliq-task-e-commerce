import Link from "next/link";
import React from "react";

const Nav = () => {
  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "All Products",
      route: "/products",
    },
    {
      name: "Profile",
      route: "/user/profile",
    },
    {
      name: "Admin",
      route: "/admin",
    },
    {
      name: "Cart",
      route: "/cart",
    },
    {
      name: "Login",
      route: "/user/login",
    },
  ];

  return (
    <nav className="drawer drawer-end">
      <input id="navbar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="flex gap-5 items-center p-3 xl:px-0">
          <div>
            <Link href="/" className="text-2xl font-semibold">
              Alu
            </Link>
          </div>

          <div className="flex-grow hidden xl:flex justify-end">
            {routes?.map((item) => (
              <Link
                key={routes?.indexOf(item)}
                href={item.route}
                className="hover:text-orange-500 duration-300 ml-3"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex-grow flex xl:hidden justify-end">
            <label htmlFor="navbar">
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
        <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
          {/* Sidebar content here */}
          {routes?.map((item) => (
            <li key={routes?.indexOf(item)}>
              <Link
                href={item.route}
                className="hover:text-orange-500 duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
