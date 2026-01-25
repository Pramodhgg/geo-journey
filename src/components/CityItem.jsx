import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  console.log(position);

  function handleClick(e) {
    e.preventDefault();
    console.log("Test");
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity.id ? styles["cityItem--active"] : ""}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}
export default CityItem;

const initialValue = {
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ],
};
function counterReducer(state, action) {
  if (action.type == "add_counter") {
    return [...counters, { id: state.length + 1, value: 0 }];
  } else if (action.type == "increase") {
    return [
      ...counter,
      state.counters.map((counter) => {
        return counter.id === action.payload
          ? { ...counter, value: counter.value + 1 }
          : counter;
      }),
    ];
  }
}
