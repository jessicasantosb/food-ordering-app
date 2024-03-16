import Image from "next/image";
import React from "react";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className="pt-24">
      <div className="absolute w-full left-0 right-0 justify-start">
        <div className="absolute -left-12 -top-[70px] text-left">
          <Image src={"/basil.jpg"} alt={"basil"} width={220} height={200} />
        </div>
        <div className="absolute -top-[40px] right-0">
          <Image src={"/olive.png"} alt={"olive"} width={210} height={180} />
        </div>
      </div>

      <div className="text-center pb-32">
        <SectionHeaders subHeader={'Confira'} mainHeader={'Menu'} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
