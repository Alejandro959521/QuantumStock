import React, { useState } from "react";
import { Login } from "./login.jsx";
import { SignUp } from "./SignUp.jsx";
import "../../styles/body.css";
import homeImageUrl from "../../img/HomeTechnology.jpg";

export const Body = ({showLoginForm, showSignUp, onClose, onCloseSignUp, OnChageClick}) => {

    return(
        <div className="bodycontainer">
            <div className="leftside">
                <h1>¡Controla, supervisa y prospera!</h1>
                <p>La fórmula de éxito para tu inventario está aquí</p>
            </div>
            <div className="rightside">
                <img className="homeImage" src={homeImageUrl} />
            </div>
            {showLoginForm && <Login onCloseForm={onClose} onChangeClick={OnChageClick}/>}
            {showSignUp && <SignUp onCloseSignUpForm={onCloseSignUp}/> }
        </div>
    );
};