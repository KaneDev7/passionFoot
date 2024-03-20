import React, { useEffect, useState, useContext } from 'react'

import { useParams } from 'react-router-dom'
import FootballData from 'footballdata-api-v2';
import { API_KEY } from '../constants';
import DetailBanerLoad from '../components/load/detailBanerLoad'
import { GlobalContext } from '../context/ContextProvider';


export default function DetailBanier() {
  const {
    setCurrentMatchday,
    setTotalMatchDay,
    setCompetionTeams,
    setCompetitionId
  } = useContext(GlobalContext)
  const [competition, setCompetion] = useState({})
  const [isloading, setIsloading] = useState(true)

  const competitionId = Number(useParams().competitionId)

  const updateCompetitionId = (competionCode) => {
    switch (competionCode) {
      case 'PL':
        setCompetitionId(2)
        break;
      case 'SA':
        setCompetitionId(4)
        break;
      case 'PD':
        setCompetitionId(3)
        break;
      case 'BL1':
        setCompetitionId(1)
        break;
      case 'FL1':
        setCompetitionId(5)
        break;
      default: setCompetitionId(2)

    }
  }
  const updateTotalMatchDay = (competionCode) => {
    switch (competionCode) {
      case 'PL' || 'PD' || 'SA' || 'FL1':
        setTotalMatchDay(38)
        break;
      case 'BL1':
        setTotalMatchDay(34)
        break;
      default: setTotalMatchDay(38)
    }
  }

  useEffect(() => {
    const footballData = new FootballData(API_KEY);
    const fetchData = async () => {
      setIsloading(true)
      const data = await footballData.getCompetition({ id: competitionId })
      setCompetion(data)
      setCurrentMatchday(data?.currentSeason?.currentMatchday)
      updateTotalMatchDay(data?.code)
      updateCompetitionId(data?.code)
      setIsloading(false)
    }
    fetchData()
  }, [competitionId])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const footballData = new FootballData(API_KEY);
        const { teams } = await footballData.getTeamsFromCompetition({ competitionId })
        setCompetionTeams(teams)
      } catch (error) {
        console.log(error)
      }
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
