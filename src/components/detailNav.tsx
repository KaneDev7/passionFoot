import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function DetailNav() {
  const location = useLocation()
  const id = Number(useParams().id)

  const currentPath = location.pathname.split('/')[3]
  const scoreActif = currentPath === undefined
  const matchActif = currentPath === 'match'
  const classmentActif = currentPath === 'classement'
  const equipesActif = currentPath === 'equipes'
  const playerActif = currentPath === 'player'


  return (
    <div className=''>
      <div className='bg-black text-white '>
        <ul className='flex '>
          <Link to={`/detail/${id}`}>
            <li className={`${scoreActif && 'bg-blue-600'} p-3 flex-1  hover:bg-blue-600`} >  Score  </li>
          </Link>
          <Link to={`/detail/${id}/match`}>
            <li className={`${matchActif && 'bg-blue-600'} p-3 flex-1 hover:bg-blue-600 `} >  match  </li>
          </Link>

          <Link to={`/detail/${id}/classement`}>
            <li className={`${classmentActif && 'bg-blue-600'} p-3 flex-1 hover:bg-blue-600 `} > classement </li>
          </Link>

          <Link to={`/detail/${id}/equipes`}>
            <li className={`${equipesActif && 'bg-blue-600'} p-3 flex-1 hover:bg-blue-600 `} >  equipes </li>
          </Link><Link to={`/detail/${id}/player`} >
            <li className={`${playerActif && 'bg-blue-600'} p-3 flex-1 hover:bg-blue-600 `} >  Joueur </li>

          </Link>
        </ul>
      </div>
    </div>
  )
}
