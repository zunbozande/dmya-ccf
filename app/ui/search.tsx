'use client';

import { SearchIcon } from "lucide-react";

export default function Search({ placeholder }: { placeholder: string }) {
  return (<div className="relative flex flex-1 flex-shrink-0">
    <label htmlFor="search" className="sr-only">
      Search
    </label>
    <input className=" peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm focus-visible:outline-2 outline-pink-500 placeholder:text-gray-500" placeholder={placeholder} />
    <SearchIcon className=" absolute left-3 top-3 h-[18px] w-[18px]" />

  </div>)
}