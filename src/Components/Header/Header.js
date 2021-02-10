import React from 'react';

const Header = () => {
    return(
        <div>
            <header className="main-header">
            <div>
                <button className="toggle-button">
                    <span className="toggle-button__bar"></span>
                    <span className="toggle-button__bar"></span>
                    <span className="toggle-button__bar"></span>
                </button>
                <a href="/" className="main-header__brand">room</a>
            </div>
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item"><a>home</a></li>
                    <li className="main-nav__item"><a>shop</a></li>
                    <li className="main-nav__item"><a>about</a></li>
                    <li className="main-nav__item"><a>contact</a></li>
                </ul>
            </nav>
        </header>
        <nav className="mobile-nav">
            <ul className="mobile-nav__items">
                    <li className="main-nav__item"><a>home</a></li>
                    <li className="main-nav__item"><a>shop</a></li>
                    <li className="main-nav__item"><a>about</a></li>
                    <li className="main-nav__item"><a>contact</a></li>
            </ul>
        </nav>
    </div>
);
};

export default Header;