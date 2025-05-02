import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import prisma from "@/lib/db";

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        const email = user.email ?? `${user.name}@kakao.fake`;

        await prisma.user.upsert({
          where: { email },
          update: {
            nickname: user.name ?? "Unknown",
            profileImage: user.image ?? null,
          },
          create: {
            email,
            nickname: user.name ?? "Unknown",
            profileImage: user.image ?? null,
          },
        });

        return true;
      } catch (error) {
        console.error("❌ Error in signIn callback:", error);
        return false;
      }
    },

    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
