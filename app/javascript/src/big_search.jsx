// layout.jsx
import React from "react";
import "./big_search.scss";
import "./styles.scss";

const BigSearch = (props) => {
  return (
    <React.Fragment>
      <div className="intro">
        <div class="mask" styleName={"background-color: rgba(0, 0, 0, 0.8);"}>
          <div class="container d-flex align-items-center justify-content-center text-center h-100">
            <div class="border form border_big">
              <form action="/search">
             <div class="form-group"> 
                  <label for="exampleInputEmail1">
                    <h5 class="mb-4">
                      Search for a word in order to see translation of a word,
                      sample sentences and add your own example
                    </h5>
                  </label>
                  <div class="input_text">
                  <input           
                    type="text"
                    //class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter a word in English or Japanese"
                  ></input>
                </div>
                 </div>
                <button
                  type="submit"
                  class="form_button"
                >
                  SEARCH
                </button>
              </form>
           </div> 
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BigSearch;
