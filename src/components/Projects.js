import React from "react";
import { Link } from "react-router-dom";
import mycart_logo from "./assets/images/mycart_logo.png";
import text_utils from "./assets/images/text_utils.png";
import brain_teaser from "./assets/images/brain_teaser.png";
import jazz_chat from "./assets/images/jazz_chat.png";
import jesture from "./assets/images/jesture.png";
import "./projects.css";

export default function Projects() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">My Projects</h1>
            <p className="lead text-muted">
              Here are some of the open source project which I built using
              various technologies. You can find the complete source code by
              visiting the link present in each card.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <div className="cardImageContainer">
                  <img src={mycart_logo} alt="" className="cardImageView" />
                </div>

                {/* Project 1 */}
                <div className="card-body">
                  <h5>MyCart Ecommerce Website</h5>
                  <p className="card-text">
                    An ecommerce website built using django framework, it
                    supports order placement, order tracking, order cancellation
                    and many more features.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to="//github.com/Blazexsam27/Mycart/tree/master">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </Link>
                    </div>
                    <small className="text-muted">12/10/2021</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="cardImageContainer">
                  <img src={jesture} alt="" className="cardImageView" />
                </div>

                <div className="card-body">
                  <h5>Jesture (Sign Detection Web Application)</h5>
                  <p className="card-text">
                    A realtime sign language detection web app, this is an
                    ongoing project built using, tensorflow, vanilla javascript,
                    html...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to="https://github.com/Blazexsam27/SignDetectionWebApp">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </Link>
                    </div>
                    <small className="text-muted">15/05/2021</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="cardImageContainer">
                  <img src={text_utils} alt="" className="cardImageView" />
                </div>

                <div className="card-body">
                  <h5>Text Utility</h5>
                  <p className="card-text">
                    A small yet very functional and fancy project, this project
                    contains functionality to manipulate, quantize analyze text.
                    It also contains various theme palates for UI.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to="//github.com/Blazexsam27/TextUtils/tree/master">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </Link>
                    </div>
                    <small className="text-muted">27/11/2021</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="cardImageContainer">
                  <img src={jazz_chat} alt="" className="cardImageView" />
                </div>

                <div className="card-body">
                  <h5>JAZZ Chat Application</h5>
                  <p className="card-text">
                    A chat application somewhat similar to whatsapp however it
                    doesnot require user number, instead what it requires is
                    unique name. The application is powered using firestore and
                    firebase for realtime interaction.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to="//github.com/Blazexsam27/jassChatApp">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </Link>
                    </div>
                    <small className="text-muted">22/09/2020</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="cardImageContainer">
                  <img src={brain_teaser} alt="" className="cardImageView" />
                </div>
                <div className="card-body">
                  <h5>Brain Teaser</h5>
                  <p className="card-text">
                    Do you really think that quiz application can be so easy to
                    solve, well this project will definetely change your mind
                    where you have to face fancy mechanics to get the answer
                    right. This project is built ...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to="//github.com/Blazexsam27/brain_teaser">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </Link>
                    </div>
                    <small className="text-muted">05/02/2020</small>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 6 */}
          </div>
        </div>
      </div>
    </>
  );
}
