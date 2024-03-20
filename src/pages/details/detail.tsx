import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import DetailNav from '../../components/detailNav'
import DetailBanier from '../../components/detailBanier'

export default function Detail() {
  
  return (
    <div className='globalWidth flex gap-6 my-20 '>
      <Sidebar />
      <div className='flex-1'>
        <DetailBanier />
        <DetailNav />
        <div className='border-2 p-3 min-h-[500px] bg-white mb-20'>
          <Outlet />
          {/* <CompetitionLayout/> */}
        </div>
      </div>
    </div>
  )
}
