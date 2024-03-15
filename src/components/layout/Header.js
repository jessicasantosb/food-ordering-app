import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="">
        JB PIZZA
      </Link>
      <nav className="flex items-center gap-8 text-gray-400 font-semibold">
        <Link href="">Página inicial</Link>
        <Link href="">Menu</Link>
        <Link href="">Sobre</Link>
        <Link href="">Contato</Link>
        <Link href="" className="bg-primary rounded-full text-white px-8 py-2">
          Login
        </Link>
      </nav>
    </header>
  );
}
