import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function Home() {
	document.title = 'Index';
	const initData = (e) => {
		console.log("11111");
		window.open('about:blank').location.href = "http://localhost:3000/detailed_page.html?oid=123";
	}
	initData();

	return (
		<div className="App">

		</div>
	);
}

export default Home;
