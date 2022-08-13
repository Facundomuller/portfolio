import React, { useState } from "react";

import "./ButtonMenu.css";

function ButtonMenu() {

    const [open, setMenu] = useState("")

    const clickMenu = () => {
        switch (open) {
            case "":
                setMenu("open")
                break;
            default:
                setMenu("")
                break;
        }
    }
    
    return (
        <>
            <div className={`buttonMenu ${open}`} onClick={clickMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`menu ${open}`}>
                
            </div>
        </>
    )

}

export default ButtonMenu