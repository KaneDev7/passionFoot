import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'http://api.football-data.org/v4/'
const token : string = 'f4795734737a403fa516612c594c4928'

export function useFetch(url : string) {
    const [isloading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await axios.get(baseUrl+url, {
                    headers: {'X-Auth-Token': token
                    },
                })
                console.log('data', data)
                setData(data)
                setIsLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [url])

    return { data, isloading, error }
}
