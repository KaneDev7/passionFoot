import React, { useEffect, useState } from 'react'
import FootballData from 'footballdata-api-v2';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../constants';
import MatchItem from '../../components/matchItem';
import MatchItemLoad from '../../components/load/matchItemLoad';




export default function Match() {
  const [matches, setMathes] = useState([])
  const [isloading, setIsloading] = useState(true)
  const competitionId = Number(useParams().competitionId)


  useEffect(() => {
    const footballData = new FootballData(API_KEY);
    setIsloading(true)
    const fetchData = async () => {
      const { matches: data } = await footballData.getMatchesFromCompetition({
        competitionId: competitionId,
      })
      setMathes(data)
      setIsloading(false)
    }
    fetchData()

  }, [competitionId])

  
  // useEffect(() => {
  //   const footballData = new FootballData(API_KEY);
  //   setIsloading(true)
  //   const fetchData = async () => {
  //     const data = await footballData.getTeamsFromCompetition({
  //       competitionId: competitionId,
  //     })
  //   }
  //   fetchData()

  // }, [competitionId])

  return (
    <div >
      <ul className='overflow-y-auto max-h-[1000px] '>
        {
          matches?.map((match, index) => (
            !isloading ?
            <MatchItem key={index} match={match} /> : 
            <MatchItemLoad key={index}/>
          ))
        }
      </ul>
    </div>
  )
}
