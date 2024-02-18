import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import FooterLinks from './FooterLinks/FooterLinks'
import Iconify from "../iconify/iconify";

const Footer = () => {
    const socialLinks = [
        { icon: "ri:linkedin-box-fill", href: '/www.linkedin.com' },
        { icon: "ri:twitter-x-fill", href: '/www.twitter.com' },
        { icon: "ri:facebook-circle-fill", href: '/www.facebook.com' },
        { icon: "ri:youtube-fill", href: '/www.youtube.com' },
        { icon: "ri:instagram-fill", href: '/www.instagram.com' },
    ];
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer_container}`}>
                <div className={styles.footer_row1}>
                    <div className={styles.company_info}>
                        <Link href='/'>
                            <Image
                                src='/logo-white.png'
                                alt='logo'
                                width={77}
                                height={42}
                            />
                        </Link>
                        <p>
                            751 Street Fields, Yoddbury
                            <br />
                            Alaska, 38956. Mobile
                            <br />
                            (+1) 123456789
                        </p>
                    </div>
                    <FooterLinks />
                </div>
                <div className={styles.footer_row2}>
                    <p className={styles.copy_right}>
                        @2024 AJAMaker. All rights reserved. | Privacy policy | Terms and Conditions
                    </p>
                    <div className={styles.social_links}>
                        {socialLinks.map((link, index) => (
                            <Link href={link.href} key={index}  className={styles.social_link}>
                                <Iconify
                                    icon={link.icon}
                                    color="#fff"
                                    width={20}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.divider} />
            </div>
        </footer>
    )
}

export default Footer