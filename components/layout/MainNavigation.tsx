import Link from "next/link";
import Image from 'next/image'
import logo from '../../images/logoticket.png'
function MainNavigation() {

  return (
      <nav>
          <ul className='flex justify-between pl-40 pr-40 pb-3 pt-0 bg-gray-50'>

              <Link className="pt-5 flex gap-2 justify-center shrink w-80:order-2 " href='/' >
                  <Image src={logo} alt={'logo'} width={50} height={50}/>
                  <h1 className='text-center text-2xl font-semibold text-gray-700 hover:text-blue-400'>GO OUT</h1>
                  <p className='pt-1 italic ml-2 text-gray-400  hover:text-blue-400'>city events you can't miss </p>
              </Link>
              <div className='pt-5 flex gap-8'>
                  <li className='px-4 py-2 font-bold text-white bg-blue-300 rounded-md text-xl	 hover:bg-blue-400 '>
                      <Link href='/'>All Events</Link>
                  </li>
                  <li className='px-4 py-2 font-bold  text-white bg-blue-300 rounded-md	text-xl hover:bg-blue-400'>
                      <Link href='/newEvent'>Add Event</Link>
                  </li>
              </div>

        </ul>
      </nav>
  );
}

export default MainNavigation;
