'use client'

import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Icon } from "@iconify/react";
import MobileSidebar from './MobileSidebar/MobileSidebar'

const Navbar = () => {
  const pathname = usePathname();
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      <nav className={`container ${styles.navbar}`}>
        <div className={styles.menu_icon} onClick={() => setOpenSidebar((prevState) => !prevState)}>
          <Icon
            icon="basil:menu-outline"
            color='#a3a3a3'
          />
        </div>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            width={110}
            height={72}
          />
        </Link>
        <div className={styles.navlinks}>
          {NavLinks.map((navlink) => {
            const isActive = pathname === navlink.route;
            return (
              <Link key={navlink.label} href={navlink.route} className={`${styles.navlink} ${isActive && styles.active}`}>
                {navlink.label}
              </Link>
            )
          })}
        </div>
        <Link href='/docs' className={'primary_btn'}>
          Docs
        </Link>
      </nav>
      <MobileSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  )
}

export default Navbar