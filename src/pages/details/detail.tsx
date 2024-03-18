import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import DetailNav from '../../components/detailNav'
import DetailBanier from '../../components/detailBanier'
import CompetitionLayout from './competitionLayout'

export default function Detail() {
  
  return (
    <div className='globalWidth flex gap-6 mt-20'>
      <Sidebar />
      <div className='flex-1'>
        <DetailBanier />
        <DetailNav />
        <div className='border-2 min-h-[1000px] p-3 bg-white '>
          <Outlet />
          {/* <CompetitionLayout/> */}
        </div>
      </div>
    </div>
  )
}
