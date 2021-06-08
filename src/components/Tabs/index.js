import React, { useState } from 'react'
import classes from './styles.module.css'

export const Tabs = () => {
    const [tab, setTab] = useState(0);

    const tabs = [
        {
            name: "All"
        },
        {
            name: "My faves"
        },
        ]
    return (
        <div className={classes.tabsContainer}>
            {tabs.map((element, index) => (
                <button key={index} type="button" className={[tab === index ? classes.activeTab : null, classes.defaultTab].join(" ") } onClick={() => setTab(index)}>{element.name}</button>
            ))}
        </div>
    );
};