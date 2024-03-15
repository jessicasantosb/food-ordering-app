import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Tudo
          <br /> fica melhor
          <br /> com uma&nbsp; <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          A pizza é aquele pedaço que faltava para tornar o seu dia completo,
          uma pequena, porém deliciosa alegria da vida.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex items-center gap-2 bg-primary text-white uppercase px-4 py-2 rounded-full">
            Peça agora
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Saiba mais <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src={"/pizza.jpg"} alt={"pizza"} fill />
      </div>
    </section>
  );
}
