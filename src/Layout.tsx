import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import ContextProvider from './context/ContextProvider'

export default function Layout() {
    return (
        <ContextProvider>
            <NavBar />
            <div className='globalWidth'>
                <Outlet />
            </div>
        </ContextProvider>

    )
}
