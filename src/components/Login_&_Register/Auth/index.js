import React, { useState,useEffect } from "react";
import Signup from "../Register/index";
import Login from "../Login/imdex";

function Auth() {

  const[storedUserName,setStoredUserName] = useState()

  useEffect(()=>{
   setStoredUserName(localStorage.getItem("userName"))
    const handleStorage = async ()=>{
     setStoredUserName(localStorage.getItem("userName"))
    }
     window.addEventListener('storage',handleStorage)
     return ()=> window.removeEventListener('storage',handleStorage)
   },[])


  const [isSignup, setIsSignup] = useState(storedUserName ? false : true);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 container mx-auto sm:h-screen h-svh justify-items-center items-center">
        <div className="">
          <h1 className="lg:text-4xl sm:text-2xl text-4xl leading-snug font-Franklin lg:font-extrabold sm:font-bold max-[375px]:text-xl">
            Sign {isSignup ? "up" : "in"} to <br /> Book Your Package
          </h1>
          {!storedUserName && (
            <p className="mt-5 lg:text-2xl sm:text-lg text-2xl font-semibold font-Inter max-[375px]:text-xl">
              {isSignup
                ? "Already have an account?"
                : "If you don't have an account"}
              <br />
              you can{" "}
              <span
                className="ml-1 cursor-pointer text-[#6348F9] font-bold"
                onClick={() => {
                  setIsSignup(!isSignup);
                  setIsLogin(false);
                }}
              >
                {isSignup ? "Login here!" : "Register here!"}
              </span>
            </p>
          )}
        </div>
        <div className="lg:block hidden mt-20">
          <img src="/img/login.png" alt="Login Image" />
        </div>
        {isSignup ? (
          <>
            <Signup
              setIsLogin={setIsLogin}
              setIsSignup={() => setIsSignup(!isSignup)}
            />
          </>
        ) : (
          <Login setIsSignup={() => setIsSignup(!isSignup)} />
        )}
      </div>
    </>
  );
}

export default Auth;
