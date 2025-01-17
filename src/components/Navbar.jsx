import React, { useState, useEffect } from "react";
import FirstNavbar from "./FirstNavbar";
import SecondNavbar from "./SecondNavbar";

const Navbar = () => {
  const [showSecondNavbar, setShowSecondNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show second navbar when scrolling down, hide when at the top
      setShowSecondNavbar(window.scrollY > 100); // Adjust `50` as per your needs
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* First Navbar - Only visible at the top */}
      <FirstNavbar />

      {/* Second Navbar - Fixed and appears after scrolling */}
      {showSecondNavbar && (
        <SecondNavbar   />
      )}
    </div>
  );
};

export default Navbar;
