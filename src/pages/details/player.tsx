import React, {useEffect, useState} from 'react'
import FootballData from 'footballdata-api-v2';
import { API_KEY } from '../../constants';
import { useParams } from 'react-router-dom';

export default function Player() {
const [player, setPlayer] = useState()
const playerId = Number(useParams().playerId)

  useEffect(()=> {
    const footballData = new FootballData(API_KEY);
    const fetchData = async () =>{
        const data = await footballData.getPlayer({
          id: playerId
        })
        // setPlayer()
        console.log('player', data)
    }
    fetchData()
  },[playerId])

  return (
    <div>
      player
    </div>
  )
}
