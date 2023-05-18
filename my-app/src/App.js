import React from 'react'; //import React library
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Homemain';
import 'bootstrap/dist/css/bootstrap.css';

// import { Review } from './Homemain';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

