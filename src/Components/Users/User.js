import React from 'react';
import { useState } from 'react';

const User = (props) => {
    //this is for adding number
    const {name, email, phone, picture} = props.user;
    const [mobile, setMobile] = useState('');
    const showPhone =()=>setMobile(phone);

    //this is for addMember
    const addMember = props.addMember;
    const fullName =name.first + ' ' + name.last;
    return (

        <div style={{border: '1px solid red', textAlign:'center', backgroundColor:'orange', marginBottom: '30px', width: '300px', marginLeft: '40%'}}>
            <img src={picture.large} alt=""/>
           <h4>name:{fullName}</h4>
          <p>email:{email}</p>
          <p>phone:{mobile}</p> 
          <button onClick={showPhone}>add phone number</button>
          <button onClick={()=>addMember(fullName)}> add user</button>
        </div>
    );
};

export default User;