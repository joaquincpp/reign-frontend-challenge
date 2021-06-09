import React, { useState, useContext } from 'react';
import { AppContext } from '../Provider';
import classes from './styles.module.css';
import AngularLogo from '../../assets/angular-logo.png';
import ReactLogo from '../../assets/react-logo.png';
import VueLogo from '../../assets/vue-logo.png';

const Dropdown = () => {
  const [state, setState] = useContext(AppContext);
  const [dropdown, setDropdown] = useState(false);

  const setOptionHandler = (optionName) => {
    setState({ ...state, option: optionName, page: 1 });
    setDropdown(false);
  };

  const options = [
    {
      icon: AngularLogo,
      name: 'Angular',
    },
    {
      icon: ReactLogo,
      name: 'ReactJS',
    },
    {
      icon: VueLogo,
      name: 'VueJS',
    },
  ];

  return (
    <div className={classes.dropdownContainer}>
      {state.tab === 'All' && (
        <>
          <button type="button" className={classes.dropdownInput} onClick={() => setDropdown(!dropdown)}>
            <span className={classes.dropdownInputText}>
              {state.option === '' ? 'Select your news' : state.option}
            </span>
            <span className={[classes.arrow, classes.down].join(' ')} />
          </button>
          {dropdown === true && (
          <div className={classes.optionsSelector}>
            {options.map((element) => (
              <div
                key={element.name}
                className={classes.option}
                onClick={() => setOptionHandler(element.name)}
                aria-hidden="true"
              >
                <span className={classes.optionIcon}>
                  <img className={classes.optionIconImage} src={element.icon} alt={element.name} />
                </span>
                <span className={classes.optionText}>{element.name}</span>
              </div>
            ))}
          </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dropdown;
