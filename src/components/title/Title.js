import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyStyle = styled.h1`
  position: absolute;
  width: 50%;
  top: 20rem;
  z-index: 1;
  font-family: sans-serif;
  margin-top: -120px;
  text-align: center;
  strong {
    font-size: 1.2em;
  }
  div {

    color: $((props) => props.theme.textColor)

    .main {
        
        color: darkblue;
        text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
        font-weight: 100;
        letter-spacing: 7px;
        font-size: 50px;
    }

    .sub {
        color: white;
        font-size: 27px;
        letter-spacing: 3px;
    }
  }

`;

const Title = () => (
 
 <MyStyle>
    {/* <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script> */}
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-top mb-2">
          Hello, I'm
          <br />
          <span>
            <strong>Vibhav Tomar</strong>

          </span>
        </div>
        <div className="sub">
        <p></p><p></p>
          <Typewriter
            options={{
              
              strings: ["Competitive Programmer", "Open Source Enthusiast", "Web Developer"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyStyle>
);

export default Title;
