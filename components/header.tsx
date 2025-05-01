"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { NAV_MENUS } from "@/constants";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="py-4 flex justify-between px-5 fixed w-full bg-background border-b">
      <Image src={Logo} alt="logo" className="w-8 h-8" />

      <div className="hidden md:flex items-center gap-4">
        {NAV_MENUS.map((menu) => (
          <div key={menu.id} className="cursor-pointer">
            <Link href={menu.href}>{menu.title}</Link>
          </div>
        ))}
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={session.user?.image || ""}
                    alt={session.user?.name || ""}
                  />
                  <AvatarFallback>
                    {session.user?.name?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  {session.user?.name && (
                    <p className="font-medium">{session.user.name}</p>
                  )}
                  {session.user?.email && (
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {session.user.email}
                    </p>
                  )}
                </div>
              </div>
              <DropdownMenuItem onClick={() => signOut()}>
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            onClick={() => signIn("kakao", { callbackUrl: "/" })}
            className="bg-[#FEE500] text-black hover:bg-[#FEE500]/90"
          >
            카카오로 로그인
          </Button>
        )}
        <ModeToggle />
      </div>

      <div className="md:hidden flex items-center gap-4">
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={session.user?.image || ""}
                    alt={session.user?.name || ""}
                  />
                  <AvatarFallback>
                    {session.user?.name?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  {session.user?.name && (
                    <p className="font-medium">{session.user.name}</p>
                  )}
                  {session.user?.email && (
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {session.user.email}
                    </p>
                  )}
                </div>
              </div>
              <DropdownMenuItem onClick={() => signOut()}>
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            onClick={() => signIn("kakao", { callbackUrl: "/" })}
            className="bg-[#FEE500] text-black hover:bg-[#FEE500]/90"
          >
            카카오로 로그인
          </Button>
        )}
        <ModeToggle />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Menu className="w-6 h-6" />
          </PopoverTrigger>
          <PopoverContent className="w-56 bg-background border-border">
            <div className="flex flex-col gap-4">
              {NAV_MENUS.map((menu) => (
                <div
                  key={menu.id}
                  className="cursor-pointer hover:text-primary transition-colors"
                >
                  <Link href={menu.href}>{menu.title}</Link>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default Header;
