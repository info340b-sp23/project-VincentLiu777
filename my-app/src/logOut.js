import logo from './logo.svg';
import './App.css';
import { Link,Route,useNavigate } from "react-router-dom"
import axios from 'axios';

function LogOut() {
	const history = useNavigate();
	const LogOutFun = (e) =>{
		// this.props.history.push("/");
		let token = localStorage.getItem("token");
		console.log("1111"+token);
		axios({
			  method: 'post',
			  url: 'http://localhost:5005/admin/auth/logout',
			  headers: { 
				    "Content-Type":'application/json',
					"Authorization":"Bearer "+token ,
					}
			}).then(function (response) {
				if(response.status==200){//成功
					// localStorage.setItem("token",response.token);
					history('/' )
				}else{
					 alert(response.error);
				}
				console.log(response.error);
			  console.log(response);
			}).catch(function (error) {
				// alert(error.response.data.error);
			  console.log(error);
			});
	}
	const jumpToAdd = (e) =>{
		history('/AddQuestion' )
	}
  return (
    <div className="lougoutbox">
		
	  <div className="logout" onClick={LogOutFun}>LogOut</div>
	  <div className="add_txt" onClick={jumpToAdd}>Add Question</div>
	</div>
  );
}

export default LogOut;
