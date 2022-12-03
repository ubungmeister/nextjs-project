import classes from './MainNavigation.module.css';
import Link from "next/link";
import logo from  "../../images/logo.png"
import Image from 'next/image';
function MainNavigation() {

  return (
      <nav>
          <ul className='flex justify-between  pl-28 pr-28 pb-3 pt-0 bg-gray-50'>
              <div className="pt-5 flex gap-8 justify-center ">
                  <input type="text" className="input-text rounded-full border-none pr-1 pl-2 outline-gray-300"  placeholder="Search..."/>
              </div>
              <a className="pt-5 flex gap-8 justify-center shrink w-80:order-2 " href='/' >
                  Events
              </a>
              <div className='pt-5 flex gap-8'>
                  <li className='px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-red-500'>
                      <Link href='/'>All Events</Link>
                  </li>
                  <li className='px-4 py-2 font-bold text-white bg-blue-300 rounded-full hover:bg-red-500'>
                      <Link href='/newEvent'>Add New Event</Link>
                  </li>
              </div>

        </ul>
      </nav>
  );
}

export default MainNavigation;
