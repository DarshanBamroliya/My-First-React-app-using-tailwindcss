import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Cusbtn = ({
  onClick,
  buttonText,
  img,
  customClasses,
  imgclass,
  btnclass,
}) => {

  const[storedUserName,setStoredUserName] = useState()

  useEffect(()=>{
    setStoredUserName(localStorage.getItem("userName"))
    const handleStorage = async ()=>{
      setStoredUserName(localStorage.getItem("userName"))
    }
     window.addEventListener('storage',handleStorage)
     return ()=> window.removeEventListener('storage',handleStorage)
   },[])

  const navigate =useNavigate()

  return (
    <>
      <button
        onClick={() => {
          if (storedUserName === null) {
            navigate('/login')
          } else {
            onClick();
          }
        }}
        className={`rounded-md cursor-pointer inline ${customClasses}`}
      >
        {img && <img src={img} className={imgclass} alt={buttonText} />}
        <span className={btnclass}>{buttonText}</span>
      </button>
    </>
  );
};

export default Cusbtn;
