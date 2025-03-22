import React, { useState } from "react";

function Signup({ setIsSignup }) {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [isEmailerror, setisEmailerror] = useState("");
  const [isPassworderror, setisPassworderror] = useState("");
  const [ismobileNumbererror, setismobileNumbererror] = useState("");
  const [mobileNumberClicked, setMobileNumberClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {

    if (!userName || !userPassword || !confirmPassword || !mobileNumber) {
      alert("Please fill in all inputs");
      return;
  }
    
    if (!userName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userName)) {
      setisEmailerror("Please enter a valid email address");
      setIsWrong(true);
      setTimeout(() => {
        setisEmailerror("");
        setIsWrong(false);
      }, 3000);
      return;
    }

    if (
      !userPassword ||
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        userPassword
      )
    ) {
      setisPassworderror(
        "Please enter a eight characters including one uppercase letter, one special character and alphanumeric characters"
      );
      setIsWrong(true);
      setTimeout(() => {
        setisPassworderror("");
        setIsWrong(false);
      }, 5000);
      return;
    }

    if (!mobileNumber || !/^[0-9]{10}$/.test(mobileNumber)) {
      setismobileNumbererror("Please enter a valid mobileNumber");
      setIsWrong(true);
      setTimeout(() => {
        setismobileNumbererror("");
        setIsWrong(false);
      }, 5000);
      return;
    }

    if (userName && userPassword && confirmPassword && mobileNumber) {
      if (userPassword !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        setIsWrong(true);
        setTimeout(() => {
          setErrorMessage("");
          setIsWrong(false);
        }, 3000);
        return;
      }

      localStorage.setItem("userName", userName);
      localStorage.setItem("userPassword", userPassword);
      localStorage.setItem("mobileNumber", mobileNumber);

      const passwordChunks = chunkString(userPassword, 10000); // Chunk size of 10000 characters
      passwordChunks.forEach((chunk, index) => {
        localStorage.setItem(`userPassword_chunk_${index}`, chunk);
      });

      window.dispatchEvent(new Event('storage'))
      setIsSignup();
      
    } else {
      alert("please fill all inputs");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const mobileclickhendale = () => {
    if (!mobileNumberClicked) {
      setMobileNumber("+91");
      setMobileNumberClicked(true);
    }
  };

  const chunkString = (str, size) => {
    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = str.substr(o, size);
    }
    return chunks;
  };

  return (
    <div className="w-full font-Franklin text-center flex items-center flex-col">
      <div className="flex flex-col xl:w-4/5  w-4/5">
        <h1 className="font-katibeh text-4xl mb-2">Signup</h1>
        <hr className="text-center w-50 mb-4" />
        <input
          onChange={(e) => setUserName(e.target.value)}
          className="h-[40px] bg-blue-50 font-semibold text-lg px-5  rounded-md"
          type="email"
          placeholder="Email"
          required
        />
        {isWrong && (
          <span className="text-red-600 text-start">{isEmailerror}</span>
        )}
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
        {isWrong && (
          <span className="text-red-600 text-start">{isPassworderror}</span>
        )}
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="h-[40px] bg-blue-50 font-semibold text-lg px-5 mt-7 rounded-md"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <input
          onClick={mobileclickhendale}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="h-[40px] bg-blue-50 font-semibold text-lg px-5 mt-7 rounded-md"
          type="tel"
          placeholder="Mobile Number"
          value={mobileNumber}
          required
        />
        {isWrong && (
          <span className="text-red-600 text-start">{ismobileNumbererror}</span>
        )}
        <button
          className="bg-[#6348F9] font-bold h-[40px] text-white mb-5 mt-7"
          onClick={handleSignup}
        >
          Signup
        </button>

        {isWrong && <span className="text-red-600">{errorMessage}</span>}
      </div>
       <button className="border-2 border-[#C6C6C6] px-4 ">
              <img src="img/google.png" className="w-11 py-1" />
            </button>
    </div>
  );
}

export default Signup;
