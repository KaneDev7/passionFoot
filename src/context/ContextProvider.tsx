import React, { useState, useEffect, createContext } from 'react'
import { API_KEY } from '../constants'
import FootballData from 'footballdata-api-v2';

export const GlobalContext = createContext(null)

export default function ContextProvider({ children }) {
    const [currentMatchday, setCurrentMatchday] = useState<number | null>(null)
    const [selectedMatchDay, setSelectedMatchDay] = useState<number | null>(null)
    const [totalMatchDay, setTotalMatchDay] = useState<number | null>(38)
    const [competionTeams, setCompetionTeams] = useState([])
    const [competitionId, setCompetitionId] = useState(2)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const footballData = new FootballData(API_KEY);
        setIsLoading(true)
        const fetchData = async () => {
          try {
            const data = await footballData.getCompetition({ id: 2021 })
            setSelectedMatchDay(data?.currentSeason?.currentMatchday)
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
