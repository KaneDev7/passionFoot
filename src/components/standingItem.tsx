import axios from 'axios'
import {useEffect, useState, useContext} from 'react'
import { GlobalContext } from '../context/ContextProvider'
import { StandingResult, Team } from 'footballdata-api-v2/dist/results';
import { StandingLiveScoreType } from '../typescript/Standing';

type StandingItemPropos = {
    standing : StandingLiveScoreType
}

function hasCommonElement(arr1, arr2) {
    const set = new Set(arr1);
    for (let i = 0; i < arr2.length; i++) {
        if (set.has(arr2[i])) {
            return true; // Si une correspondance est trouvée, retourner true
        }
    }
    return false; 
}

export default function StandingItem({ standing }: StandingItemPropos) {
    const [imgSrc, setImgSrc] = useState <string | undefined >('')
  const { competionTeams } : {competionTeams : Team[] } = useContext(GlobalContext)


    useEffect(() => {
       const matchTeam = competionTeams?.filter((item) => hasCommonElement(standing?.name.split(' '),[item?.shortName]) ||
        item?.shortName === standing?.name) 
       setImgSrc(matchTeam[0]?.crestUrl as string | undefined)
      },[])


    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {standing?.rank}
            </th>
            <td className="px-6 py-4 flex gap-5 items-center">
                <img width={30} height={30} src={imgSrc}  alt="" />
                {standing?.name}
            </td>
            <td className="px-6 py-4">
                {standing?.matches}
            </td>
            <td className="px-6 py-4">
                {standing?.won}
            </td>
            <td className="px-6 py-4">
                {standing?.lost}
            </td>
            <td className="px-6 py-4">
                {standing?.drawn}
            </td>
            <td className="px-6 py-4">
                {standing?.goals_scored}
            </td>
            <td className="px-6 py-4">
                {standing?.goals_conceded}
            </td>
            <td className="px-6 py-4">
                {standing?.goal_diff}
            </td>
            <td className="px-6 py-4">
                {standing?.points}
            </td>
        </tr>
    )
}
