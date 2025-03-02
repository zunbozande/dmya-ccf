'use client';

import { ShieldEllipsis, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../button";

const Form = () => {
  return (
    <form>
      <div className=' rounded-md bg-gray-50 p-4 md:p-6'>
        {/* Team Name */}
        <div className=' mb-4'>
          <label htmlFor="teamname" className='mb-2 block text-sm font-medium'>Team Name</label>
          <div className=' mt-2'>
            <div className='relative'>
              <input type="text" name='teamname' id='teamname' placeholder='Enter Team Name'
                className='peer block w-full rounded-md border border-gray-200 bg-white py-[9px] pl-10 text-sm focus-visible:outline-2 focus-visible:outline-pink-500 placeholder:text-gray-500' />
              <ShieldEllipsis className=" text-gray-500 peer-focus:text-gray-700 absolute left-3 top-2" />
            </div>
          </div>
          {/* TODO: Error */}
        </div>
        {/* Team Owner */}
        <div className=' mb-4'>
          <label htmlFor="teamownername" className=' mb-2 block text-sm font-medium'>
            Team Owner Name
          </label>
          <div className=' relative mt-2'>
            <div className='relative'>
              <input type="text" name='teamownername' id='teamownername' placeholder='Enter Team Owner Name'
                className='peer block w-full rounded-md border border-gray-200 bg-white py-[9px] pl-10 text-sm focus-visible:outline-2  focus-visible:outline-pink-500 placeholder:text-gray-500' />
              <User className=" text-gray-500 peer-focus:text-gray-700 absolute left-3 top-2" />
            </div>
          </div>
          {/* TODO Error */}
        </div>
        {/* Action Buttons */}
        <div className=" mt-6 flex justify-end gap-4">
          <Link href="/dashboard/teams"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
            Cancel
          </Link>
          <Button type="submit">Create Team</Button>
        </div>
      </div>
    </form>
  )
}

export default Form