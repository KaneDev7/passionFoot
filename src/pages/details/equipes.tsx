import { Team, TeamResult } from 'footballdata-api-v2/dist/results';
import React, { useEffect, useState, useContext } from 'react'
import FootballData from 'footballdata-api-v2';
import { API_KEY } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/ContextProvider';


export default function Equipes() {
  const navigate = useNavigate()
  const { competionTeams }: { competionTeams: Team[] } = useContext(GlobalContext)
  const competitionId = Number(useParams().competitionId)

  console.log('competionTeams', competionTeams)

  return (
    <div>
      <ul className='flex justify-around items-center flex-wrap gap-5 my-10 '>
        {
          competionTeams?.map(team => (
            <li className='text-center w-[100px] h-[100px] m-10' onClick={() =>navigate(`/detail/${competitionId}/equipes/team/${team.id}`) }>
              <img className='w-full h-full object-cover' src={team?.crestUrl as string} alt="" />
              <p className='mt-3 font-medium text-sm'>{team?.name} </p>
            </li>
          ))
        }

      </ul>
    </div>
  )
}
