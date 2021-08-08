import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../store/action/actionCreator";

export default function InputBar() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    dispatch(fetchSearch(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="productName"
        placeholder="Sofa 2 dudukan Vienna"
        className="px-3 py-3 placeholder-blueGray-300 tracking-wide text-blueGray-600 relative bg-white text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10 mb-6 rounded-xl"
        {...register("productName", { required: true })}
      />
      {errors.productName && (
        <span className="text-red-600">This field is required</span>
      )}
      <button
        className="bg-gray-600 text-gray-100 w-full p-4 rounded-xl tracking-wide
        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-800
        shadow-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
