import React from "react";

const Button = (props) => {

  return (
    <div className="">
      <button className="px-6 py-2 text-center bg-purple-700 text-white 
                       hover:bg-gray-200 hover:text-purple-700 hover:ease-out duration-300
                         text-md rounded-none border-4 border-purple-700"
        onClick={props.eventHandler}
        >
        {props.caption}
      </button>
    </div>
  );
};

export default Button;
