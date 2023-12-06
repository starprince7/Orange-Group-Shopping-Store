import React from "react";

type Props = {
  name: string;
  image: string;
  price: number;
};
const Product = ({}: Props) => {
  return <div>Products</div>;
};

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.name} {...product} />
      ))}
    </div>
  );
};

const products = [
  {
    name: "Samsung Mobile Phone",
    image: "",
    price: 100,
  },
];

export default Products;
