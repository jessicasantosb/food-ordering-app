"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();
  const { status } = session;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;

  if (userName && userName.includes(" ")) userName = userName.split(" ")[0];

  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-400 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href={"/"}>
          PIZZA
        </Link>
        <Link href={"/"}>Página inicial</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>Sobre</Link>
        <Link href={""}>Contato</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-400 font-semibold">
        {status === "authenticated" ? (
          <>
            <Link href={"/profile"} className="whitespace-nowrap">
              Olá, {userName}
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-primary rounded-full text-white px-8 py-2"
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
              href={"/register"}
              className="bg-primary rounded-full text-white px-8 py-2"
            >
              Registrar
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
