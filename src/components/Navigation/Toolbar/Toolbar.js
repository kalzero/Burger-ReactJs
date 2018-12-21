import React from "react";
import css from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
    <header className={css.Toolbar}>
        <div>MENU</div>
        <div className={css.Logo}>
            <Logo />
        </div>        
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;