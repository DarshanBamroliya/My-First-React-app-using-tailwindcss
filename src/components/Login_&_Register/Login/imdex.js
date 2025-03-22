import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsSignup }) {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const[storedUserName,setStoredUserName] = useState()
  const[storedUserPassword,setStoredUserPassword] = useState()
  
  useEffect(()=>{
    setStoredUserName(localStorage.getItem("userName"))
    setStoredUserPassword(localStorage.getItem("userPassword"))
    const handleStorage = async ()=>{
      setStoredUserName(localStorage.getItem("userName"))
      setStoredUserPassword(localStorage.getItem("userPassword"))
    }
     window.addEventListener('storage',handleStorage)
     return ()=> window.removeEventListener('storage',handleStorage)
   },[])



  const handleLogin = () => {

    if (storedUserName === null) {
      alert("Please signup first you not have resisterd");
      setIsSignup();
      return;
    }
    if (userName && userPassword) {
      console.log(userName === storedUserName && userPassword === storedUserPassword)
      if (userName === storedUserName && userPassword === storedUserPassword) {
        setOpenDialog(true);
      } else {
        setErrorMessage("Incorrect username or password");
        setIsWrong(true);
        setTimeout(() => {
          setErrorMessage("");
          setIsWrong(false);
        }, 3000);
      }
    } else {
      alert("please fill all inputs");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full font-Franklin text-center flex items-center flex-col">
      <div className="flex flex-col xl:w-4/5 w-4/5 ">
        <h1 className="font-katibeh text-4xl mb-2">Login</h1>
        <hr className="text-center sm:w-50 mb-4" />
        <input
          onChange={(e) => setUserName(e.target.value)}
          className="h-[40px] bg-blue-50 font-semibold text-lg px-5 rounded-md"
          type="email"
          placeholder="Email"
          required
        />
        <div className="relative">
          <input
            onChange={(e) => setUserPassword(e.target.value)}
            className="h-[40px] bg-blue-50 font-semibold text-lg px-5 mt-7 rounded-md w-full"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <button
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-3/4 transform -translate-y-1/2"
          >
            {showPassword ? (
              <img src="/img/hide.svg" alt="hide" className="w-[20px]"/>
            ) : (
              <img src="/img/show.svg" alt="show" className="w-[20px]"/>
            )}
          </button>
        </div>
        <div className="text-end mt-1">
          <p className="cursor-pointer text-[#C6C6C6] text-xs font-semibold ">
            Forgot Password
          </p>
        </div>
        <button
          className="bg-[#6348F9] font-bold h-[40px] text-white mb-5 mt-7"
          onClick={() => handleLogin("storedUserName", "storedUserPassword")}
        >
          Login
        </button>
        {!storedUserName && (
          <span
            className="text-blue-600 cursor-pointer text-lg mt-3"
            onClick={() => setIsSignup(true)}
          >
            Signup
            <hr className="mt-2" />
          </span>
        )}
        {isWrong && <span className="text-red-600">{errorMessage}</span>}
        {openDialog && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className=" inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full max-[640px]:absolute max-[640px]:top-72 sm:left-16">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Login Successful
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Welcome, {userName}!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={() => {
                      setOpenDialog(false);
                      navigate('/');
                    }}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center w-full justify-center mt-5">
        <button className="border-2 border-[#C6C6C6] px-4 mr-10">
          <img src="img/google.png" className="w-11 py-1"/>
        </button>
        <button className="border-2 border-[#C6C6C6] px-4">
          <img src="img/mo_no.png" className="w-9 py-1"/>
        </button>
      </div>
    </div>
  );
}

export default Login;
