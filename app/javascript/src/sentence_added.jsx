// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";
import "./styles.scss";
import "./sentence_added.scss";

function Added() {
  return (
    <Layout>
      <div className="container congratulations">
        <div className="header">
          <h1>Congratulations!</h1>
          <h3>Your example was added!</h3>
        </div>
        <div className="row">
          <div className="col-8">
            <table>
              <tr>
                <th>Sentence:</th>
                <td>
                  騒（さわ）がしいホームで誰（だれ）かが私（わたし）の名前（なまえ）を呼（よ）んでいるのが聞（き）こえた。
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  Sawagashii houmu de dare ka ga watashi no namae wo yonde iru
                  no ga kikoeta.
                </td>
              </tr>

              <tr>
                <th>Translation: </th>
                <td>
                  I could hear someone calling my name on the noisy platform.
                </td>
              </tr>

              <tr>
                <th>Full context: </th>
                <td>https://www.pixiv.net/en/artworks/81119676</td>
              </tr>

              <tr>
                <th>Added by: </th>
                <td>Joanna092</td>
              </tr>
            </table>
          </div>
          <div className="col-4">
            <img className="img-fluid" src={logo} alt="Logo" />
          </div>
        </div>

<div className="buttons">
        <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{
                   // display: "block",
                   // margin: "0 auto",
                    padding: "20px",
                    marginTop: "20px",
                    marginRight: "10px",
                    width: "20%",
                  }}
                >
                  Main page
                </button>

                <button
                  type="button"
                  class="btn btn-outline-dark"
                  style={{
                   // display: "block",
                  //  margin: "0 auto",
                    padding: "20px",
                    marginTop: "20px",
                    width: "20%",
                  }}
                >
                  Your profile
                </button>
                </div>



      </div>
    </Layout>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Added />,
    document.body.appendChild(document.createElement("div"))
  );
});
