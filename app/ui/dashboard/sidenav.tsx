import Link from "next/link";
import NavLinks from "./nav-links";
import { PowerIcon } from "lucide-react";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md p-4 md:h-40"
        href="/"
      >
        <Image src='/logo.jpeg' width={100} height={100} className=" rounded-2xl h-12 w-12 md:h-full md:w-32 object-fill" alt="dmya-ccf25" />

      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-pink-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            // await signOut({ redirectTo: '/' });
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-pink-50 p-3 text-sm font-medium hover:bg-pink-100 hover:text-pink-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  )
}