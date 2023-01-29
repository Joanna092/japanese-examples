import React from "react";
import logo from "../corona2.jpg";
import "./new_examples.scss";
import "../styles.scss";
import "../home.scss";

const NewExamples = (props) => {
  return (
    <React.Fragment>

<p className="number">3.05.2022</p>

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
                <b>Full context:</b> https://www.pixiv.net/en/artworks/81119676
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
              type="submit"
              class="form_button "
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
            type="submit"
            class="form_button "
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

<hr /> 


      <p className="number">24.04.2022</p>

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
                <b>Full context:</b> https://www.pixiv.net/en/artworks/81119676
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
               type="submit"
               class="form_button "
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
             type="submit"
             class="form_button "
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

      <hr /> 

      <button
            type="submit"
            class="form_button "
            style={{
              display: "block",
              float: "right",
              //margin: "0 auto",
              padding: "20px",
              marginTop: "20px",
            }}
          >
            See more
          </button>

    </React.Fragment>
  );
};

export default NewExamples;
