"use client";
import React from "react";
import Link from "next/link";
import LoginWithGoogle from "../../components/LoginWithGoogle";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [creatingUser, setCreatingUser] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    setCreatingUser(true);
    setError(false);
    const { ok } = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (ok) {
      setCreatingUser(false);
    } else {
      setError(true);
    }
  };

  return (
    <section className="pt-16 h-screen">
      <h1 className="title">Registrar</h1>
      {error && (
        <p className="text-center text-red-800">
          Erro. Por favor, tente novamente mais tarde.
        </p>
      )}
      <form className="max-w-xs mx-auto" onSubmit={handleRegisterSubmit}>
        <input
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <button type="submit" disabled={creatingUser}>
          {creatingUser ? "Registrando..." : "Registrar"}
        </button>

        <div className="my-4 text-center text-gray-500">
          faça login com um servidor
        </div>

        <LoginWithGoogle />

        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Já tem uma conta?{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
