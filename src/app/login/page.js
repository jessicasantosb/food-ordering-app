"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import LoginWithGoogle from "../../components/LoginWithGoogle";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginInProgress, setLoginInProgress] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    setLoginInProgress(true);
    setError(false);

    try {
      await signIn("credentials", { email, password, callbackUrl: "/" });
    } catch (error) {
      setError(true);
    }

    setLoginInProgress(false);
  };

  return (
    <section className="pt-16 h-screen">
      <h1 className="title">Login</h1>
      {error && (
        <p className="text-center text-red-800">
          Erro. Por favor, tente novamente mais tarde.
        </p>
      )}
      <form className="max-w-xs mx-auto" onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="email@email.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginInProgress}
        />
        <input
          type="password"
          placeholder="senha"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginInProgress}
        />
        <button type="submit" disabled={loginInProgress}>
          {loginInProgress ? "Entrando..." : "Entrar"}
        </button>

        <div className="my-4 text-center text-gray-500">
          faça login com um servidor
        </div>

        <LoginWithGoogle />

        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Ainda não tem uma conta?{" "}
          <Link className="underline" href={"/register"}>
            Registrar &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
