import React, { useState } from 'react'
import axios from 'axios';
import PersonForm from './PersonFrom';
import DisplayPeople from './DisplayPeople';
const Home = (props) => {
    
    const [people, setPeople] = useState([]);
    
    return (
        <div>
           <PersonForm people={people} setPeople={setPeople} />
            <hr/>
           <DisplayPeople people={people} setPeople={setPeople} />
        </div>
    )
}
export default Home;