// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona2.jpg";
import BigSearch from "./big_search";

import "./styles.scss";
import "./home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button_one: true,
      button_two: false,
      button_three: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    //     Setting state and a callback function
    if (e.target.id === "button_one") {
      this.setState({ button_one: true});
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
                class="example_button btn"
              >
                Example of the week
              </button>
              <button
                id="button_two"
                onClick={this.handleClick}
                type="button"
                class="example_button btn"
              >
                New examples
              </button>
              <button
                id="button_three"
                onClick={this.handleClick}
                type="button"
                class="example_button btn"
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

                      <div className="row">
                        <div className="col-7">
                          <div className="example_box shadow-md">
                            <h1>Example</h1>
                            <div>
                              <p className="float-left">
                                <table>
                                  <tr>
                                    <th>Example:</th>
                                    <td>
                                      {" "}
                                      <ruby>
                                        駆逐 <rp>(</rp> <rt>くちく</rt>
                                        <rp>)</rp>
                                      </ruby>
                                      してやる！ / Kuchiku shite yaru!
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Translation:</th>
                                    <td>I will exterminate you</td>
                                  </tr>
                                </table>
                              </p>

                              <img
                                className="img-fluid border example_image"
                                src={logo}
                                alt="Logo"
                              />
                              <p>
                                <b>Full context:</b>{" "}
                                https://www.pixiv.net/en/artworks/81119676
                              </p>
                            </div>

                            <div className="row">
                              <div className="col">
                                5
                                <a>
                                  <i class="far fa-thumbs-up"></i>
                                </a>
                                130
                                <a>
                                  <i class="far fa-thumbs-down"></i>
                                </a>
                              </div>

                              <div className="col-auto">
                                <p>Added by: Joanna092</p>
                              </div>
                            </div>

                            <textarea rows="4" className="boxsizingBorder">
                              Type your comment here
                            </textarea>
                            <div class="comment">
                              <hr></hr>
                              <div class="author">
                                <a>Frank</a>
                              </div>
                              <div class="text">
                                Nice piece. Very well thought out! I can tell
                                you've spent a lot of time thinking about this.
                              </div>
                              <div class="actions">
                                <a class="reply">Reply</a>
                              </div>
                            </div>
                            <div class="comment">
                              <hr></hr>
                              <a class="author">John</a>
                              <div class="text">
                                I agree with Frank, it's very well thought out.
                              </div>
                              <div class="actions">
                                <a class="reply">Reply</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-5">
                          <div className="example_box shadow-md">
                            <h1>About the word</h1>

                            <table>
                              <tr>
                                <th>Word:</th>
                                <td>
                                  {" "}
                                  <ruby>
                                    駆逐 <rp>(</rp> <rt>くちく</rt>
                                    <rp>)</rp>
                                  </ruby>
                                  / kuchiku
                                </td>
                              </tr>
                              <tr>
                                <th>Type of word:</th>
                                <td>Noun, suru-verb</td>
                              </tr>

                              <tr>
                                <th>JLPT level:</th>
                                <td>N2</td>
                              </tr>

                              <tr>
                                <th>Meaning:</th>
                                <td>extermination; expulsion; destruction​</td>
                              </tr>
                            </table>

                            <button
                              type="button"
                              class="form_button page_content"
                              style={{
                                display: "block",
                                margin: "0 auto",
                                marginBottom: "15px",
                                marginTop: "17px",
                              }}
                            >
                              See more examples with this word
                            </button>
                          </div>
                          <button
                            type="button"
                            class="form_button page_content"
                            style={{
                              display: "block",
                              margin: "0 auto",
                              padding: "20px",
                              marginTop: "20px",
                              width: "100%",
                            }}
                          >
                            Add your own example
                          </button>
                        </div>
                      </div>
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

                      <div className="row">
                        <div className="col-7">
                          <div className="example_box shadow-md">
                            <h1>Example</h1>
                            <div>
                              <p className="float-left">
                                <table>
                                  <tr>
                                    <th>Example:</th>
                                    <td>
                                      {" "}
                                      <ruby>
                                        駆逐 <rp>(</rp> <rt>くちく</rt>
                                        <rp>)</rp>
                                      </ruby>
                                      してやる！ / Kuchiku shite yaru!
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Translation:</th>
                                    <td>I will exterminate you</td>
                                  </tr>
                                </table>
                              </p>

                              <img
                                className="img-fluid border example_image"
                                src={logo}
                                alt="Logo"
                              />
                              <p>
                                <b>Full context:</b>{" "}
                                https://www.pixiv.net/en/artworks/81119676
                              </p>
                            </div>

                            <div className="row">
                              <div className="col">
                                5
                                <a>
                                  <i class="far fa-thumbs-up"></i>
                                </a>
                                130
                                <a>
                                  <i class="far fa-thumbs-down"></i>
                                </a>
                              </div>

                              <div className="col-auto">
                                <p>Added by: Joanna092</p>
                              </div>
                            </div>

                            <textarea rows="4" className="boxsizingBorder">
                              Type your comment here
                            </textarea>
                            <div class="comment">
                              <hr></hr>
                              <div class="author">
                                <a>Frank</a>
                              </div>
                              <div class="text">
                                Nice piece. Very well thought out! I can tell
                                you've spent a lot of time thinking about this.
                              </div>
                              <div class="actions">
                                <a class="reply">Reply</a>
                              </div>
                            </div>
                            <div class="comment">
                              <hr></hr>
                              <a class="author">John</a>
                              <div class="text">
                                I agree with Frank, it's very well thought out.
                              </div>
                              <div class="actions">
                                <a class="reply">Reply</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-5">
                          <div className="example_box shadow-md">
                            <h1>About the word</h1>

                            <table>
                              <tr>
                                <th>Word:</th>
                                <td>
                                  {" "}
                                  <ruby>
                                    駆逐 <rp>(</rp> <rt>くちく</rt>
                                    <rp>)</rp>
                                  </ruby>
                                  / kuchiku
                                </td>
                              </tr>
                              <tr>
                                <th>Type of word:</th>
                                <td>Noun, suru-verb</td>
                              </tr>

                              <tr>
                                <th>JLPT level:</th>
                                <td>N2</td>
                              </tr>

                              <tr>
                                <th>Meaning:</th>
                                <td>extermination; expulsion; destruction​</td>
                              </tr>
                            </table>

                            <button
                              type="button"
                              class="form_button page_content"
                              style={{
                                display: "block",
                                margin: "0 auto",
                                marginBottom: "15px",
                                marginTop: "17px",
                              }}
                            >
                              See more examples with this word
                            </button>
                          </div>
                          <button
                            type="button"
                            class="form_button page_content"
                            style={{
                              display: "block",
                              margin: "0 auto",
                              padding: "20px",
                              marginTop: "20px",
                              width: "100%",
                            }}
                          >
                            Add your own example
                          </button>
                        </div>
                      </div>
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

                      <div className="row">
                        <div className="col-7">
                          <div className="example_box shadow-md">
                            <h1>Example</h1>
                            <div>
                              <p className="float-left">
                                <table>
                                  <tr>
                                    <th>Example:</th>
                                    <td>
                                      {" "}
                                      <ruby>
                                        駆逐 <rp>(</rp> <rt>くちく</rt>
                                        <rp>)</rp>
                                      </ruby>
                                      してやる！ / Kuchiku shite yaru!
                                    </td>
                                  </tr>
                                  <tr>
                                    <th>Translation:</th>
                                    <td>I will exterminate you</td>
                                  </tr>
                                </table>
                              </p>

                              <img
                                className="img-fluid border example_image"
                                src={logo}
                                alt="Logo"
                              />
                              <p>
                                <b>Full context:</b>{" "}
                                https://www.pixiv.net/en/artworks/81119676
                              </p>
                            </div>

                            <div className="row">
                              <div className="col">
                                5
                                <a>
                                  <i class="far fa-thumbs-up"></i>
                                </a>
                                130
                                <a>
                                  <i class="far fa-thumbs-down"></i>
                                </a>
                              </div>

                              <div className="col-auto">
                                <p>Added by: Joanna092</p>
                              </div>
                            </div>

                            <textarea rows="4" className="boxsizingBorder">
                              Type your comment here
                            </textarea>
                            <div class="comment">
                              <hr></hr>
                              <div class="author">
                                <a>Frank</a>
                              </div>
                              <div class="text">
                                Nice piece. Very well thought out! I can tell
                                you've spent a lot of time thinking about this.
                              </div>
                              <div class="actions">
                                <a class="reply">Reply</a>
                              </div>
                            </div>
                            <div class="comment">
                              <hr></hr>
                              <a class="author">John</a>
                              <div class="text">
                                I agree with Frank, it's very well thought out.
                              </div>
                              <div class="actions">
                                <a class="reply">Reply</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-5">
                          <div className="example_box shadow-md">
                            <h1>About the word</h1>

                            <table>
                              <tr>
                                <th>Word:</th>
                                <td>
                                  {" "}
                                  <ruby>
                                    駆逐 <rp>(</rp> <rt>くちく</rt>
                                    <rp>)</rp>
                                  </ruby>
                                  / kuchiku
                                </td>
                              </tr>
                              <tr>
                                <th>Type of word:</th>
                                <td>Noun, suru-verb</td>
                              </tr>

                              <tr>
                                <th>JLPT level:</th>
                                <td>N2</td>
                              </tr>

                              <tr>
                                <th>Meaning:</th>
                                <td>extermination; expulsion; destruction​</td>
                              </tr>
                            </table>

                            <button
                              type="button"
                              class="form_button page_content"
                              style={{
                                display: "block",
                                margin: "0 auto",
                                marginBottom: "15px",
                                marginTop: "17px",
                              }}
                            >
                              See more examples with this word
                            </button>
                          </div>
                          <button
                            type="button"
                            class="form_button page_content"
                            style={{
                              display: "block",
                              margin: "0 auto",
                              padding: "20px",
                              marginTop: "20px",
                              width: "100%",
                            }}
                          >
                            Add your own example
                          </button>
                        </div>
                      </div>
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
