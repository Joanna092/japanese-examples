// layout.jsx
import React from "react";
import "./styles.scss";

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Japanese Examples
          </a>

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

      <div className="intro bg-image shadow-2-strong">
        <div class="mask" styleName={"background-color: rgba(0, 0, 0, 0.8);"}>
          <div class="container d-flex align-items-center justify-content-center text-center h-100">
            <div class="text-white">
              <h5 class="mb-4">Search for a word in order to see translation of a word, sample sentences and add your own example</h5>
              
              <a
                class="btn btn-outline-light btn-lg m-2"
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
                role="button"
              >
                Search
              </a>
             
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3">{props.children}</div>

      <footer class="bg-dark text-center text-white">
        <div class="container p-2 pb-0">
          <section class="mb-2">
            <a
              class="btn btn-outline-light btn-lg m-2"
              role="button"
              rel="nofollow"
              target="_blank"
            >
              About
            </a>
            <a
              class="btn btn-outline-light btn-lg m-2"
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
    </React.Fragment>
  );
};

export default Layout;
