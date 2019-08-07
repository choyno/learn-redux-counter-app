export const increment = (newNumber) =>{
  return{
    type: "INCREMENT",
    paramSample:  newNumber
  };
};

export const decrement = () =>{
  return{
    type: "DECREMENT"
  };
};



