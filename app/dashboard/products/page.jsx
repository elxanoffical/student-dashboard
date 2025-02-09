import React from "react";


export default async function Products() {

  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  console.log(data);

  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl">products</h1>
      <ul>
        {data.map((product) => {
          return (
            <li className="flex flex-col border-dashed border-b-2 border-black gap-2" key={product.id}>
              <p className="flex items-center justify-between text-2xl font-semibold text-red-600">
                name: <span className="text-xl font-bold">{product.name}</span>
              </p>
              <p className="flex items-center justify-between text-2xl font-semibold text-gray-600">
                price: <span>{product.price}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
