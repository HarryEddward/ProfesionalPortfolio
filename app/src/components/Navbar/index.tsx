import * as motion from "motion/react-client"
import Link from "next/link"
import React from 'react'
import { IoLanguage } from "react-icons/io5"
import { MdOutlineWbSunny } from "react-icons/md"

export default function Navbar() {
  return (
    <motion.div
    className='h-full w-full flex flex-col p-4 bg-white'
    initial={{
        translateX: '-100%'
    }}
    animate={{
        translateX: '0%'
    }}
    transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 30,
        damping: 20,
        mass: 1,
    }}
    >
        <div className='flex basis-1/6 items-center justify-center'>
            <motion.span
            className="text-2xl font-POPPINS_poppins_black"
            initial={{
                translateX: -300,
            }}
            animate={{
                translateX: 0,
            }}
            transition={{
                duration: 2,
                type: "spring",
                stiffness: 30,
                damping: 20,
                mass: 1,
            }}
            ><Link href="/home">Adrian;</Link></motion.span>
        </div>
        <div className="flex flex-row justify-center space-x-5 py-5 border-t-2">
            <MdOutlineWbSunny size={30} />
            <IoLanguage size={30} />
        </div>
        <div className='h-full'>
            <motion.nav
            className="w-full h-full align-middle border-2 flex justify-center items-center bg-white"
            initial={{
                translateY: '100%'
            }}
            animate={{
                translateY: 0,
            }}
            transition={{
                duration: 2,
                type: "spring",
                stiffness: 30,
                damping: 20,
                mass: 1,
            }}
            >                
                <ul className="w-full flex flex-col items-center list-none space-y-4 font-LATO_lato_bold text-left">
                    <li><Link href={'/about'}>About</Link></li>
                    <li><Link href={'/proyects'}>Proyectos</Link></li>
                    <li><Link href={'/librerys'}>Librerias</Link></li>
                    <li><Link href={'/crourses_taken'}>Cursos</Link></li>
                </ul>
            </motion.nav>
        </div>
    </motion.div>
  )
}
