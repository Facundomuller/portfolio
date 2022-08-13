import React from "react";
import ButtonMenu from "./ButtonMenu";

import './Header.css'

function Header() {

    return (

        <header className="appHeader">

            <div className="appLogo">
                <a href="/" className="appLogoLink">
                    FacundoMüller<span>.dev</span>
                </a>
            </div>

            <ButtonMenu />

        </header>

    )

}

export default Header