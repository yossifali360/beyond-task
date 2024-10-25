import React from 'react';
import styles from './Spinner.module.css';

export const Spinner = ({ sm, white }) => {
    return (
        <div className={`${styles.spinner} ${sm ? styles.small : ''} ${white ? styles.white : ''}`}>
            <span />
        </div>
    );
};
