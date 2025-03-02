import { PlusIcon } from "lucide-react";
import Link from "next/link";

export function CreateTeam() {
  return (
    <Link href="/dashboard/teams/create"
      className=" flex h-10 items-center rounded-lg bg-pink-600 px-4 text-white text-sm font-medium transition-colors hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
    >
      <span className=" hidden md:block">Create Team</span>{' '}
      <PlusIcon className=" h-5 md:ml-4" />
    </Link>
  )
}