import { useParams, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function DetailNav() {
  const location = useLocation()
  const competitionId = Number(useParams().competitionId)


  const currentPath = location.pathname.split('/')[3]
  const matchActif = currentPath === undefined
  const scoreActif = currentPath === 'score'
  const classmentActif = currentPath === 'classement'
  const equipesActif = currentPath === 'equipes'
  const playerActif = currentPath === 'player'


  return (
    <div className=''>
      <div className='bg-black text-white '>
        <ul className='flex capitalize'>
        
          <Link to={`/detail/${competitionId}`}>
            <li className={`${matchActif && 'bg-blue-600'} p-3 flex-1 hover:bg-blue-600 `} >  match  </li>
          </Link>

          <Link to={`/detail/${competitionId}/classement`}>
            <li className={`${classmentActif && 'bg-blue-600'} p-3 flex-1 hover:bg-blue-600 `} > classement </li>
          </Link>

          <Link to={`/detail/${competitionId}/equipes`}>
            <li className={`${equipesActif && 'bg-blue-600'} p-3 flex-1 hover:bg-blue-600 `} >  equipes </li>
          </Link>

          <Link to={`/detail/${competitionId}/score`}>
            <li className={`${scoreActif && 'bg-blue-600'} p-3 flex-1  hover:bg-blue-600`} >  Score  </li>
          </Link>

        </ul>
      </div>
    </div>
  )
}
