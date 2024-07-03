import "./App.css";
import Marquee from "react-fast-marquee";
import hero from "./assets/hero.jpg";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import react from "./assets/react.png";
import node from "./assets/node.png";
import express from "./assets/express.png";
import mongodb from "./assets/mongodb.png";
import call from "./assets/call.png";
import mail from "./assets/mail.png";
import linked from "./assets/linked.png";
import github from "./assets/github.png";

function App() {
  return (
    <div className="App">
      <nav
        id="navbar-example2"
        class="navbar bg-body-tertiary px-3 mb-3"
        className="navbar"
      >
        <a class="navbar-brand" href="www.google.com">
          Govarthanan D
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading1">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading3">
              Project
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading4">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabindex="0"
      >
        <div id="scrollspyHeading1" className="hero-section">
          <div className="details">
            <p className="name">Govarthanan D</p>
            <p className="role">Fullstack Developer</p>
            <p className="desc">
              I'm a Fullstack developer based in TamilNadu Coimbatore, I'll help
              you build beautiful websites your users will love.
            </p>
            <div className="but">
              <button className="bttn-link">
                <a
                  href="https://drive.google.com/file/d/1cMfUqJLst4KHEsy55SP5G8eBiQSX3JgU/view?usp=sharing"
                  target="_blank"
                >
                  View Resume
                </a>
              </button>
            </div>
          </div>
          <div>
            <img src={hero} alt="pic" className="image" />
          </div>
        </div>

        <div id="scrollspyHeading2" className="about-section">
          <p className="about">About Me.</p>
          <p className="skills">Skills...</p>
          <Marquee speed={150}>
            <img src={html} alt="pic" className="front-tools" />
            <img src={css} alt="pic" className="front-tools" />
            <img src={js} alt="pic" className="front-tools" />
            <img src={react} alt="pic" className="front-tools" />
            <img src={node} alt="pic" className="front-tools" />
            <img src={express} alt="pic" className="front-tools" />
            <img src={mongodb} alt="pic" className="front-tools" />
          </Marquee>
        </div>

        <div id="scrollspyHeading3" className="project-section">
          <p className="project">Projects</p>
          <div className="card">
            <div className="card-container">
              <img
                src="https://cdn.pixabay.com/photo/2024/05/23/12/24/ai-generated-8783105_640.jpg"
                alt="pic"
                className="card-image"
              />
              <div className="sub-container">
                <h6 className="names">
                  <a
                    href="https://peaceful-boba-0927a0.netlify.app/"
                    target="_blank"
                  >
                    Authentication
                  </a>
                </h6>
              </div>
            </div>
            <div className="card-container">
              <img
                src="https://cdn.pixabay.com/photo/2015/01/21/17/22/shopping-606993_1280.jpg"
                alt="pic"
                className="card-image"
              />
              <div className="sub-container">
                <h6 className="names">
                  <a
                    href="https://splendorous-figolla-858949.netlify.app/"
                    target="_blank"
                  >
                    Capstone
                  </a>
                </h6>
              </div>
            </div>
            <div className="card-container">
              <img
                src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg"
                alt="pic"
                className="card-image"
              />
              <div className="sub-container">
                <h6 className="names">
                  <a
                    href="https://govarthanand.github.io/Makeup-Api/"
                    target="_blank"
                  >
                    Makeup API
                  </a>
                </h6>
              </div>
            </div>
            <div className="card-container">
              <img
                src="https://as1.ftcdn.net/v2/jpg/04/81/76/22/1000_F_481762281_Xcvl3QsGh1pBMvQuyKIoIqq8aYksXEwX.jpg"
                alt="pic"
                className="card-image"
              />
              <div className="sub-container">
                <h6 className="names">
                  <a
                    href="https://neon-swan-1beb3a.netlify.app/"
                    target="_blank"
                  >
                    Netflix
                  </a>
                </h6>
              </div>
            </div>
            <div className="card-container">
              <img
                src="https://as2.ftcdn.net/v2/jpg/01/38/00/09/1000_F_138000929_F982axUV63spXL1UycBFXrjQP3Pb4tdA.jpg"
                alt="pic"
                className="card-image"
              />
              <div className="sub-container">
                <h6 className="names">
                  <a
                    href="https://glistening-mandazi-63a7dd.netlify.app/"
                    target="_blank"
                  >
                    Movies APP
                  </a>
                </h6>
              </div>
            </div>
            <div className="card-container">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/78/4e/49/784e49cc-84a3-1b17-3a8e-7ca43bf73800/AppIcon-0-1x_U007emarketing-0-85-220-7.jpeg/1200x630wa.png"
                alt="pic"
                className="card-image"
              />
              <div className="sub-container">
                <h6 className="names">
                  <a
                    href="https://thunderous-fox-7c2c4d.netlify.app/"
                    target="_blank"
                  >
                    BookmyShow
                  </a>
                </h6>
              </div>
            </div>
            <div className="card-container">
              <img
                src="https://img.freepik.com/premium-vector/purple-web-development-background_76964-167.jpg"
                alt="pic"
                className="card-image"
              />
              <div className="sub-container">
                <h6 className="names">
                  <a
                    href="https://dreamy-llama-96ce38.netlify.app/"
                    target="_blank"
                  >
                    CRUD
                  </a>
                </h6>
              </div>
            </div>
            <div className="card-container">
              <img
                src="https://cdn.pixabay.com/photo/2018/08/12/11/22/woman-3600559_1280.jpg"
                alt="pic"
                className="card-image"
              />
              <div className="sub-container">
                <h6 className="names">
                  <a
                    href="https://nimble-speculoos-26784e.netlify.app/"
                    target="_blank"
                  >
                    Web Scrap
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div id="scrollspyHeading4" className="contact-section">
          <p className="contact">Contact Us</p>
          <div className="end">
            <div className="end-section">
              <div className="sub-end">
                <img src={call} alt="pic" className="end-pic" />
                <p>+91 8220839008</p>
              </div>
              <div className="sub-end">
                <img src={mail} alt="pic" className="end-pic" />
                <p>govarthananduraisamy@gmail.com</p>
              </div>
              <div className="sub-end">
                <img src={linked} alt="pic" className="end-pic" />
                <p>
                  <a
                    href="https://www.linkedin.com/in/govarthanan-duraisamy-9185a22a2"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
              <div className="sub-end">
                <img src={github} alt="pic" className="end-pic" />
                <p><a href="https://github.com/GovarthananD" target="_blank">GitHub</a></p>
              </div>
            </div>
            {/* <div className="tables">
            <div className="table" class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Name</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
            </div>
            <div className="table" class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="table" class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
             <button>Submit</button>
            </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
