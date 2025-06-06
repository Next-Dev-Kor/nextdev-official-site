import { type NextAuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import type { Session, User, Account } from "next-auth";
import type { JWT } from "next-auth/jwt";
import prisma from "@/lib/db";

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User }) {
      try {
        const dbUser = await prisma.user.upsert({
          where: { nickname: user.name ?? "Unknown" },
          update: {
            profileImage: user.image ?? null,
            role: "SUPER",
          },
          create: {
            email: user.email ?? null,
            nickname: user.name ?? "Unknown",
            profileImage: user.image ?? null,
            role: "SUPER",
          },
        });

        user.id = dbUser.id.toString();

        return true;
      } catch (error) {
        console.error("❌ Error in signIn callback:", error);
        return false;
      }
    },

    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: User;
      account?: Account | null;
    }) {
      if (user) {
        token.id = user.id!;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.accessToken = token.accessToken as string;
      session.user.id = token.id as string;
      return session;
    },
  },
};
