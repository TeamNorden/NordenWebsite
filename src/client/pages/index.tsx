import React from 'react'
import IndexContent from '~client/components/Pages/Index'
import { User } from '~client/types/global'

function Home({ user }: { user?: User | undefined }) {
  return (
    <>
      <IndexContent user={user} />
    </>
  )
}
export default Home
