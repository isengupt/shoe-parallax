import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./styles.css";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "./components/VisibilitySensor";
import img1 from "./img/shoe.png";
import img2 from "./img/shoe1.png";
import img3 from "./img/shoe-black.png";

export default function App() {
  let parallax;
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="frame">
        <div className="frame__title-wrap">
          <div className="logo">I.</div>
        </div>
        <div className="frame__links">
          <div className="frame__nav">
            <div className="frame__nav__items">
              <button className="frame__nav__item">Shop</button>
              <button className="frame__nav__item">Resume</button>
              <button className="frame__nav__item">Help</button>
              <button className="frame__nav__item">About</button>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
          >
            <path
              fill-rule="evenodd"
              d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
            ></path>
          </svg>
        </div>
        <div className="frame__demos">
          <a
            href="http://isengupt.github.io/fade-line/"
            activeClassName="frame__demo--current"
            className="frame__demo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path
                fill-rule="evenodd"
                d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/isengupt/shoe-parallax"
            activeClassName="frame__demo--current"
            className="frame__demo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            activeClassName="frame__demo--current"
            className="frame__demo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <Parallax pages={3} ref={(ref) => (parallax = ref)}>
        <ParallaxLayer
          speed={-0.8}
          factor={2}
          offset={0}
          className="image__layer"
          style={{
            display: "grid",

            gridTemplateColumns: "1fr 1fr",

          
          }}
          onClick={() => parallax.scrollTo(1)}
        >
          <Spring
            delay={200}
            className="shoe__container"
            to={{
              width: expanded ? "700px" : "500px",
              transform: expanded ? "rotateZ(0deg)" : "rotateZ(-35deg)",
            }}
          >
            {(props) => (
              <img style={{ ...props }} className="shoe__picture" src={img1} />
            )}
          </Spring>
          <div></div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1.6}>
     
      </ParallaxLayer>
     

        <ParallaxLayer
          offset={0}
          speed={0.2}
          onClick={() => parallax.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Spring
                delay={200}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(80px)",
                }}
              >
                {(props) => (
                  <div style={{ ...props }} className="title__container">
                    <div className="title__text">
                      <h1 className="title">Nike</h1>
                      <h1 className="title">Fragility</h1>
                    </div>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.8}>
     
     <img src={img2} 
      style={{ marginLeft: "60em", marginTop: "20em", textAlign: "right" }}
     className="floating__img"/>
     </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={1}
          speed={-2.5}
          onClick={() => parallax.scrollTo(2)}
        >
          <div className="paragraph__container">
            <div></div>

            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <Spring
                  delay={0}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(80px)",
                  }}
                >
                  {(props) => (
                    <div style={{ ...props }} className="paragraph__text">
                      <div className="paragraph__title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </div>
                      <div className="paragraph__description">
                        Rorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum Rorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum
                      </div>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={-0.2} >
     
     <img src={img3} 
      style={{ marginLeft: "70em", marginTop: "20em", textAlign: "right", transform: 'rotate(-45deg)' }}
     className="floating__img"/>
     </ParallaxLayer>
        <ParallaxLayer
          onClick={() => parallax.scrollTo(0)}
          offset={2}
          speed={4}
          factor={1}
        >
          <div className="price__page">
            <div></div>

            <VisibilitySensor
              partialVisibility
              onChange={() => setExpanded(!expanded)}
            >
              {({ isVisible }) => (
                <Spring
                  delay={200}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(80px)",
                  }}
                >
                  {(props) => (
                    <div className="price__container" style={{ ...props }}>
                      <div className="price__title__container">
                        <div className="price__title">
                          Classic Nike Fragilities
                        </div>
                        <div className="price__color">Red</div>
                        <div className="price__dollar">$ 57.00</div>
                        <div className="price__description">
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum
                        </div>
                        <div className="price__cart">View Cart</div>
                      </div>
                      <div className="price__info__container">
                        <select placeholder="Select size" id="size" name="size">
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="10.5">10.5</option>
                          <option value="11">11</option>
                        </select>

                        <button className="price__info__button">
                          Add to bag
                        </button>
                      </div>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
