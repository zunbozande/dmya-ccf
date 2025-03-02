import { CreatePlayer } from '@/app/ui/players/buttons';
import Search from '@/app/ui/search';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Players'
}
const PlayersPage = () => {
  return (<div className=' w-full'>
    <div className=' flex w-full items-center justify-between'>
      <h1 className='text-2xl'>Players</h1>
    </div>
    <div className=' mt-4 md:mt-8 flex gap-2 items-center justify-between'>
      <Search placeholder='Search Players...' />
      <CreatePlayer />
    </div>
  </div>
  );
}

export default PlayersPage