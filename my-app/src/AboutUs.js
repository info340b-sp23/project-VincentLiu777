import React from 'react'; //import React library
import Navbar from './Navbar';
import Footer from './Footer';
import Profilecard from './AboutMain';
import 'bootstrap/dist/css/bootstrap.css';

// This is the homepage. 
function AboutUs() {
  return (
    <div>
      <Navbar />
      <Profilecard />
      <Footer />
    </div>
  );
}

export default AboutUs;