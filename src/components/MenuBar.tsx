'use client'

import MenuIcon from './MenuIcon'
import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi'
import { BiLogoLinkedin, BiLogoGithub, BiHomeAlt } from 'react-icons/bi'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { TbSunMoon } from 'react-icons/tb'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function MenuBar() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [english, setEnglish] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const className = 'dark'
    const bodyClass = window.document.body.classList

    console.log('click')

    darkMode ? bodyClass.add(className) : bodyClass.remove(className)
  }, [darkMode, setDarkMode])

  return (
    <div>
      <div
        onClick={() => setMobileMenu(!mobileMenu)}
        className={` ${
          mobileMenu ? 'opacity-30' : 'opacity-100'
        } flex h-14 w-16 items-center justify-center bg-gray-200 hover:text-white hover:opacity-100 dark:bg-gray-900 dark:text-primary dark:hover:text-gray-100 md:hidden`}
      >
        {mobileMenu ? <FaArrowRight size="28" /> : <FaArrowLeft size="28" />}
      </div>
      <div
        className={`${
          mobileMenu ? '-left-20' : 'left-0'
        } fixed top-14 m-0 flex h-screen w-16 origin-left flex-col items-center bg-gray-200 text-secondary shadow-sm transition-all duration-300 dark:bg-gray-900 md:left-0 md:top-0 md:flex md:h-16 md:w-screen md:scale-100 md:flex-row md:justify-between`}
      >
        <div className="hidden p-2 text-3xl font-bold text-black dark:text-primary md:flex md:items-center md:justify-center">
          Easy CV
        </div>
        <div className="flex flex-col md:flex-row">
          <div onClick={() => setEnglish(!english)}>
            <MenuIcon
              Icon={
                english
                  ? () => <GiUsaFlag size="28" />
                  : () => <GiBrazilFlag size="28" />
              }
            />
          </div>
          <MenuIcon Icon={() => <BiLogoLinkedin size="28" />} />
          <MenuIcon Icon={() => <BiLogoGithub size="28" />} />
          <div onClick={() => setDarkMode(!darkMode)}>
            <MenuIcon Icon={() => <TbSunMoon size="28" />} />
          </div>
          <Link href={'/'}>
            <MenuIcon Icon={() => <BiHomeAlt size="28" />} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
