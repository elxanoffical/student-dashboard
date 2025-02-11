import Link from "next/link";
import React from "react";

export default async function Products() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  console.log(data);

  return (
    <div className="p-10">
      <h1 className="text-2xl">Products</h1>
      <ul className="py-8">
        <li className="border-b-2 border-gray-400 py-3 grid grid-cols-6 items-center ">
          <p>Vendor</p>
          <p>Model</p>
          <p>Color</p>
          <p>Price</p>
          <p>Stock</p>
          <p>sellCount</p>
        </li>
        {data.map((product) => {
          return (
            <Link
              href="/dashboard/products"
              className="border-b-2 border-dashed border-gray-400 py-3 grid grid-cols-6 items-center justify-between"
              key={product.id}
            >
              <p>{product.vendor}</p>
              <p>{product.model}</p>
              <p>{product.color}</p>
              <p>{product.price}</p>
              <p>{product.stock}</p>
              <p>{product.sellCount}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
