import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const DisplayPeople = (props) => {
  const {people, setPeople} = props;

  useEffect(() => {
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
      <h1>People</h1>
      {people.map((person, index) => {
        return (
          <div key={person._id}>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <Link to={`/people/${person._id}`}> {person.firstName}'s Page!</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPeople;
