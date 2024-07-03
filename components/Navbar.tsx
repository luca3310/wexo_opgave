"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavbarLink {
  name: string;
  path: string;
}

export default function Navbar() {
  const pathname = usePathname();

  const [navbarLinks] = useState<NavbarLink[]>([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Wishlist",
      path: "/wishlist",
    },
  ]);

  return (
    <nav className="w-full bg-slate-200 fixed bottom-0 left-0 flex justify-center">
      <ul className="w-[50%] p-5 flex justify-between text-2xl">
        {navbarLinks.map((navbarLink: NavbarLink) => (
          <li
            key={navbarLink.path}
            className={
              pathname === navbarLink.path ? "text-blue-500" : "text-black"
            }
          >
            {pathname === navbarLink.path ? (
              navbarLink.name
            ) : (
              <Link href={navbarLink.path}>{navbarLink.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
