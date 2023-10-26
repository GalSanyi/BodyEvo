import "../service/food-card.css";
import { Link } from "react-router-dom";
const FoodCard = ({ item }) => {
  const { imgUrl, title } = item;
  return (
    <div className="service__item d-flex align-items-center justify-content-center flex-column">
      <div className="service__img ">
        <img src={imgUrl} alt="" />
      </div>
      <h5>{title}</h5>
      <Link to={`/food/${item.title.toLowerCase()}`}>Learn more</Link>
    </div>
  );
};

export default FoodCard;
