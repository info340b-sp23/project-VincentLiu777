import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import Home from './Home'

function Register() {
		document.title = 'Register';
		//无状态组件获取input的值
		let usernameid;   //用户名输入框的值
		let passwordid;   //密码输入框的值
		let email;
	const history = useNavigate();
	const register = (e) =>{
		// if (e) e.preventDefault();  //该方法将通知 Web 浏览器不要执行与事件关联的默认动作(如果存在这样的动作)
		const username = usernameid.value;   //赋值
		const password = passwordid.value;  
		//在此做ajax提交
		const emailVal = email.value;
		console.log(username+" "+password+" "+emailVal);
		axios({
			  method: 'post',
			  url: 'http://localhost:5005/admin/auth/register',
			  headers: {
			  		'Content-Type':'application/json'
			  	},
			  data: { // 这里data中的参数为requestBody参数，服务端需要使用@RequestBody注解进行获取
				email: emailVal,
				password: password,
				name:username
			  }
			}).then(function (response) {
				if(response.status==200){//成功
					axios({
						  method: 'post',
						  url: 'http://localhost:5005/admin/auth/login',
						  headers: {
						  		'Content-Type':'application/json'
						  	},
						  data: { // 这里data中的参数为requestBody参数，服务端需要使用@RequestBody注解进行获取
							email: emailVal,
							password: password
						  }
						}).then(function (response) {
							if(response.status==200){//成功
								localStorage.setItem("token",response.data.token);
								history('/Home' )
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
		<p>E-mail：<input type="text" ref={input => email= input}></input></p>
		<p>user Name<input type="text" ref={input => usernameid= input}></input></p>
		<p>password：<input type="password" ref={input => passwordid= input}></input></p>
		<a href="#"
		  className="App-link"
		  onClick= {register}
		>
		  Submit
		</a>
	  </header>
	</div>
  );
}

export default Register;
