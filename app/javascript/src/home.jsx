// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona2.jpg";
import BigSearch from "./big_search";
import NewExamples from "./home_files/new_examples";
import BestExamples from "./home_files/best_examples";
import WeekExample from "./home_files/week_example";

import "./styles.scss";
import "./home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button_one: true,
      button_two: false,
      button_three: false,
      selection: "button_one",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    //Change colors of the active button
    this.setState({
      selection: e.target.id,
    });

    //Setting state and a callback function
    if (e.target.id === "button_one") {
      this.setState({ button_one: true });
      this.setState({ button_two: false });
      this.setState({ button_three: false });
    }
    if (e.target.id === "button_two") {
      this.setState({ button_one: false });
      this.setState({ button_two: true });
      this.setState({ button_three: false });
    }
    if (e.target.id === "button_three") {
      this.setState({ button_one: false });
      this.setState({ button_two: false });
      this.setState({ button_three: true });
    }
  }

  render() {
    const { selection } = this.state;

    return (
      <Layout>
        <BigSearch />

        <div id="react-application">
          <div class="main-container gradient">
            <div className="text-align">
              <button
                id="button_one"
                onClick={this.handleClick}
                type="button"
                className={
                  selection === "button_one"
                    ? "example_button btn active"
                    : "example_button btn"
                }
              >
                Example of the week
              </button>
              <button
                id="button_two"
                onClick={this.handleClick}
                type="button"
                className={
                  selection === "button_two"
                    ? "example_button btn active"
                    : "example_button btn"
                }
              >
                New examples
              </button>
              <button
                id="button_three"
                onClick={this.handleClick}
                type="button"
                className={
                  selection === "button_three"
                    ? "example_button btn active"
                    : "example_button btn"
                }
              >
                Most liked examples
              </button>
            </div>

            <div className="conditional-render-section">
              {this.state.button_one ? (
                <div id="div-one">
                  <div class="container remove-right-margin">
                    <div class="text-center main-examples">
                      <div className="title">Example of the week</div>

                      <WeekExample />
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {this.state.button_two ? (
                <div id="div-two">
                  <div class="container remove-right-margin">
                    <div class="text-center main-examples">
                      <div className="title">New Examples</div>

                      <NewExamples />
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {this.state.button_three ? (
                <div id="div-three">
                  <div class="container remove-right-margin">
                    <div class="text-center main-examples">
                      <div className="title">Most Liked Examples</div>

                      <BestExamples />
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement("div"))
  );
});
