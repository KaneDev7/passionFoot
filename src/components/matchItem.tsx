import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";
import moment from 'moment';



export default function MatchItem({match}) {
    return (
        <li className='flex justify-between items-center gap-20 text-sm mb-5 rounded-md p-3 bg-[#fafafa] '>
            <div className='flex-1 flex justify-between items-center gap-5 '>
                <div className='flex-1 flex items-center gap-4'>
                    {
                        match?.homeTeam?.id === 397 ||
                            match?.homeTeam?.id === 73 ||
                            match?.homeTeam?.id === 559 ||
                            match?.homeTeam?.id === 95 ||
                            match?.homeTeam?.id === 92 ||
                            match?.homeTeam?.id === 298 ||
                            match?.homeTeam?.id === 558 ||
                            match?.homeTeam?.id === 79 ||
                            match?.homeTeam?.id === 78 ||
                            match?.homeTeam?.id === 83 ||
                            match?.homeTeam?.id === 275 ||
                            match?.homeTeam?.id === 77 ||
                            match?.homeTeam?.id === 264 ||
                            match?.homeTeam?.id === 81 ||
                            match?.homeTeam?.id === 87 ||
                            match?.homeTeam?.id === 86 ||
                            match?.homeTeam?.id === 89 ||

                            match?.homeTeam?.id === 113 ||
                            match?.homeTeam?.id === 107 ||
                            match?.homeTeam?.id === 99 ||
                            match?.homeTeam?.id === 100 ||
                            match?.homeTeam?.id === 471 ||
                            match?.homeTeam?.id === 102 ||
                            match?.homeTeam?.id === 110 ||
                            match?.homeTeam?.id === 109 ||
                            match?.homeTeam?.id === 586 ||
                            match?.homeTeam?.id === 104 ||
                            match?.homeTeam?.id === 103 ||
                            match?.homeTeam?.id === 98 ||
                            match?.homeTeam?.id === 102 ||
                            match?.homeTeam?.id === 5 ||
                            match?.homeTeam?.id === 11 ||
                            match?.homeTeam?.id === 17 ||
                            match?.homeTeam?.id === 28 ||
                            match?.homeTeam?.id === 19 ||
                            match?.homeTeam?.id === 76 ?
                            <img className='w-[30px] h-[30px]' src={`https://crests.football-data.org/${match?.homeTeam?.id}.svg`} alt="" /> :
                            <img className='w-[30px] h-[30px]' src={`https://crests.football-data.org/${match?.homeTeam?.id}.png`} alt="" />
                    }
                    <p className=''> {match?.homeTeam?.name} </p>
                </div>
                <div className=' flex min-w-[70px] items-center justify-between font-medium text-xs rounded-full px-2 py-1 bg-blue-300/20 '>
                    <div className='text-center flex-1'>{match?.score?.fullTime?.homeTeam} </div>
                    <div className='text-center flex-1'>-</div>
                    <div className='text-center flex-1'>{match?.score?.fullTime?.awayTeam} </div>
                </div>
                <div className='flex-1 flex justify-end items-center gap-4'>
                    <p className='text-right'> {match?.awayTeam?.name} </p>
                    {
                        match?.awayTeam?.id === 397 ||
                            match?.awayTeam?.id === 73 ||
                            match?.awayTeam?.id === 559 ||
                            match?.awayTeam?.id === 95 ||
                            match?.awayTeam?.id === 92 ||
                            match?.awayTeam?.id === 298 ||
                            match?.awayTeam?.id === 558 ||
                            match?.awayTeam?.id === 79 ||
                            match?.awayTeam?.id === 78 ||
                            match?.awayTeam?.id === 83 ||
                            match?.awayTeam?.id === 275 ||
                            match?.awayTeam?.id === 77 ||
                            match?.awayTeam?.id === 264 ||
                            match?.awayTeam?.id === 81 ||
                            match?.awayTeam?.id === 87 ||
                            match?.awayTeam?.id === 86 ||
                            match?.awayTeam?.id === 89 ||
                            
                            match?.awayTeam?.id === 113 ||
                            match?.awayTeam?.id === 107 ||
                            match?.awayTeam?.id === 99 ||
                            match?.awayTeam?.id === 100 ||
                            match?.awayTeam?.id === 471 ||
                            match?.awayTeam?.id === 102 ||
                            match?.awayTeam?.id === 110 ||
                            match?.awayTeam?.id === 109 ||
                            match?.awayTeam?.id === 586 ||
                            match?.awayTeam?.id === 104 ||
                            match?.awayTeam?.id === 103 ||
                            match?.awayTeam?.id === 98 ||
                            match?.awayTeam?.id === 102 ||

                            match?.awayTeam?.id === 5 ||
                            match?.awayTeam?.id === 11 ||
                            match?.awayTeam?.id === 17 ||
                            match?.awayTeam?.id === 28 ||
                            match?.awayTeam?.id === 19 ||

                            match?.awayTeam?.id === 76 ?
                            <img className='w-[30px] h-[30px]' src={`https://crests.football-data.org/${match?.awayTeam?.id}.svg`} alt="" /> :
                            <img className='w-[30px] h-[30px]' src={`https://crests.football-data.org/${match?.awayTeam?.id}.png`} alt="" />
                    }
                </div>
            </div>

            <div className='flex justify-between items-center gap-5 '>
                <div className='p-2 bg-red-400/20 rounded-md text-red-900 lowercase'> {match?.status} </div>
                <div className='flex justify-between items-center gap-3 '>
                    <p> {moment(match?.utcDate).format('LL')} </p>
                    <IoIosInformationCircleOutline size={20} className='text-[#b4b4b4]'/>
                    <FaChartLine size={20} className='text-[#b4b4b4]' />
                </div>
            </div>
        </li>
    )
}
