import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className='container mx-auto relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-50 mb-3'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <div className='space-x-2'>
              <SocialIcon
                url='https://facebook.com'
                bgColor='transparent'
                fgColor='#059669'
              />
              <SocialIcon
                url='https://instagram.com'
                bgColor='transparent'
                fgColor='#059669'
              />
              <SocialIcon
                network='email'
                bgColor='transparent'
                fgColor='#059669'
              />
            </div>
            <button
              className='text-gray-80 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <AiOutlineMenu color='#059669' />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none md:ml-auto'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-80 hover:opacity-75'
                  href='#about'
                >
                  <span className='ml-2'>About Us</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-80 hover:opacity-75'
                  href='#services'
                >
                  <span className='ml-2'>Services Offered</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-80 hover:opacity-75'
                  href='#ourwork'
                >
                  <span className='ml-2'>Our Work</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
