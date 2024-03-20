import React from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'


export default function CompetitionItem({ competition }) {
  const competitionId = Number(useParams().competitionId)
  
  const isActif = competitionId === competition.id
    if( competition?.code === 'PL' || 
    competition?.code === 'BL1' || 
    competition?.code === 'SA' || 
    competition?.code === 'FL1' || 
    competition?.code === 'PD')

    return (
        <Link to={`detail/${competition?.id}`} >
            <li className={`flex items-center gap-4 p-2 mb-4 rounded-md  hover:bg-gray-100 ${isActif && 'bg-gray-100'}`}>
                   
                    <img
                        className='w-[30px] h-[30px] rounded-full '
                        src={competition?.emblemUrl || competition?.area?.ensignUrl}
                        alt="" />
                <p className=' font-medium'> {competition?.name} </p>

            </li>
        </Link>
    )
}
