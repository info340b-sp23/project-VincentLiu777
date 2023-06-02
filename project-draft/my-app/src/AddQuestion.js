import logo from './logo.svg';
import React from 'react';
import './App.css';
import Register from './Register';
import axios from 'axios';
import { Link, Route, useNavigate } from "react-router-dom"

function AddQuestion() {
	document.title = 'AddQuestion';

	let gameNameVal;
	let passwordid;
	const history = useNavigate();
	const login = (e) => {
		const gameName = usernameid.value;
		const password = passwordid.value;

		axios({
			method: 'post',
			url: 'http://localhost:5005/admin/auth/login',
			headers: {
				'Content-Type': 'application/json'
			},
			data: {
				email: username,
				password: password
			}
		}).then(function (response) {
			if (response.status == 200) {
				console.log();
				localStorage.setItem("token", response.data.token);
				console.log("1111" + localStorage.getItem("token"));
				history('/Home')
			} else {
				alert(response.error);
			}
			console.log(response);
		}).catch(function (error) {
			// alert(error.response.data.error);
			usernameid.value = "";
			passwordid.value = "";
			console.log(error);
		});
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Game name<input type="text" ref={input => gameNameVal = input}></input></p>
				<p><button >Add Question</button></p>
				<a
					href="Register"
					className="App-link"
				>
					Submit
				</a>
			</header>
		</div>
	);
}

export default AddQuestion;
