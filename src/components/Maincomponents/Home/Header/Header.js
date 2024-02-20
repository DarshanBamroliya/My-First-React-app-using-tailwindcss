import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Notecontext from "../../../../Context/Notes/Notescontext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [storedUserName, setStoredUserName] = useState();
  const user = useContext(Notecontext);

  useEffect(() => {
    setStoredUserName(localStorage.getItem("userName"));
    const handleStorage = async () => {
      setStoredUserName(localStorage.getItem("userName"));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <header className="container mx-auto bg-white font-katibeh sm:px-3 md:px-10 px-2">
      <nav className="flex items-center justify-between" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center">
            <img className="h-20 w-auto" src="/img/logo.png" alt="Logo" />
            <h1 className="text-2xl leading-0">Tour & Travel {user.Name}</h1>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="lg:flex lg:gap-x-12 hidden ">
          <a href="#" className="text-2xl ">
            Home
          </a>
          <a href="#" className="text-2xl">
            Tours
          </a>
          <a href="#" className="text-2xl">
            Hotel
          </a>
          <a href="#" className="text-2xl">
            Pages
          </a>
          <a href="#" className="text-2xl">
            Blog
          </a>
          <a href="#" className="text-2xl">
            Contact
          </a>
          {storedUserName ? (
          <button
            className="bg-[#F04823] text-white text-2xl px-5 pb-2 rounded-md ml-5"
            onClick={() => {
              localStorage.clear();
              window.dispatchEvent(new Event('storage'))
              setStoredUserName(null);
            }}
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="bg-[#F04823] text-white text-2xl px-5 pb-2 rounded-md ml-5">
              Login here
            </button>
          </Link>
        )}
        </div>
        
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            {/* Mobile Menu Content */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <img className="h-20 w-auto" src="/img/logo.png" alt="" />
                <h1 className=" text-2xl leading-0">Tour & Travel</h1>
              </a>
              {/* Close Menu Button */}
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Mobile Menu Links */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div class="-my-6 divide-y divide-gray-500/10">
                    {/* Other Mobile Menu Links */}
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-3xl "
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-3xl  "
                    >
                      Tours
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-3xl  "
                    >
                      Hotel
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-3xl  "
                    >
                      Pages
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-3xl  "
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-3xl  "
                    >
                      Contact
                    </a>
                  </div>
                  <div className="py-6">
                  {storedUserName ? (
                    <button
                      className="bg-[#F04823] text-white text-2xl px-5 pb-2 rounded-md ml-5"
                      onClick={() => {
                        localStorage.clear();
                        setStoredUserName(null);
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to={"/login"}>
                      <button className="bg-[#F04823] text-white text-2xl px-5 pb-2 rounded-md ml-5">
                        Login here
                      </button>
                    </Link>
                  )}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
