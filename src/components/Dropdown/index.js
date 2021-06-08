import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../Provider';
import classes from './styles.module.css'
import AngularLogo from '../../assets/angular-logo.png';
import ReactLogo from '../../assets/react-logo.png';
import VueLogo from '../../assets/vue-logo.png';

export const Dropdown = () => {
    const [state, setState] = useContext(AppContext)
    const [dropdown, setDropdown] = useState(false);

    const setOptionHandler = (optionName) => {
        setState({...state, option: optionName, page: 1})
        setDropdown(false)
    }

    useEffect(() => {
      }, [state]);

    const options = [
        {
            icon: AngularLogo,
            name: "Angular"
        },
        {
            icon: ReactLogo,
            name: "ReactJS"
        },
        {
            icon: VueLogo,
            name: "VueJS"
        },
    ]
    
    return (
        <div className={classes.dropdownContainer}>
            <button type="button" className={classes.dropdownInput} onClick={() => setDropdown(!dropdown)}>
                <span className={classes.dropdownInputText}>
                    {state.option === undefined ? "Select your news" : state.option}
                </span>
                <span className={[classes.arrow, classes.down].join(" ")} />
            </button>
            {dropdown === true && (
                <div className={classes.optionsSelector}>
                    {options.map((element, index) => (
                        <div key={index} className={classes.option} onClick={() => setOptionHandler(element.name)}>
                            <span className={classes.optionIcon}>
                                <img className={classes.optionIconImage} src={element.icon} alt={element.name}/>
                            </span>
                            <span className={classes.optionText}>{element.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};