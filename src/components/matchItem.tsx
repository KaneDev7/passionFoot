import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";
import moment from 'moment';
import { teamIds } from '../constants';
import { MatchFromCompetition } from 'footballdata-api-v2/dist/results';

type MatchProps = {
    match : MatchFromCompetition
}

export default function MatchItem({ match } : MatchProps) {
    
    const statusColor = match?.status === 'SCHEDULED' ? 
    'bg-green-400/20 text-green-900' :
    match?.status === 'POSTPONED' ?  'bg-yellow-400/20 text-black-900' :
    'bg-red-400/20  text-red-900' 
    

    const statusText = match?.status === 'SCHEDULED' ? 'Programmé' : match?.status === 'POSTPONED' ? 'Reporté' : 'Terminé'

    return (
        <li className='flex justify-between items-center gap-20 text-sm mb-5 rounded-md p-3 bg-[#fafafa] '>
            <div className='flex-1 flex justify-between items-center gap-5 '>
                <div className='flex-1 flex items-center gap-4'>
                    {
                        teamIds.includes(match?.homeTeam?.id) ?
                            <img width={30} height={30} className='' src={`https://crests.football-data.org/${match?.homeTeam?.id}.svg`} alt="" /> :
                            <img width={30} height={30} className='' src={`https://crests.football-data.org/${match?.homeTeam?.id}.png`} alt="" />
                    }
                    <p className=''> {match?.homeTeam?.name} </p>
                </div>
                <div className=' flex min-w-[70px] items-center justify-between font-medium text-xs rounded-full px-2 py-1 bg-blue-300/20 '>
                    <div className='text-center flex-1'>{match?.score?.fullTime?.homeTeam} </div>
                   {
                    match?.status !== "FINISHED"  ? 
                    <div className='text-center flex-1'>v</div> :
                    <div className='text-center flex-1'>-</div>
                   }
                    <div className='text-center flex-1'>{match?.score?.fullTime?.awayTeam} </div>
                </div>
                <div className='flex-1 flex justify-end items-center gap-4'>
                    <p className='text-right'> {match?.awayTeam?.name} </p>
                    {
                        teamIds.includes(match?.awayTeam?.id) ?
                            <img width={30} height={30} className='' src={`https://crests.football-data.org/${match?.awayTeam?.id}.svg`} alt="" /> :
                            <img width={30} height={30} className='' src={`https://crests.football-data.org/${match?.awayTeam?.id}.png`} alt="" />
                    }
                </div>
            </div>

            <div className='flex justify-between items-center gap-5 '>

                <div className={`text-xs p-2  ${statusColor} rounded-md`}> {statusText} </div>
                <div className='flex justify-between items-center gap-3 '>
                    <p className='text-xs'> {moment(match?.utcDate).format('LLL')} </p>
                    <IoIosInformationCircleOutline size={20} className='text-[#b4b4b4]' />
                    <FaChartLine size={20} className='text-[#b4b4b4]' />
                </div>
            </div>
        </li>
    )
}
