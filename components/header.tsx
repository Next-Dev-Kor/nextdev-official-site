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

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-4 flex justify-between px-5 fixed w-full bg-background border-b">
      <Image src={Logo} alt="logo" className="w-8 h-8" />

      <div className="hidden md:flex items-center gap-4">
        {NAV_MENUS.map((menu) => (
          <div key={menu.id} className="cursor-pointer">
            <Link href={menu.href}>{menu.title}</Link>
          </div>
        ))}
        <ModeToggle />
      </div>

      <div className="md:hidden flex items-center gap-4">
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
