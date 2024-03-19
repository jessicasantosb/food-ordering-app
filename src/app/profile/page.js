"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function Profile() {
  const [userName, setUserName] = React.useState("");
  const [saved, setSaved] = React.useState(false);

  const session = useSession();
  const { status } = session;
  const userEmail = session.data.user.email;
  const userImage = session.data.user.image;

  React.useEffect(() => {
    if (status === "authenticated") setUserName(session.data.user.name);
  }, [session, status]);

  const handleProfileUpdate = async (event) => {
    event.preventDefault();

    setSaved(false);
    const { ok } = await fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify({ name: userName }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (ok) {
      setSaved(true);
    }
  };

  if (status === "loading") return "Loading...";
  if (status === "unauthenticated") return redirect("/login");

  return (
    <section className="pt-16 h-screen">
      <h1 className="title">Perfil do usuário</h1>
      <div className="max-w-md mx-auto">
        {saved && (
          <h2 className="text-center bg-green-100 p-4 rounded-lg border border-green-300">
            Atualizado!
          </h2>
        )}
        <div className="flex gap-4 items-center">
          <div>
            <div className="p-2 rounded-lg relative">
              <Image
                className="rounded-lg w-full h-full mb-1"
                src={userImage}
                width={250}
                height={250}
                alt={"user image"}
              />
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileUpdate}>
            <input
              type="text"
              placeholder="Primeiro e último nome"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input type="email" disabled={true} value={userEmail} />
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
