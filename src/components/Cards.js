import CardItem from "components/ui/CardItem";
import cardsData from "api/Cards";
import { useState, useEffect } from "react";
export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-x-4">
        {cards.length &&
          cards.map((card) => (
            <div className="bg-white p-10  rounded-lg shadow-sm flex flex-col items-center text-center">
              <img src={card.image}></img>
              <h6>{card.title}</h6>
              <p>{card.description}</p>
            </div>
          ))}
      </div>
    </>
  );
}
