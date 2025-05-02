import { PropsWithChildren } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Header from "@/components/header";
import prisma from "@/lib/db";

const RootLayout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);

  const userId = session?.user?.id;
  const user = userId
    ? await prisma.user.findUnique({
        where: { id: Number(userId) },
      })
    : null;
  console.log(user);
  return (
    <div>
      <Header session={session} user={user} />
      {children}
    </div>
  );
};

export default RootLayout;
