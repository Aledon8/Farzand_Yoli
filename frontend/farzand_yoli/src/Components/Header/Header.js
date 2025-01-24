import React from "react";
import "./Header.scss";
import Sorting from "../../Images/Icons/Sorting.svg";
import Product from "../Product/Product";
import PrductImg from "../../Images/product.png";

function Header() {
  const data = [
    {
      name: "Bog'cha 423",
      status: "платный",
      title:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit quent per conubia nostra, per inceptos himena..... Подробнее",
      rating: 4.3,
      favorites: false,
      img: PrductImg,
    },
    {
      name: "Bog'cha 423",
      status: "платный",
      title:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit quent per conubia nostra, per inceptos himena..... Подробнее",
      rating: 4.3,
      favorites: false,
      img: PrductImg,
    },
    {
      name: "Bog'cha 423",
      status: "платный",
      title:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit quent per conubia nostra, per inceptos himena..... Подробнее",
      rating: 4.3,
      favorites: false,
      img: PrductImg,
    },
    {
      name: "Bog'cha 423",
      status: "платный",
      title:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit quent per conubia nostra, per inceptos himena..... Подробнее",
      rating: 4.3,
      favorites: false,
      img: PrductImg,
    },
    {
      name: "Bog'cha 423",
      status: "платный",
      title:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit quent per conubia nostra, per inceptos himena..... Подробнее",
      rating: 4.3,
      favorites: false,
      img: PrductImg,
    },
  ];
  return (
    <div className="mt">
      <div className="search-bar">
        <div className="input-container">
          <input type="text" className="input-with-icon" placeholder="Поиск" />
          <svg
            className="input-icon"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.80834"
              cy="7.80834"
              r="6.80834"
              stroke="black"
              stroke-width="1.5"
            />
            <path
              d="M12.825 12.825L15.3333 15.3334"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="filters d-flex">
        <button>
          <img src={Sorting} alt="" />
        </button>
        <button>Дет Сады</button>
        <button>Школы</button>
        <button>Вузы</button>
        <button>Курсы</button>
      </div>

      <div className="">
        {data?.map((el) => {
          return <Product el={el} value={4.3} />;
        })}
      </div>
    </div>
  );
}

export default Header;
