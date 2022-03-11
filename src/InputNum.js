const InputNum = (props) => {
  return (
    <div>
     <input className="bg-gray-300 text-purple-700" type="number" onChange={props.changeEventHandler}/>
    </div>
  );
}

export default InputNum;