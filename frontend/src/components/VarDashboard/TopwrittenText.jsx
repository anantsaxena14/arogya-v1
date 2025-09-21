import React from 'react';
import {useState} from 'react';


function TopwrittenText() {
    const [name, SetName] = useState("Lavansh")
  return (
    <>
    <div className = "text-3xl font-bold p-4">Good Morning , {name}! </div>
    <div className = "pl-4 text-gray-500">Here's your health overview for today</div>
   </>
  );
}

export default TopwrittenText;
