"use client";
import React from "react";
import Image from "next/image";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);

    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section className="pt-16">
      <h1 className="text-center text-primary text-4xl my-4">Registrar</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleRegisterSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
        <div className="my-4 text-center text-gray-500">
          faça login com um servidor
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={'google'} width={24} height={24} />
          Login com o Google
        </button>
      </form>
    </section>
  );
}
