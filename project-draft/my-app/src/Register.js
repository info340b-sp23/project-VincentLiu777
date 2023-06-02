import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import Home from './Home'

function Register() {
	document.title = 'Register';

	let usernameid;
	let passwordid;
	let email;
	const history = useNavigate();
	const register = (e) => {

		const username = usernameid.value;
		const password = passwordid.value;

		const emailVal = email.value;
		console.log(username + " " + password + " " + emailVal);
		axios({
			method: 'post',
			url: 'http://localhost:5005/admin/auth/register',
			headers: {
				'Content-Type': 'application/json'
			},
			data: {
				email: emailVal,
				password: password,
				name: username
			}
		}).then(function (response) {
			if (response.status == 200) {
				axios({
					method: 'post',
					url: 'http://localhost:5005/admin/auth/login',
					headers: {
						'Content-Type': 'application/json'
					},
					data: {
						email: emailVal,
						password: password
					}
				}).then(function (response) {
					if (response.status == 200) {
						localStorage.setItem("token", response.data.token);
						history('/Home')
					}
					console.log(response);
				}).catch(function (error) {
					console.log(error);
				});
			}
			console.log(response);
		}).catch(function (error) {
			console.log(error);
		});
	}
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>E-mail：<input type="text" ref={input => email = input}></input></p>
				<p>user Name<input type="text" ref={input => usernameid = input}></input></p>
				<p>password：<input type="password" ref={input => passwordid = input}></input></p>
				<a href="#"
					className="App-link"
					onClick={register}
				>
					Submit
				</a>
			</header>
		</div>
	);
}

export default Register;
