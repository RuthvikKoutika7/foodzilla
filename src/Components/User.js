import { useState } from "react";

const User = ({name,location,social}) =>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count : {count2}</h1>
            <h2>{name}</h2>
            <h3>{location}</h3>
             <h3>insta handle : {social}</h3>
        </div>
    );
};

export default User;