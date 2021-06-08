import React, { useContext } from 'react'
import { AppContext } from '../Provider';
import classes from './styles.module.css'

export const Tabs = () => {
    const [state, setState] = useContext(AppContext)

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
                <button key={index} type="button" className={[state.tab === element.name ? classes.activeTab : null, classes.defaultTab].join(" ") } onClick={() => setState({...state, tab: element.name})}>{element.name}</button>
            ))}
        </div>
    );
};