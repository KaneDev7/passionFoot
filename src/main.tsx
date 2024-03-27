import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.js'
import Home from './pages/home.js'
import Detail from './pages/details/detail.js'
import Score from './pages/details/score.js'
import Match from './pages/details/match.js'
import Classement from './pages/details/classement.js'
import Equipes from './pages/details/equipes.js'
import Player from './pages/details/player.js'
import SingleTeam from './pages/details/singleTeam.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/',
        element: <Detail />,
        children: [
          {
            path: '/detail/:competitionId',
            element: <Match />,
          },
          {
            path: '/detail/:competitionId/classement',
            element: <Classement />,
          },
          {
            path: '/detail/:competitionId/equipes',
            element: <Equipes />,
          },
          {
            path: '/detail/:competitionId/equipes/team/:teamId',
            element : <SingleTeam/>
          },
          {
            path: '/detail/:competitionId/score',
            element: <Score />,
          },
          {
            path: '/detail/:competitionId/player/:palyerId',
            element: <Player />,
          },
        ]
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
