import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/ContextProvider'

export default function MatchFilter() {
    const { currentMatchday, setSelectedMatchDay, totalMatchDay } = useContext(GlobalContext)
    const [matchDays, setMatchDays] = useState<number[]>([])
    const [value, setValue] = useState(currentMatchday)

    const handleChange = (e) => {
        setValue(e.target.value)
        setSelectedMatchDay(e.target.value)
    }

    useEffect(() => {
        let matchDaysArr = []
        for (let day = 1; day <= totalMatchDay; day++) {
            matchDaysArr.push(day)
        }
        setMatchDays(matchDaysArr)
    }, [currentMatchday, totalMatchDay])

    return (
        <div className='py-5'>
            <select
                value={value}
                onChange={handleChange}
                className='p-2 border '>
                {
                    matchDays.map(day => (
                        <option
                            key={day}
                            selected={day === currentMatchday ? true : false}
                            value={day}
                        >
                            Journée {day}
                        </option>
                    ))
                }
            </select>

        </div>
    )
}
