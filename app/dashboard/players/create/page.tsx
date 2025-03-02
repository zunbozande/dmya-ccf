import BreadCrumbs from '@/app/ui/breadcrumbs'
import React from 'react'

const CreatePlayerPage = () => {
  return (
    <main>
      <BreadCrumbs breadcrumbs={[
        { label: 'Players', href: '/dashboard/players' },
        {
          label: 'Create Players',
          href: '/dashboard/players/create',
          active: true
        }
      ]} />
    </main>
  )
}

export default CreatePlayerPage