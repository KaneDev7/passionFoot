import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FootballData from 'footballdata-api-v2';
import { API_KEY } from '../../constants';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import PlayerPosition from '../../components/playerPosition';




export default function SingleTeam() {
    const teamId = Number(useParams().teamId)
    const [singleTeam, setSingleTeam] = useState()
    const [players, setPlayers] = useState([])

    const competitionId = Number(useParams().competitionId)

    const navigate = useNavigate()


    useEffect(() => {
        const footballData = new FootballData(API_KEY);
        const fetchData = async () => {
            const data = await footballData.getTeam({
                id: teamId
            })
            setSingleTeam(data)
            setPlayers(data?.squad)
            console.log('player', data?.squad)
        }
        fetchData()
    }, [teamId])

    return (
        <div>
            <FaArrowAltCircleLeft color='#2563eb' size={30} onClick={() => navigate(`/detail/${competitionId}/equipes`)} />
            <div className='flex justify-center items-center flex-col p-10'>
                <img className='w-[200px] h-[200px]' src={singleTeam?.crestUrl as string} alt="" />
                <p className='text-centser text-[20px] font-medium mt-5'> {singleTeam?.name} </p>
            </div>
            <div className='mt-10 p-4'>
                <h1 className='text-2xl font-medium mb-7'>Liste des joueurs</h1>
                <ul className='grid  grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        players?.map(player => (
                            <li
                                className='flex items-center justify-between p-3 bg-[#0000000a] rounded-md '
                            // onClick={() => navigate(`/detail/:competitionId/player/${player?.id}`)}
                            >
                                <div className='flex items-center gap-3 '>
                                    <img src='/avatar.png' className='w-[50px] ' alt="" />
                                    <div>
                                        <p className='font-medium'>{player.name} </p>
                                        <p className='text-sm text-black/75'> {player.nationality} </p>
                                    </div>

                                </div>
                                <PlayerPosition position={player.position} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
