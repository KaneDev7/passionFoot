import { useState, useEffect, createContext, PropsWithChildren } from 'react'
import { API_KEY } from '../constants'
import FootballData from 'footballdata-api-v2';
import { Team, TeamResult } from 'footballdata-api-v2/dist/results';

export const GlobalContext = createContext(null)

export type ValueContext = {
  currentMatchday : number;
  selectedMatchDay : number;
  totalMatchDay : number;
  competitionId : number;
  competionTeams : number;
  setCurrentMatchday :  React.Dispatch<React.SetStateAction<number | null>>,
  setSelectedMatchDay :  React.Dispatch<React.SetStateAction<number | null>>,
  setCompetionTeams :  React.Dispatch<React.SetStateAction<TeamResult[]>>,
  setTotalMatchDay :  React.Dispatch<React.SetStateAction<number | null>>,
  setCompetitionI :  React.Dispatch<React.SetStateAction<number | null>>
}


export default function ContextProvider({ children } : PropsWithChildren<{}>) {
    const [currentMatchday, setCurrentMatchday] = useState<number | null >(null) 
    const [selectedMatchDay, setSelectedMatchDay] = useState<number | null>(null) 
    const [totalMatchDay, setTotalMatchDay] = useState<number | null>(38)
    const [competitionId, setCompetitionId] = useState(2)
    const [competionTeams, setCompetionTeams] =useState<Team[]>([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const footballData = new FootballData(API_KEY);
        setIsLoading(true)
        const fetchData = async () => {
          try {
            const data = await footballData.getCompetition({ id: 2021 })
            const currentMatchday = data?.currentSeason?.currentMatchday as number | null
            setSelectedMatchDay(currentMatchday)
            setIsLoading(false)
          } catch (error) {
            console.log(error)
          }
        }
        fetchData()
    }, [])
    if(!isLoading)
    return (
        <GlobalContext.Provider value={{
            currentMatchday,
            selectedMatchDay,
            totalMatchDay,
            competitionId,
            competionTeams,
            setCurrentMatchday,
            setSelectedMatchDay,
            setCompetionTeams,
            setTotalMatchDay,
            setCompetitionId
        }} >
            {children}
        </GlobalContext.Provider  >
    )
}
