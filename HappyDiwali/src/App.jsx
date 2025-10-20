import { useState, useEffect } from "react";
import Prabhu from "./assets/Bhagwan/prabhu.jpg";
import Bhajan from "./bhajan";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function App() {
  const [color, setColor] = useState("#fff");
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // 👋 Welcome popup on load
  useEffect(() => {
    const timer = setTimeout(() => {
      Swal.fire({
        title: "👋 Welcome to My Page!",
        text: "Happy Diwali! May your life shine as bright as these diyas 🪔✨",
        icon: "success",
        background: "#1b1b1b",
        color: "#ffd700",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
        showClass: { popup: "animate__animated animate__fadeInDown" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
        didOpen: () => Swal.showLoading(),
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // ✨ Button click popup
  const handleClick = () => {
    Swal.fire({
      title: "✨ शुभ दीपावली ✨",
      text: "May the divine light of Diwali fill your life with peace, prosperity, and blessings of Maa Lakshmi & Lord Ganesha 🙏🪔",
      icon: "success",
      background: "#1b1b1b",
      color: "#ffd700",
      timer: 10000,
      timerProgressBar: true,
      showConfirmButton: false,
      showClass: { popup: "animate__animated animate__fadeInDown" },
      hideClass: { popup: "animate__animated animate__fadeOutUp" },
      didOpen: () => Swal.showLoading(),
    });
  };

  // 🎨 Dynamic aura color
  useEffect(() => {
    const interval = setInterval(() => {
      const randomHex = Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
      setColor("#" + randomHex);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 📱 Responsive adjustment
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Bhajan />

      {/* 🌟 Main Wrapper */}
      <div className="min-h-screen w-full grid gap-5 overflow-hidden">
        {/* 🪔 Header */}
        <div id="one" className="h-[100px] w-full flex justify-center items-center sticky top-0 shadow-sm shadow-rose-300 bg-opacity-90 backdrop-blur-sm">
          <p className="text-3xl text-gray-400 font-bold tracking-wider uppercase text-center">
            𝓗𝓐𝓟𝓟𝓨 𝓓𝓘𝓦𝓐𝓛𝓘
          </p>
        </div>

        {/* 💥 Main Section */}
        <div
          id="mainsec"
          className="min-h-[800px] md:h-[1100px] lg:h-[1300px] w-full bg-black border-0 flex flex-col md:flex-row justify-center items-center gap-10 px-5"
        >
          {/* 🛕 Image */}
          <div
            className="w-[320px] sm:w-[400px] md:w-[450px] lg:w-[515px] aspect-square rounded-full overflow-hidden flex justify-center items-center transition-all duration-700"
            style={{ background: color }}
          >
            <img
              src={Prabhu}
              alt="image"
              className="w-[280px] sm:w-[370px] md:w-[480px] lg:w-[500px] h-[280px] sm:h-[370px] md:h-[480px] lg:h-[500px] rounded-full object-cover"
            />
          </div>

          {/* 🪔 Text Section */}
          <div
            className={`w-[300px] sm:w-[350px] md:w-[300px] lg:w-[300px] grid place-content-center gap-3 text-center ${
              screenSize < 768 ? "bg-black/5 rounded-xl p-4 backdrop-blur-sm" : ""
            }`}
          >
            <p className="text-3xl text-green-900 font-bold uppercase tracking-widest">
              happy diwali
            </p>
            <p className="text-2xl font-medium uppercase tracking-wider" style={{color:color}}>
              from raushan raj
            </p>

            {/* 🕉️ Blessing Button */}
            <button
              onClick={handleClick}
              id="click"
              className="mx-auto w-[150px] h-[35px] text-green-900 rounded-full outline-0 border-0 bg-gradient-to-r from-yellow-400/10 to-rose-400/10 hover:scale-105 transition-transform cursor-pointer"
            >
             🕉️ Click Me 🕉️
            </button>
          </div>
        </div>

        {/* ✨ Footer */}
        <div className="h-auto w-full bg-black border-0 py-5 grid gap-3">
          {/* 💫 Text */}
          <div className="w-full flex justify-center items-center px-4">
            <p className="text-center text-md sm:text-lg font-normal text-rose-400 tracking-wide">
              ✨ Wishing you a bright and joyful Diwali! May your days be filled
              with light, love, and endless happiness. 🪔💫
            </p>
          </div>

          {/* 🌐 Social Media */}
          <div className="flex justify-center items-center gap-6 mt-2">
            <a
              href="https://x.com/RaushanRaj3435"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md font-bold text-red-300 hover:text-lg hover:text-red-500 transition-all ease-in-out duration-200"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://wa.me/9142158588"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md font-bold text-red-300 hover:text-lg hover:text-red-500 transition-all ease-in-out duration-200"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.instagram.com/dev.eloper786/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md font-bold text-red-300 hover:text-lg hover:text-red-500 transition-all ease-in-out duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61581822251482"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md font-bold text-red-300 hover:text-lg hover:text-red-500 transition-all ease-in-out duration-200"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
