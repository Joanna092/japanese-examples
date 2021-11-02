// layout.jsx
import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

    <a class="navbar-brand" href="#">Japanese Examples</a>
    
    <span class="navbar-text">
      Dictionary with collaborative collection of real examples
        </span>
    
 
<div class="ms-auto">
      <button type="button" class="btn btn-link px-3 me-2">
          Login
        </button>
        <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
   </div>

  </div>
</nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div>
          <span className="mr-3 text-secondary">Built by <a href="https://www.altcademy.com" target="_blank" rel="noopener noreferrer">Altcademy</a> with ☕ and 💜</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;