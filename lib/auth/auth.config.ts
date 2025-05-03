// lib/auth/auth.config.ts
import type { NextAuthConfig } from "next-auth"
import { providers } from "./providers"

export const authConfig: NextAuthConfig = {
  providers,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub ?? ""
      return session
    },
  },
}
