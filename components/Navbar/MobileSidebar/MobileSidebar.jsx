import React, { useEffect } from 'react'
import styles from './MobileSidebar.module.scss'
import { Icon } from "@iconify/react";
import { NavLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const MobileSidebar = ({ openSidebar, setOpenSidebar }) => {
    const pathname = usePathname();

    return (
        <div className={`${styles.sidebar} ${openSidebar && styles.open_sidebar}`}>
            <div className={styles.close_icon} onClick={() => setOpenSidebar(false)}>
                <Icon
                    icon="material-symbols:close"
                    color='#a3a3a3'
                />
            </div>
            <div className={styles.mobile_navlinks}>
                {NavLinks.map((navlink) => {
                    const isActive = pathname === navlink.route;
                    return (
                        <Link
                            key={navlink.label}
                            href={navlink.route}
                            className={`${styles.navlink} ${isActive && styles.active}`}
                            onClick={() => setOpenSidebar(false)}
                        >
                            {navlink.label}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default MobileSidebar