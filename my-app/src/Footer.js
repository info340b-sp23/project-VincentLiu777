import React from 'react'; //import React library
import 'bootstrap/dist/css/bootstrap.css';

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