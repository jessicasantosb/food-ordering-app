import React from "react";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center ">
        <img
          src="/pizza.jpg"
          alt="pizza"
          className="max-h-10 max-w-auto block mx-auto"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit.
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
        Adicionar R$70
      </button>
    </div>
  );
}
