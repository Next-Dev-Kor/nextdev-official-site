import { PropsWithChildren } from "react";
import { getServerSession } from "next-auth";

import Header from "@/components/header";
import prisma from "@/lib/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

const RootLayout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);

  const userId = session?.user?.id;
  const user = userId
    ? await prisma.user.findUnique({
        where: { id: Number(userId) },
      })
    : null;

  return (
    <div>
      <Header session={session} user={user} />
      {children}
    </div>
  );
};

export default RootLayout;
