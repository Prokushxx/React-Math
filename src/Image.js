import React from "react";
import pic from './images/pic.jpg'

const Image = () =>
{
  return(

 <div className="flex justify-center">
 <div className="h-1/2 w-1/2">
  <img src={pic} alt="No Image" />
 </div>
 </div>
  );
}

export default Image;