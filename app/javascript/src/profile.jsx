// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import logo from "./corona.jpg";
import "./styles.scss";
import "./profile.scss";

function Profile() {
  return (
    <Layout>
        <div className="top_info">
        <p>Username: XXX</p>
        <button
          type="button"
          class="form_button"
          style={{
            padding: "15px",
            width: "150px",
          }}
        >
          Log out
        </button>
        </div>

      <div className="container congratulations">
        <div className="row">
          <div className="col-7">
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

<br/>

              <tr>
                <th>Word: </th>
                <td>駆逐  / くちく / kuchiku</td>
              </tr>

              <tr>
                <th>Meaning: </th>
                <td>extermination; expulsion; destruction​</td>
              </tr>

              <button
          type="button"
          class="form_button"
          style={{
            width: "200px",
            marginTop: "15px"
          }}
        >Go to the word view</button>
            </table>
          </div>
          <div className="col-3">
            <img className="img-fluid" src={logo} alt="Logo" />
          </div>
          <div className="col-2">
          <button
          type="button"
          class="btn btn-outline-dark delete_button"
          style={{
            width: "200px",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >DELETE</button>
          </div>
        </div>

        <hr 
        style={{
          width: "90%",
          marginTop: "50px",
          marginBotttom: "50px",
        }}/>

        <div className="row">
          <div className="col-7">
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

<br/>

              <tr>
                <th>Word: </th>
                <td>駆逐  / くちく / kuchiku</td>
              </tr>

              <tr>
                <th>Meaning: </th>
                <td>extermination; expulsion; destruction​</td>
              </tr>

              <button
          type="button"
          class="form_button"
          style={{
            width: "200px",
            marginTop: "15px"
          }}
        >Go to the word view</button>
            </table>
          </div>
          <div className="col-3">
            <img className="img-fluid" src={logo} alt="Logo" />
          </div>
          <div className="col-2">
          <button
          type="button"
          class="btn btn-outline-dark delete_button"
          style={{
            width: "200px",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >DELETE</button>
          </div>
        </div>
        </div>
    </Layout>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Profile />,
    document.body.appendChild(document.createElement("div"))
  );
});
