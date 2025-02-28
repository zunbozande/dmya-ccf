'use client';

import clsx from "clsx";
import { Grid, Home, LandPlot, Radio, Rss, Shield, Shirt } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: Home
  },
  {
    name: 'Teams',
    href: '/dashboard/teams',
    icon: Shield
  },
  {
    name: 'Players',
    href: '/dashboard/players',
    icon: Shirt
  },
  {
    name: 'Standings',
    href: '/dashboard/standings',
    icon: Grid
  },
  {
    name: 'Matches',
    href: '/dashboard/matches',
    icon: LandPlot
  },
  {
    name: 'Live Score',
    href: '/dashboard/live',
    icon: Radio
  },

  {
    name: 'Posts',
    href: '/dashboard/posts',
    icon: Rss
  },
]

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-pink-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-pink-600': pathname === link.href,
            },
          )} key={link.name} href={link.href}>
            {<link.icon className=" w-6" size={20} />}
            <p className="hidden md:block">{link.name}</p>
          </Link >
        );
      })}
    </>)
}