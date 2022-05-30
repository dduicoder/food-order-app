import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const responce = await fetch(
        "https://react-http-2cec4-default-rtdb.firebaseio.com/meals.json"
      );
      const responceData = await responce.json();

      const loadedMeals = [];

      for (const key in responceData) {
        loadedMeals.push({
          id: key,
          name: responceData[key].name,
          price: responceData[key].price,
          description: responceData[key].description,
        });
      }

      setLoading(false);
      setMeals(loadedMeals);
    };

    fetchMeals().catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, []);

  let text = null;

  if (loading) {
    text = "Loading";
  } else if (error) {
    text = error;
  }

  return (
    <section className={classes.meals}>
      <Card>
        {text ? (
          <p style={{ textAlign: "center" }}>{text}</p>
        ) : (
          <ul>
            {meals.map((meal) => (
              <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                price={meal.price}
                description={meal.description}
              />
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
