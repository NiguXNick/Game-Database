import Link from 'next/link'
import GameIcon from '../public/game-icon.svg'

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-violet-500 to-fuchsia-500 p-6 border-4 border-black">
      <Link href='/'>
        <a className="flex items-center text-white mr-6">
          <GameIcon/>
        </a>
      </Link>
      <span className='text-xl text-white font-bold uppercase tracking-wide'>
            Game Database
      </span>
    </nav>
  )
}

export default Navigation;