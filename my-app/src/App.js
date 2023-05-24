import React from 'react';
import './App.css';
import axios from 'axios';
import { Link,Route,useNavigate } from "react-router-dom"


function App() {
		document.title = 'Index';
	window.open('about:blank').location.href="http://localhost:3000/detailed_page.html?oid=123";
  return (
    <div className="App">
	</div>
  );
}

export default App;
