import React from 'react'
import ThemeSwitch from '../ThemeSwitch';

const Navbar = () => {
  return (
    <div className="flex justify-between mx-8 my-16">
        <div>        
            <div className="font-['La_Belle_Aurore'] text-6xl text-stone-600 dark:text-stone-300">Cindy.T</div>
        </div>
        <div className="flex my-4 mr-4 font-light text-lg text-stone-700 dark:text-stone-300 gap-12">
            <p>About</p>
            <p>Projects</p>
            <p>Resume</p>
            <p>Contact</p>
        </div>
        <div className="my-4 mr-2">
            <ThemeSwitch />
        </div>
    </div>
  )
}

export default Navbar;