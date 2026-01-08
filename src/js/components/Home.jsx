import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";     // this is OK if file is exactly Card.jsx
import CompJ from "./CompJ.jsx";   // FIX: capital C and J

const Home = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Card>
        <CompJ />
      </Card>
    </div>
  );
};

export default Home;