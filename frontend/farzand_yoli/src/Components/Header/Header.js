import React from "react";
import "./Header.scss";
import Sorting from "../../Images/Icons/Sorting.svg";
import { Product } from "../Product/Product";
import PrductImg from "../../Images/product.png";

function Header() {
  const data = [
    {
      name: "ДЕТСКИЙ САД №100 (АЙИКЧА)",
      status: "Узбекистан, 100100, Ташкент, Яккасарайский район, ул. МАХМУДА ТАРАБИ, 31 А",
      title:
        "+998 33 330-85-13",
      rating: 5.3,
      favorites: false,
      img: PrductImg,
    },
    {
      name: "ДЕТСКИЙ САД № 91 (КРЫЛЫШКИ)",
      status: "Узбекистан, 100093, Ташкент, Юнусабадский район, м-в ЮНУСАБАД-4,",
      title:
        "+998 90 180-20-52",
      rating: 4.3,
      favorites: false,
      img: PrductImg,
    },
    {
      name: "ЕТСКИЙ САД № 83 (БОЙЧЕЧАК)",
      status: "Узбекистан, 100201, Ташкент, Мирзо-улугбекский район, м-в АХМАДА ЮГНАКИ, 33 А",
      title:
        "+998 90 150-50-25",
      rating: 1.3,
      favorites: false,
      img: PrductImg,
    },
    {
      name: "ДЕТСКИЙ САД № 79",
      status: "Узбекистан, 100076, Ташкент, Яшнабадский район, ул. ФАРГОНА ЙУЛИ, 95 А",
      title:
        "+998 50 250-50-45",
      rating: 2.3,
      favorites: false,
      img: PrductImg,
    },
    {
      name: "ОБЩЕОБРАЗОВАТЕЛЬНАЯ СРЕДНЯЯ ШКОЛА № 18 г. ТАШКЕНТ",
      status: "Узбекистан, Ташкент, Мирзо-улугбекский район, ул. АСАКА, 5",
      title:
        "+998 71-840-71-17",
      rating: 5.0,
      favorites: false,
      img: PrductImg,
    },
    {
      name: "ОБЩЕОБРАЗОВАТЕЛЬНАЯ СРЕДНЯЯ ШКОЛА №158",
      status: "Узбекистан, Ташкент, Мирабадский район, ул. ТОЛЛИМАРЖОН, 16",
      title:
        "+998 71 291-19-12",
      rating: 4.3,
      favorites: false,
      img: PrductImg,
    },
    {
      name: "ОБЩЕОБРАЗОВАТЕЛЬНАЯ СРЕДНЯЯ ШКОЛА № 2",
      status: "Узбекистан, 100002, Ташкент, Сергелийский район, м-в ЙУЛДОШ-2Ц, 18",
      title:
        "+998 71 289-00-00",
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

export { Header };
