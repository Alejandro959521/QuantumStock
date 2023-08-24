import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Body } from "../component/body.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [showLoginForm, setShowLoginForm] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false)

	/* LOGIN */
	const handleLoginClick = () =>{
		setShowLoginForm(!showLoginForm);
	};

	const handleCloseForm = () =>{
		setShowLoginForm(!showLoginForm);
	}
	
	/* SIGNUP */

	const handleSignUpClick = () => {
		setShowSignUp(!showSignUp);
	};

	const handleCloseFormSingUp = () => {
		setShowSignUp(!showSignUp);
	};

	/* CAMBIAR DE REGISTRO A SIGNUP */

	const handleChage = () => {
		handleCloseForm();
		setShowSignUp(true)
	}

	const handleChageLogin = () =>{
		handleCloseFormSingUp();
		setShowLoginForm(true)
	}


	return (
		<div className="Container vh-100 m-0 p-0">
			<div className="row">
				<div className="col">
					<Navbar onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
				</div>
			</div>	
			<div className="row">
				<div className="col">
			 		 <Body 
					 showLoginForm={showLoginForm} 
					 onClose={handleCloseForm}
					 showSignUp={showSignUp}
					 onCloseSignUp={handleCloseFormSingUp}
					 OnChageClick={handleChage}
					 OnChageClickLogin={handleChageLogin}
					 />
				</div>
			</div>	
			<div className="row">
				<div className="footerHome col">
					<Footer />
				</div>
			</div>
		</div>
	);
};
