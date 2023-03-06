import { useState } from "react";

export const useInput = (initialValue) => {
  const [inputValue, setInputvalue] = useState(initialValue)

const hanleChange = (e) => {
  setInputvalue(e.target.value);
};
  return [inputValue, hanleChange]
}


