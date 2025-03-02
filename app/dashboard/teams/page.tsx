import Search from '@/app/ui/search'
import { CreateTeam } from '@/app/ui/teams/buttons'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Teams'
}
const TeamsPage = () => {
  return (
    <div className=' w-full'>
      <div className=' flex w-full items-center justify-between'>
        <h1 className='text-2xl'>Teams</h1>
      </div>
      <div className=' mt-4 md:mt-8 flex gap-2 items-center justify-between'>
        <Search placeholder='Search Teams...' />
        <CreateTeam />
      </div>
    </div>
  )
}

export default TeamsPage