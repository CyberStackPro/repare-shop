import { LucideIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  icon: LucideIcon;
  label?: string;
  href?: string;
};

export default function NavButtons({ icon: Icon, href, label }: Props) {
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      aria-label={label}
      title={label}
      className="rounded-full"
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
}
