import Image from "next/image";
import React from "react";

export default function HomeMenu() {
  return (
    <section className="pt-16">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="h-48 w-48 absolute -left-12">
          <Image src={"/salad1.jpg"} alt={"salad"} fill />
        </div>
        <div className="h-48 w-48 absolute -right-12">
          <Image src={"/salad2.jpg"} alt={"salad"} fill />
        </div>
      </div>

      <div className="text-center">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">
          Confira
        </h3>
        <h2 className="text-primary font-bold text-4xl">Menu</h2>
      </div>
    </section>
  );
}
