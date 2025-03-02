import BreadCrumbs from '@/app/ui/breadcrumbs'
import Form from '@/app/ui/teams/create-form'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Create Team'
}
const CreateTeamPage = () => {
  return (
    <main>
      <BreadCrumbs breadcrumbs={[
        { label: 'Teams', href: '/dashboard/teams' },
        {
          label: 'Create Teams',
          href: '/dashboard/teams/create',
          active: true
        }
      ]} />
      <Form />
    </main>
  )
}

export default CreateTeamPage