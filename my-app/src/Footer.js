import React from 'react'; //import React library

// This is the footer, we will reuse this function a lot of time for other pages. 
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <address>
          Contact: <a href="mailto:coffee@gmail.com">coffee@gmail.com</a> Tel: <a href="tel:555-123-4567">(555)123-4567</a>.
        </address>
        <p>&copy; 2023 Coffee Ground. All rights reserved.</p>
      </div>
    </footer>
  );
}