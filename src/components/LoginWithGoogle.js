import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="flex gap-4 justify-center"
    >
      <Image src={"/google.png"} alt={"google"} width={24} height={24} />
      Login com o Google
    </button>
  );
}
