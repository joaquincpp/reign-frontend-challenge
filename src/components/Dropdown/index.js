import React, { useState, useEffect } from 'react'
import classes from './styles.module.css'
import AngularLogo from '../../assets/angular-logo.png';
import ReactLogo from '../../assets/react-logo.png';
import VueLogo from '../../assets/vue-logo.png';

export const Dropdown = () => {
    let query = localStorage.getItem('reign.localStorage');
    const [option, setOption] = useState(
        (query && JSON.parse(query).query !== "") ? JSON.parse(query).query : "");
    const [dropdown, setDropdown] = useState(false);

    const setOptionHandler = (optionName) => {
        setOption(optionName)
        setDropdown(false)
    }

    useEffect(() => {
        let json = { query:  option };
        localStorage.setItem('reign.localStorage', JSON.stringify(json));
      }, [option]);

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
                    {option === "" ? "Select your news" : option}
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