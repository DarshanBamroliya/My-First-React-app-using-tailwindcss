import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// components
import Auth from "./components/Login_&_Register/Auth";
import Home from "./components/Maincomponents/Home";

function App() {
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth />} />
          </Routes>
        </BrowserRouter>
     
    </>
  );
}

export default App;
