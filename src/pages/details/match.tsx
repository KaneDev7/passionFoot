import React, { useEffect, useState, useContext } from 'react'
import FootballData from 'footballdata-api-v2';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../constants';
import MatchItem from '../../components/matchItem';
import MatchItemLoad from '../../components/load/matchItemLoad';
import MatchFilter from '../../components/matchFilter';
import { GlobalContext } from '../../context/ContextProvider';
import { MatchFromCompetition } from 'footballdata-api-v2/dist/results';


export default function Match() {
  const [matches, setMathes] = useState<MatchFromCompetition[]>()
  const [isloading, setIsloading] = useState(true)
  const competitionId = Number(useParams().competitionId)
  const {selectedMatchDay } = useContext(GlobalContext)


  useEffect(() => {
    const footballData = new FootballData(API_KEY);
    setIsloading(true)
    const fetchData = async () => {
      const { matches: data }  = await footballData.getMatchesFromCompetition({
        competitionId: competitionId,
        matchday : selectedMatchDay
      })
      setMathes(data)
      setIsloading(false)
    }
    fetchData()

  }, [competitionId, selectedMatchDay])



  return (
    <div >
      <MatchFilter/>
      <ul className='overflow-y-auto  '>
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
