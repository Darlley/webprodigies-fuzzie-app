import React from 'react'

import Sidebar from '@/components/sidebar'
import InfoBar from '@/components/infobar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex flex-col overflow-hidden h-svh">
      <InfoBar />
      <div className='flex w-full flex-grow overflow-hidden'>
        <Sidebar />
        <div className="w-full">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout
