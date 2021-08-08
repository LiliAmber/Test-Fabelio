import React from "react";

// const ProductList = (props) => {
//   return (
//     <>
//       {productList.map((data, index) => {
//         if (data) {
//           return (
//             <div key={data.name}>
//               <h1>{data.name}</h1>
//             </div>
//           );
//         }
//         return null;
//       })}
//     </>
//   );
// };

// export default ProductList;
export default function ProductList(props) {
  function priceFormat(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  }
  return (
    <div className="bg-yellow-100 shadow-md  rounded-3xl p-4">
      <pre>{props}</pre>
      {/* <div className="hero py-8 w-full">
    <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
      <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="hero-image col-span-6">
          <img src={props.data.image} alt="affordable stuff" />
        </div>

        <div className="hero-text col-span-6">
          <h2 class="text-sm title-font text-gray-500 tracking-widest mb-3">
            PRODUCT NAME
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-3">
            {props.data.productName}
          </h1>
          <span
            className="px-2
          py-1
          font-semibold
          leading-tight
          text-red-700 bg-red-100
          rounded-full
          "
          >
            {priceFormat(props.data.price)}
          </span>
          <div className="flex mt-4 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <span className="mr-3">Colours: {props.data.colours}</span>
            <span className="mr-3">Dimension: {props.data.dimension}</span>
            <span className="mr-3">Material: {props.data.material}</span>
          </div>

          <div className="flex space-x-10 mt-8 justify-center md:justify-end">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white shadow-md px-3 py-2 rounded-lg flex items-center">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> */}
    </div>
  );
}
