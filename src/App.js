import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import User from './Components/Users/User';

function App() {
  //this state for all users
  const [user, setUser] = useState([]);

  //this  state for team member adding
  const [team, setTeam] = useState([]);

  useEffect( () =>{
    fetch('https://randomuser.me/api/?results=150')
    .then(res => res.json())
    .then(data => setUser(data.results))
  },[])
  //this is the button for getting name of member
  const addMember = (name) =>{
    // console.log('member added', name);
    setTeam ([...team, name])
  }
  return (
    <div style={{backgroundColor: 'green'}}>

      <h1 style={{textAlign:'center'}}>All users made by zahid</h1>
       {/* idx that means index which is use for key error handle */}
<ol>
      {
        team.map((m, idx )=> <li key={idx}>{m}</li>)
      }
</ol>      
     {
       user.map(user => <User user = {user} addMember= {addMember} key={user.phone} ></User> )
     }
    </div>
  );
}

export default App;
