import React from "react";
import SectionHeaders from "./SectionHeaders";

export default function About() {
  return (
    <section className="text-center my-16">
      <SectionHeaders subHeader={"nossa historia"} mainHeader={"Sobre nos"} />
      <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </section>
  );
}
