"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div>
      <div className="flex items-center justify-between  h-[100px]">
        <h3 className="text-xl font-semibold">Lamamia</h3>
        <div className="flex gap-x-6">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`${pathName === link.url ? "text-green-300" : ""}`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
