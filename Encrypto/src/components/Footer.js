import React from "react";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "black",
          paddingTop: "5px",
        }}>
        <div class="content" >
          <div
            class="top"
            style={{
              textAlign: "center",
              marginBottom: "5px",
            }}>
            
              <a
                style={{ color: "white", padding: "5px" }}
                className="youtube social"
                target="_blank"
                href="https://github.com/anujjha13"
                rel="noreferrer">
                <i class="">
                  {" "}
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </i>
              </a>
              
              <a
                style={{ color: "blue", padding: "5px" }}
                class="Linkedin social"
                target="_blank"
                href="https://www.linkedin.com/in/anujjha9211/"
                rel="noreferrer">
                <i class="">
                  {" "}
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </i>
              </a>
            
          </div>

          
          <h4
            style={{
              textAlign: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize: "20px",
              color: "#BFBCBC",
            }}>
            &copy;EncrypTo
            </h4>
          <h3
            style={{
              textAlign: "center",
            }}>
            Created  by{" "}
            <a href="https://www.linkedin.com/in/anujjha9211/">
              AnujJha 🤷
            </a>
          </h3>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
