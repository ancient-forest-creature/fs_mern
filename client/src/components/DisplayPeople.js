import axios from "axios";
import { useState, useEffect } from "react";

const DisplayPeople = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    console.log("useEffectFired");
    axios
      .get("http://localhost:8000/api/person")
      .then((response) => {
        console.log(response);
        setPeople(response.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <div>
      <h1>DISPLAY</h1>
      {people.map((person, index) => {
        return (
          <div key={person._id}>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPeople;
