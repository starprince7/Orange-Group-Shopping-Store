import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProducts, selectProducts } from "@/store/productSlice/reducer";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, []);

  return (
    <div className="container my-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products &&
          products.map((product) => <Product key={product.id} {...product} />)}
      </div>
    </div>
  );
};

type Props = {
  title: string;
  image: string;
  price: string;
  id: string;
};
function Product({ title, image, price, id }: Props) {
  return (
    <Link href={`/details/${id}`}>
      <div className="relative group">
        <div className="h-96 w-84 rounded-2xl border grid content-center">
          <img src={image} alt="product" className="w-44 mx-auto" />
        </div>
        <div className="opacity-0 w-full group-hover:opacity-100 absolute h-40 pt-16 left-0 bottom-0 px-5 text-sm space-y-2 text-white bg-gradient-to-t from-gray-800 to-transparent transition-all duration-300 ease-in">
          <div className="">
            <span>{title}</span>
          </div>
          <div>${price}</div>
        </div>
      </div>
    </Link>
  );
}

export default Products;
