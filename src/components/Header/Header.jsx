import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";


const Header = props => {
    return     <header className={s.header}>
        <img src="https://cdn.pixabay.com/photo/2014/04/02/17/01/logo-307673_1280.png" alt="logo"/>

        <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login}  - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>LOGIN</NavLink>}

        </div>


    </header>
}

export default  Header;