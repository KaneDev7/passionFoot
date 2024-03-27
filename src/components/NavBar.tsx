import {Link} from 'react-router-dom' 

export default function NavBar() {
  return (
    <div className='bg-blue-800 text-white p-5 mb-20'>
     <div className='globalWidth flex justify-between items-center'>
     <Link to='/'>  <h1 className='text-4xl font-bold'>PassionFoot</h1></Link> 
      <ul className='flex gap-5 text-white'>
        <li><Link to='/'> Accueil </Link> </li>
        <li><Link to='/detail/2021'> Detail </Link> </li>
      </ul>
     </div>
    </div>
  )
}
