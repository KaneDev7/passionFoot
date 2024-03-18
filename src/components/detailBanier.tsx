import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FootballData from 'footballdata-api-v2';
import { API_KEY } from '../constants';


export default function DetailBanier() {
  const [competition, setCompetion] = useState({})

  const id = Number(useParams().id)

  useEffect(() => {
    const footballData = new FootballData(API_KEY);
    const fetchData = async () => {
      const data = await footballData.getCompetition({ id })
      setCompetion(data)
    }
    fetchData()
  }, [id])

  return (
    <div
      style={{
        backgroundImage: `url(${competition?.emblemUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      }}
      className='w-full min-h-[300px] mb-5 relative  '>
      <div className='w-full flex justify-end items-center absolute inset-0 p-10 gradient rounded-md'>
        <p className='text-3xl text-white font-bold '> {competition?.name} </p>
      </div>
    </div>
  )
}
