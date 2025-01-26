import React, { useState, useEffect } from "react";

import { Header } from "../../Components/Header/Header";
import { Services } from "../../Components/Services/Services";

import "./home.scss";

function HomePage() {
  const [ip, setIP] = useState("");

  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIP(data.ip))
      .catch((err) => console.error("Ошибка:", err));
  }, []);
  return (
    <div className="container">
      <div className="home-flex">
        <div className="">
          <Header />
        </div>
        <div className="services-main">
          <Services />
        </div>
      </div>

      <p>Ваш IP: {ip || "Загрузка..."}</p>
    </div>
  );
}

export default HomePage;
