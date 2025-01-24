import React from "react";
import { useState } from "react";
import "./Services.scss";

import Chat from "../../Images/Icons/Chat.svg";
import Balloons from "../../Images/Icons/Party Balloons.svg";
import ToDo from "../../Images/Icons/To Do.svg";
import Emaktab from "../../Images/Icons/emaktab logo.svg";
import Bolalar from "../../Images/Icons/Bolalar-logo.svg";
import Calculator from "../../Images/Icons/Calculator.svg";
import Statistica from "../../Images/Icons/Statistica.svg";
import Letter from "../../Images/Icons/Letter.svg";
import { Link } from "react-router-dom";

function Services() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="mt services">
      <h2>Услуги</h2>
      <div className="services-icons d-flex">
        <div className="icons-content">
          <img src={Chat} alt="" />
          <h4>Чат</h4>
        </div>
        <div className="icons-content">
          <img src={Balloons} alt="" />
          <h4>Мероприятия</h4>
        </div>
        <Link to="https://login.emaktab.uz/">
          <div className="icons-content">
            <img src={Emaktab} alt="" />
            <h4>eMaktab</h4>
          </div>
        </Link>
        <div className="icons-content">
          <img src={ToDo} alt="" />
          <h4>Расписание</h4>
        </div>
      </div>
      <div className="services-icons d-flex">
        <div className="icons-content">
          <img src={Bolalar} alt="" />
          <h4>Bolalar Fondi</h4>
        </div>
        <div className="icons-content">
          <img src={Calculator} alt="" />
          <h4>Калькулятор Расходов</h4>
        </div>
        <div className="icons-content">
          <img src={Statistica} alt="" />
          <h4>Статистика</h4>
        </div>
        <div className="icons-content">
          <img src={Letter} alt="" />
          <h4>Отклики</h4>
        </div>
      </div>

      <div className="calendar">
        <div className="calendar-header">
          <button onClick={goToPreviousMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
            >
              <path
                d="M-0.00341797 9C-0.00341797 9.3418 0.123535 9.63477 0.396973 9.88867L7.99463 17.3301C8.20947 17.5449 8.48291 17.6621 8.80518 17.6621C9.44971 17.6621 9.96729 17.1543 9.96729 16.5C9.96729 16.1777 9.83057 15.8945 9.61572 15.6699L2.77002 9L9.61572 2.33008C9.83057 2.10547 9.96729 1.8125 9.96729 1.5C9.96729 0.845703 9.44971 0.337891 8.80518 0.337891C8.48291 0.337891 8.20947 0.455078 7.99463 0.669922L0.396973 8.10156C0.123535 8.36523 -0.00341797 8.6582 -0.00341797 9Z"
                fill="#23538F"
              />
            </svg>
          </button>
          <h2>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={goToNextMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
            >
              <path
                d="M9.99658 9C9.98682 8.6582 9.85986 8.36523 9.59619 8.10156L1.99854 0.669922C1.77393 0.455078 1.51025 0.337891 1.18799 0.337891C0.533691 0.337891 0.0258789 0.845703 0.0258789 1.5C0.0258789 1.8125 0.152832 2.10547 0.377441 2.33008L7.21338 9L0.377441 15.6699C0.152832 15.8945 0.0258789 16.1777 0.0258789 16.5C0.0258789 17.1543 0.533691 17.6621 1.18799 17.6621C1.50049 17.6621 1.77393 17.5449 1.99854 17.3301L9.59619 9.88867C9.86963 9.63477 9.99658 9.3418 9.99658 9Z"
                fill="#23538F"
              />
            </svg>
          </button>
        </div>
        <div className="calendar-grid">
          {dayNames.map((day) => (
            <div key={day} className="day-name">
              {day}
            </div>
          ))}
          {[
            ...Array(firstDayOfMonth).fill(null),
            ...Array(daysInMonth)
              .fill(null)
              .map((_, i) => i + 1),
          ].map((day, index) => (
            <div
              key={index}
              className={`day ${day ? "filled" : "empty"} ${
                today.getDate() === day &&
                today.getMonth() === currentDate.getMonth() &&
                today.getFullYear() === currentDate.getFullYear()
                  ? "today"
                  : ""
              }`}
            >
              {day || ""}
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Services;
