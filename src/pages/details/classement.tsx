import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import {KEY, SECRET } from '../../constants';
import MatchItemLoad from '../../components/load/matchItemLoad';
import axios from 'axios';
import { GlobalContext } from '../../context/ContextProvider';
import StandingItem from '../../components/standingItem';
import { StandingLiveScoreType } from '../../typescript/Standing';


const tableHeadeEl = ['Pos', 'Equipe','MP', 'W.', 'D.', 'L', 'GF.', 'GA', 'GD','PTS']

export default function Classement() {
  const [standings, setStandings] = useState<StandingLiveScoreType[]>([])
  const [isloading, setIsloading] = useState(true)
  const {competitionId :competition_id } = useContext(GlobalContext)

  const competitionId = Number(useParams().competitionId)


  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true)
      const data = await axios.get(`https://livescore-api.com/api-client/competitions/standings.json?competition_id=${competition_id}&key=${KEY}&secret=${SECRET}`)
      const table : StandingLiveScoreType[] = data?.data?.data?.table
      setStandings(table)
      setIsloading(false)
    }
    fetchData()

  }, [competitionId])
  return (
    <div>
      <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {
              tableHeadeEl.map((item, index) => (
                <th key={index} scope="col" className="px-6 py-3">{item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
        {
          standings?.map((standing, index) => (
            !isloading ?
            <StandingItem key={index} standing={standing} /> : 
            <MatchItemLoad key={index}/>
          ))
        }
        </tbody>
      </table>
    </div>
  
    </div>
  )
}
