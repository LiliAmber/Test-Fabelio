import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll, setLoading } from "../store/action/actionCreator";
import InputBar from "../components/InputBar";
import ProductList from "../components/ProductList";

export default function SearchPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchAll());
  }, []);

  const products = useSelector((state) => state.productReducer.all);
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
    <div className="container px-4 py-8 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <InputBar />
      {/* <ProductList /> */}
    </div>
  );
}
