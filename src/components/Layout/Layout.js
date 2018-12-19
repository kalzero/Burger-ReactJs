import React from "react";
import css from "./Layout.css";

const layout = (props) => (
    <>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className={css.Content}>
            {props.children}
        </main>
    </>
);

export default layout;