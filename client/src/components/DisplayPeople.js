import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const DisplayPeople = (props) => {
  const {people, setPeople} = props;

  const deletePerson = (personID) => {
    axios.delete(`http://localhost:8000/api/person/${personID}`)
      .then((res) => {
        console.log(res);
        const filterPeople = people.filter((person, index) => {
          return person._id !== personID;
        });
        console.log(filterPeople);
        setPeople(filterPeople);
      })
      .catch((err) => console.error(err));
  };

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
            <Link to={`/person/${person._id}`}> {person.firstName}'s Page!</Link>
            <p></p>
            <Link to={`/person/edit/${person._id}`}>Edit</Link>
            <p></p>
            <button onClick={(e)=>{deletePerson(person._id)}}>Delete</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPeople;
