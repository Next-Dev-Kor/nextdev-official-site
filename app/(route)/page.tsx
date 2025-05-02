import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
export default async function Home() {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
