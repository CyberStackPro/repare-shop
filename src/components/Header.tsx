"use client";
import React from "react";
import NavButtons from "./NavButtons";
import { Home, LogOut, Ticket, UsersRoundIcon } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggler";
import { Button } from "./ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header className="animate-slide bg-background h-12 p-2 border-b border-border sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        {/* Left */}
        <div className="flex items-center gap-2">
          <NavButtons href="/home" icon={Home} label="Home" />
          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0 "
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Computer Repair Shop
            </h1>
          </Link>
        </div>

        {/* Right */}
        <div className="flex gap-5 items-center">
          <NavButtons href="/tickets" icon={Ticket} label="Tickets" />
          <NavButtons
            href="/customers"
            icon={UsersRoundIcon}
            label="Customers"
          />
          {/* Theme Toggle */}
          <ThemeToggle />

          <Button
            variant={"outline"}
            size={"icon"}
            aria-label="Log Out"
            title="Log Out"
            className="rounded-full"
            asChild
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
