import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS files/HomePage.css";
import userProfile from "./../Assests/user_profile_image.png";
import Travel_image_1 from "./../Assests/Travel_image_1.webp";
import Travel_image_2 from "./../Assests/Travel_image_2.webp";
import Travel_image_3 from "./../Assests/Travel_image_3.webp";
import Nature_image from "./../Assests/Nature_image.webp";
import home from "./../Assests/home.png";
import developer from "./../Assests/developer.png";
import about from "./../Assests/about.png";
import data from "./../Data/data.json";
import ProductLayout from "./../Component/ProductLayout";
// import prev from "./../Assests/previous.png";
// import next from "./../Assests/next.png";
import aside_profile from "./../Assests/aside_profile.png";
import Modal from "./Modal";

// import Buiding_image from "./../Assests/Building_image.jpeg";
import Search from "./../Assests/Search.png";
import Voic from "./../Assests/google-voice.png";

function HomePage() {
  const images = [Travel_image_1, Travel_image_2, Nature_image, Travel_image_3];
  const placeholder_text = [
    "Search here...",
    "Find answers or inspiration...",
    "Search for tips, tricks, and more...",
    "Find your next favorite read...",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [showPlaceholder, setShowplaceholder] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  },[images.length]);


  const handleVoiceSearch = () => {
    setIsModalOpen(true);
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
  
    recognition.onstart = () => {
      console.log("Voice recognition started. Speak into the microphone.");
    };
  
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
      setShowplaceholder(false);
      console.log("You said: ", transcript);
      setIsModalOpen(false);
      window.open(`https://www.google.com/search?q=${encodeURIComponent(transcript)}`, '_blank');
    };
  
    recognition.onerror = (event) => {
      console.error("Error occurred in recognition: ", event.error);
      if (event.error === "no-speech") {
        alert("No speech was detected. Please try again.");
      } else if (event.error === "audio-capture") {
        alert("No microphone was found. Please ensure your microphone is connected.");
      } else if (event.error === "not-allowed") {
        alert("Microphone access denied. Please allow access to the microphone.");
      }
    };
  
    recognition.start();
  };


  const handleClick = (e) => {
    if (inputValue === "") {
      setShowplaceholder(true);
    } else {
      setShowplaceholder(false);
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value !== "") {
      setShowplaceholder(false);
    } else {
      setShowplaceholder(true);
    }
  };
  const handleBlur = () => {
    if (inputValue === "") {
      setShowplaceholder(true);
    } else {
      return;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(inputValue)}`, '_blank');
    }
  };
  const handleRedirect = (path) => {
    navigate(path);
  };
  return (
    <>
      <nav>
        <div className="logo">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`${
                currentIndex === index ? "slide" : "slide slide-hidden"
              }`}
            />
          ))}
        </div>
        <div className="search_bar">
          <div className="search">
            <input
              type="text"
              value={inputValue}
              onClick={handleClick}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />

            {showPlaceholder && (
              <div className="for_placeholder">
                {placeholder_text[currentIndex]}
              </div>
            )}

            <div className="search_img_container" >
              <img src={Search} alt="seach_icon" />
            </div>
          </div>
          <div className="search_with_your_voic">
            <img src={Voic} className="test" alt="voic" onClick={handleVoiceSearch}/>
            <div className="voice_hover">Search with Your Voic</div>
          </div>
        </div>
        <div className="user_profile_section">
          <img src={userProfile} alt="Profile"/>
          <div className="profile_hover">User Profile</div>
        </div>
      </nav>
      <div className="home_main_container">
        <aside>
          <div className="Home_div">
            <img src={home} alt="Home div" />
            <a href="/">Home</a>
          </div>
          <div className="About_div" onClick={() => handleRedirect("/about")}>
            <img src={about} alt="About div" />
            <a href="/about">About</a>
          </div>
          <div
            className="Profile_div"
            onClick={() => handleRedirect("/profile")}
          >
            <img src={aside_profile} alt="Profile div" />
            <a href="/profile">Profile</a>
          </div>
          <div
            className="Developer_div"
            onClick={() => handleRedirect("/developer")}
          >
            <img src={developer} alt="Profile div" />
            <a href="/developer">Developer</a>
          </div>
        </aside>
        <section className="provided_content">
          <ProductLayout products = {data.data} />
        </section>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default HomePage;
