import React, { useState } from 'react'
import classes from './styles.module.css'

export const Tabs = () => {
    const [tab, setTab] = useState(0);
    return (
        <div className={classes.tabsContainer}>
            <button type="button" className={[tab === 0 ? classes.activeTab : null, classes.defaultTab].join(" ") } onClick={() => setTab(0)}>All</button>
            <button type="button" className={[tab === 1 ? classes.activeTab : null ,classes.defaultTab].join(" ") } onClick={() => setTab(1)}>My faves</button>
        </div>
    );
};