import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <main className="p-5 xl:p-0">
      {/* Hero Section */}
      <div className="xl:mt-10 xl:pt-24 p-7 xl:px-20 w-full min-h-32 xl:min-h-[35rem] bg-[url(/assets/images/hero.png)] bg-no-repeat bg-cover rounded-lg">
        <p className="text-xs xl:text-base font-semibold text-orange-500 uppercase">
          Welcome to
        </p>
        <h1 className="text-4xl xl:text-8xl font-bold my-2 xl:my-5 xl:-ml-2">
          Alu Store
        </h1>
        <h3 className="text-xs xl:text-xl mb-5 xl:mb-16">
          Get up to{" "}
          <span className="text-lg xl:text-3xl font-semibold text-orange-600">
            40% Off
          </span>{" "}
          <br className="inline xl:hidden" />
          on various products.
        </h3>
      </div>
      {/* Hero Section */}

      {/* Products Section */}
      <div className="mt-10 xl:mt-16">
        <div>
          <h1 className="text-xl xl:text-5xl font-bold text-center">
            Featured Products
          </h1>
          <span className="w-20 h-1 bg-orange-300 block mx-auto mt-2"></span>
        </div>

        <div className="mt-5 xl:mt-10 grid grid-cols-2 xl:grid-cols-4 gap-7">
          <FeaturedProducts />
        </div>
      </div>
      {/* Products Section */}
    </main>
  );
}
