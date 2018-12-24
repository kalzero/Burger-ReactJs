import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import css from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
    
    let attachedClasses = [css.SideDrawer, css.Close];

    if (props.open) {
        attachedClasses = [css.SideDrawer, css.Open];
    }

    return (
        <>
        <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                <div className={css.Logo}>            
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>   
        </>     
    );
};

export default sideDrawer;