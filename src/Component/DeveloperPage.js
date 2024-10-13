import {React,useState} from "react";
import "./CSS files/DeveloperPage.css";
import nextArrow from "./../Assests/next.png";
import prevArrow from "./../Assests/previous.png";

function DeveloperPage() {
    const [currentIcon, setCurrentIcon] = useState(nextArrow);
    const handleShowContainer = () => {
        if (currentIcon === nextArrow) {
          setCurrentIcon(prevArrow);
          document.querySelector(".informative_slider").style.transform = "translateX(0)";
        } else {
          setCurrentIcon(nextArrow);
          document.querySelector(".informative_slider").style.transform = "translateX(-95%)"; 
        }
      };
  return (
    <>
      <div className="center">
        <h2>This is created by @Praharsh Patni.</h2>
        <div className="informative_slider">
          <div className="information">
            <h3>
              Creator : <mark>Praharsh Patni</mark>
            </h3>
            <details>
              <summary>Contact Info :</summary>
              <p>
                <span>Community Name </span>: Togather We Can
              </p>
              <p>
                <span>Contact </span> : 0000000000
              </p>
              <p>
                <span>Address </span> : 11-house name,xyz colony,landmark,city.
              </p>
            </details>
          </div>
          <div className="imageContainer" onClick={handleShowContainer}>
            <img src={currentIcon} alt="nextArrow" className="image"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeveloperPage;
