import React from "react";

const Card = ({ showModal, handleOnClose }) => {
  if (!showModal) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center ">
        <div className="bg-white flex flex-col items-center gap-3 justify-center px-10 py-16 rounded-md mx-5 md:w-1/2 lg:w-1/3 md:mx-0 relative">
          <button
            onClick={handleOnClose}
            className="absolute top-3 right-5 text-xl text-gray-500 "
          >
            X
          </button>
          <h2 className="text-2xl text-red-400">Popup Card</h2>
          <p className="text-sm text-center text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            cupiditate iste ducimus, doloribus quos fugiat at suscipit. Eligendi
            dolorem commodi recusandae illo magni, consectetur a ex perspiciatis
            aliquam adipisci similique?
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
