// components/auth/SignIn.tsx
import { signIn } from "@/lib/auth";

export async function SignIn() {
  async function handleSignIn() {
    "use server";
    await signIn("google"); // O puedes dejar vacío para mostrar el selector de proveedor
  }

  return (
    
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleSignIn}>
   
        Iniciar sesión con Google
      </button>
 
  );
}
