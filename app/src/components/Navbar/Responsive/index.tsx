"use client";

import React, { useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'

export default function ResponsiveNavbar() {

    const [isOpen, setOpen] = useState(false)
    return (
        <div className='lg:hidden w-full flex justify-end bg-gray-900 mb-3 py-4 pr-4 rounded-xl'>
            <Hamburger color='white' toggled={isOpen} toggle={setOpen} />
        </div>
    )
}
