import React, { useState} from 'react';
import { CSSTransition } from 'react-transition-group';

const Header = () => {
    const [toggleBar, setToggleBar] = useState(false);


    const showToggleDrawer = () => {
        setToggleBar(!toggleBar);
      }

    const animationTiming = {
        enter: 400,
        exit: 400,
    } 
    

    return(
        <div>
        <header className="main-header">
            
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item"><a>home</a></li>
                    <li className="main-nav__item"><a>shop</a></li>
                    <li className="main-nav__item"><a>about</a></li>
                    <li className="main-nav__item"><a>contact</a></li>
                </ul>
            </nav>
                <CSSTransition 
                    mountOnEnter
                    unmountOnExit
                    in={toggleBar}
                    timeout={animationTiming}
                    classNames="open">
                        <nav className="mobile-nav">
                        <ul className="mobile-nav__items">
                                <li className="mobile-nav__item"><a>home</a></li>
                                <li className="mobile-nav__item"><a>shop</a></li>
                                <li className="mobile-nav__item"><a>about</a></li>
                                <li className="mobile-nav__item"><a>contact</a></li>
                        </ul>
                        </nav>

                </CSSTransition>
                
            <div className="header-button">
                <button className="toggle-button" onClick={showToggleDrawer}>
                {toggleBar ? <img src="./svgs/icon-close.svg" /> : <img src="./svgs/icon-hamburger.svg" />}
                </button>                           
            </div>
            {toggleBar ? null : <a href="/" className="main-header__brand">room</a>}
        </header>
        
    </div>
);
};

export default Header;