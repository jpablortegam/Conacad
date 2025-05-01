import Image from "next/image";
import { SignIn } from "@/components/auth/signin-button";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello, world!</h1>
      <SignIn />
    </main>
  );
}
