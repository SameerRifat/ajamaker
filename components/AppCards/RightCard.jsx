import React from 'react'
import styles from './AppCards.module.scss'

const RightCard = ({hero = false}) => {
    return (
        <div className={`${styles.card} ${styles.right_card} ${hero ? styles.hero_right_card : styles.getStarted_right_card}`}>
            <small>Total Balance</small>
            <div>
                <span>$20,000 USD</span>
                <img src="/balance_icon.png" alt="icon" />
            </div>
        </div>
    )
}

export default RightCard