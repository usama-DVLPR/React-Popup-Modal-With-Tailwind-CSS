import React, { useState } from "react";
import Card from "./Card";
const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  return (
    <>
      <div className="h-screen bg-teal-500 flex items-center justify-center">
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-red-300 px-5 py-2 rounded-md text-gray-600 hover:bg-opacity-50"
          >
            Clicked me
          </button>
        </div>
        <Card showModal={showModal} handleOnClose={handleOnClose}/>
      </div>
    </>
  );
};

export default Home;
