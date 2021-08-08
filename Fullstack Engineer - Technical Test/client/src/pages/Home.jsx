import React, { useEffect } from "react";
import { fetchProduct, setLoading } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import hero from "../assets/hero.svg";
import Card from "../components/Card";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchProduct());
  }, []);

  const products = useSelector((state) => state.productReducer.products);
  console.log(products, "<<<fetch di dashboard");
  const loading = useSelector((state) => state.productReducer.loading);
  const errors = useSelector((state) => state.productReducer.errors);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (errors) {
    return <h1>Errors ...</h1>;
  }
  return (
    <div className="w-screen">
      <div className="hero py-11 w-full">
        <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="hero-text col-span-6">
              <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-yellow-500 leading-tight">
                Looking for affordable stuff ? We can help you !
              </h1>
              <p className="text-gray-800 text-base leading-relaxed mt-6 mb-6 font-semibold">
                Your ultimate cute staff companion. Carries all the suppa cute
                and affordable stuff to suits your need.
              </p>
              <div className="flex space-x-5 mt-10 justify-center md:justify-start">
                <Link
                  to="/search"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white shadow-md px-3 py-2 rounded-lg flex items-center"
                >
                  Search Product
                </Link>
              </div>
            </div>

            <div className="hero-image col-span-6">
              <img src={hero} alt="tasty food" />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-10 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <h1 className="text-yellow-500 text-center py-4 font-extrabold -mt-3 text-4xl md:text-5xl my-5">
          Our Products
        </h1>
        <Card className="mt-6" data={products} />
      </div>
    </div>
  );
}
