import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Tilt } from "react-tilt";
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, linkedin } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex
      items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between 
      items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9
          h-9 object-contain"/>
          {/* <p className="text-white 
          text-[18px] font-bold cursor-pointer flex">
            Vir &nbsp;
            <span className="md:block hidden">|&nbsp; Patel
            </span>
          </p> */}
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((link) => (
              <li 
                key={link.id}
                className={`${
                  active == link.title
                    ?"text-white"
                    :"text-secondary"
                } hover:text-white text-[18px] font-medium
                cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
        <div className="sm:hidden flex flex-1
        justify-end items-center">
          <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className="w-[28px] h-[28px]
          object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
          />
          <div
          className={`${!toggle ? 'hidden' : 'flex'} p-6
          black-gradient absolute top-20 right-0 mx-4 my-2
          min-w[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start
            flex-col gap-4">
              {
                navLinks.map((link) => (
                  <li 
                    key={link.id}
                    className={`${
                      active == link.title
                        ?"text-white"
                        :"text-secondary"
                    } font-poppins font-medium cursor-pointer
                    text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="transparent"
        >
          <div className="w-[50px] h-[50px] mx-4
                rounded-full flex justify-center
                items-center cursor-pointer">
            <a href="https://www.linkedin.com/in/vir-patel/" target="_blank">
              <img 
                src={linkedin}
                alt="LinkedIn"
                className="w-[50px] h-[50px] object-contain cursor-pointer"
              />
            </a>
          </div>
        </Tilt>
    </nav>
  );
};

export default Navbar