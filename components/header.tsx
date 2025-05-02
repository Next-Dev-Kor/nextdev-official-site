import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { Session } from "next-auth";
import { User } from "@prisma/client";
import ClientHeader from "@/components/client-header";

interface HeaderProps {
  session: Session | null;
  user: User | null;
}

const Header = ({ session, user }: HeaderProps) => {
  return (
    <nav className="py-4 flex justify-between px-5 fixed w-full bg-background border-b">
      <Image src={Logo} alt="logo" className="w-8 h-8" />
      <ClientHeader session={session} user={user} />
    </nav>
  );
};

export default Header;
