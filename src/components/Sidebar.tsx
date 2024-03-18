import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/usefetch'
import FootballData from 'footballdata-api-v2';
import { API_KEY } from '../constants';
import CompetitionItem from './competitionItem';

export default function Sidebar() {
  // const {data, isloading, error} = useFetch('competions')
  const [competitions, setCompetions] = useState([])

  useEffect(() => {
    const footballData = new FootballData(API_KEY);
    const fetchData = async () => {
      const { competitions: data } = await footballData.getCompetitions({
        areas: [2088, 2072, 2081, 2114, 2205, 2224],
      })
      const dataSort = data.sort((a,b) =>  b?.numberOfAvailableSeasons - a?.numberOfAvailableSeasons)
      setCompetions(dataSort)
    }
    fetchData()
  }, [])

  return (
    <div className='min-w-[250px] min-h-[1000px] border-2 p-5 '>
      <div className=''>
        <h2 className='text-2xl font-bold my-5 '>Compétions </h2>
        <ul>
          {
            competitions.map(competition => (
              <CompetitionItem competition={competition} key={competition.id} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}
