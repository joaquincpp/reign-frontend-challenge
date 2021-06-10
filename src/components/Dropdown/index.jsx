import React, {
  useRef, useEffect, useState, useContext,
} from 'react';
import { AppContext } from '../Provider';
import classes from './styles.module.css';
import AngularLogo from '../../assets/angular-logo.png';
import ReactLogo from '../../assets/react-logo.png';
import VueLogo from '../../assets/vue-logo.png';

const Dropdown = () => {
  const [state, setState] = useContext(AppContext);
  const [dropdown, setDropdown] = useState(false);
  const wrapperRef = useRef(null);

  // Function that closes the dropdown when the user clicks elsewhere on the website.
  const useOutsideDetection = (ref) => {
    useEffect(() => {
      // Closes dropdown if clicked outside of it.
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
        }
      };
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
      // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideDetection(wrapperRef);

  // Handles the option selection to store it on the global context and localStorage,
  // and closes the dropdown.
  const setOptionHandler = (optionName) => {
    setState({ ...state, option: optionName, page: 1 });
    setDropdown(false);
  };

  // Available options for the dropdown.
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
      {/* Shows dropdown only on "All" tab. */}
      {state.tab === 'All' && (
        <>
          {/* Dropdown button that shows the selected option or the default placeholder. */}
          <button
            type="button"
            className={classes.dropdownInput}
            onClick={() => setDropdown(!dropdown)}
          >
            <span className={classes.dropdownInputText}>
              {state.option === '' ? 'Select your news' : state.option}
            </span>
            <span className={[classes.arrow, classes.down].join(' ')} />
          </button>
          {/* Shows the dropdown options in case the dropdown button was clicked. */}
          {dropdown === true && (
          <div className={classes.optionsSelector} ref={wrapperRef}>
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
