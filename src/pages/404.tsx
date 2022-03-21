import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center items-center bg-slate-200">
        <h1 className="font-semibold text-5xl mb-4">Страница не найдена</h1>
        <span className="text-base text-gray-600">
          Эта страница не существует
        </span>
      </div>
    </div>
  );
};

export default NotFound;
