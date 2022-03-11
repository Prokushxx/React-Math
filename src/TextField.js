import React from "react";
import { useState } from "react";

const TextField = () => {
  const [info,setInfo] = useState('');
  return (
    
    <div>
      <input type='text' className="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
  )
}

export default TextField;