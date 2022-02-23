// layout.jsx
import React from "react";
import "./styles.scss";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="main-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-scroll">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Japanese Examples
            </a>

            <span class="nav-text">
              Dictionary with collaborative collection of real examples
            </span>

            <div class="ms-auto">
            <button type="button" class="signup_button test btn btn-link px-3 me-2  nav-links">
                Sign up
              </button>
              <button type="button" class="login_button test btn btn-link px-3 me-2 nav-links"> 
                Login
              </button>
            </div>
          </div>
        </nav>

        <div>{props.children}</div>

        <footer class="footer text-center text-black">
          <div class="container p-2 pb-0">
            <section class="mb-2">
              <a
                class="btn footer_buttons btn-lg m-2"
                role="button"
                rel="nofollow"
                target="_blank"
              >
                About
              </a>
              <a
                class="btn footer_buttons btn-lg m-2"
                target="_blank"
                role="button"
              >
                Contact me
              </a>
            </section>
          </div>

          <div
            class="text-center p-3"
            styleName={"backgroundColor: rgba(0, 0, 0, 0.2);"}
          >
            <a class="text-white">Copyright@2021 Japanese Examples</a>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;
