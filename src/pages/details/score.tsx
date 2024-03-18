import React, {useEffect, useState} from 'react'
import FootballData from 'footballdata-api-v2';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../constants';


export default function Score() {
  const [scores, setScore] = useState({})
  const competitionId = Number(useParams().competitionId)

  useEffect(() => {
    const footballData = new FootballData(API_KEY);
    const fetchData = async () => {
      const data = await footballData.getScorersFromCompetition({
      competitionId : competitionId,
      })
      setScore(data)
    }
    fetchData()
  }, [competitionId])

  return (
    <div>
     score {scores?.competition?.name}
    </div>
  )
}
