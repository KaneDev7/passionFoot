import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FootballData from 'footballdata-api-v2';
import { API_KEY } from '../constants';
import DetailBanerLoad from '../components/load/detailBanerLoad'


export default function DetailBanier() {
  const [competition, setCompetion] = useState({})
  const [isloading, setIsloading] = useState(true)

  const competitionId = Number(useParams().competitionId)


  useEffect(() => {
    const footballData = new FootballData(API_KEY);
    const fetchData = async () => {
      setIsloading(true)
      const data = await footballData.getCompetition({ id: competitionId })
      setCompetion(data)
      setIsloading(false)

    }
    fetchData()
  }, [competitionId])

  return isloading ?
      <DetailBanerLoad /> :
      <div
        style={{
          backgroundImage: `url(${competition?.emblemUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center'
        }}
        className='w-full min-h-[300px] mb-5 relative'>
        <div className='w-full flex justify-end items-center absolute inset-0 p-10 gradient rounded-md'>
          <p className='text-3xl text-white font-bold '> {competition?.name} </p>
        </div>
      </div>


  
}
