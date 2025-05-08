"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Session } from "next-auth";
import { User } from "@prisma/client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { NAV_MENUS } from "@/constants";
import { useModal } from "@/store/use-modal";
interface ClientHeaderProps {
  session: Session | null;
  user?: User | null;
}

const ClientHeader = ({ session }: ClientHeaderProps) => {
  const [open, setOpen] = useState(false);
  const { onOpen } = useModal();

  const UserMenu = () => (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={session?.user?.image || ""}
                alt={session?.user?.name || ""}
              />
              <AvatarFallback>{session?.user?.name?.[0] || "U"}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <div className="flex flex-col p-2 space-y-1 leading-none">
            {session?.user?.name && (
              <p className="font-medium">{session.user.name}</p>
            )}
            {session?.user?.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {session.user.email}
              </p>
            )}
          </div>
          <DropdownMenuItem onClick={() => signOut()}>
            로그아웃
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );

  return (
    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center gap-4">
        {NAV_MENUS.map((menu) => (
          <div key={menu.id} className="cursor-pointer">
            <Link href={menu.href}>{menu.title}</Link>
          </div>
        ))}
      </div>

      {session ? (
        <UserMenu />
      ) : (
        <div onClick={() => onOpen("login")} className="">
          <div>로그인</div>
        </div>
      )}
      <ModeToggle />
      <div className="md:hidden">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Menu className="w-6 h-6 cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className="w-56 bg-background border-border">
            <div className="flex flex-col gap-4">
              {NAV_MENUS.map((menu) => (
                <div
                  key={menu.id}
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <Link href={menu.href}>{menu.title}</Link>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ClientHeader;
