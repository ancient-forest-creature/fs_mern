import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonFrom';
import DisplayPeople from '../components/DisplayPeople';
const Home = () => {
    
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/person/")
        .then(res => {
            setPeople(res.data)
        })
        .catch((err) => console.error(err))
    }, []);
    
    return (
        <div>
           <PersonForm people={people} setPeople={setPeople} />
            <hr/>
           <DisplayPeople people={people} setPeople={setPeople} />
        </div>
    )
}
export default Home;