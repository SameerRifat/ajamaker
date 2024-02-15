import React from 'react';
import styles from './FooterLinks.module.scss';
import Link from 'next/link';

const FooterLinks = () => {
    const linkData = [
        {
            category: 'Company',
            links: [
                { title: 'About Us', href: '/about-us' },
                { title: 'Contact Us', href: '/contact-us' },
                { title: 'Blogs', href: '/blogs' },
            ],
        },
        {
            category: 'Company',
            links: [
                { title: 'About Us', href: '/about-us' },
                { title: 'Contact Us', href: '/contact-us' },
                { title: 'Blogs', href: '/blogs' },
            ],
        },
        {
            category: 'Company',
            links: [
                { title: 'About Us', href: '/about-us' },
                { title: 'Contact Us', href: '/contact-us' },
                { title: 'Blogs', href: '/blogs' },
            ],
        },
    ];

    const renderLinks = (links) => (
        <ul className={styles['links']}>
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href}>{link.title}</Link>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <div className={styles.footer_links}>
                {linkData.map((category, index) => (
                    <div key={index} className={styles.links_category}>
                        <h3 className={styles['links_heading']}>{category.category}</h3>
                        {renderLinks(category.links)}
                    </div>
                ))}
            </div>
        </>
    );
};

export default FooterLinks;
