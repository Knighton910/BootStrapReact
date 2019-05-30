import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props =>  {
     const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Max', age: 29 },
            { name: 'kelv', age: 33 },
            { name: 'Tonya', age: 74 }
        ]
    })

    const [otherState, setOtherState] = useState('some other value')

    console.log(personsState, otherState)

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: 'Thad Chocran', age: 91 },
                {name: 'kelv', age: 33 },
                {name: 'Tonya', age: 44 }
            ]
        })
    }

    return (
        <div className="App">
            <h1>Im a React app</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>

            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
}

export default App;



