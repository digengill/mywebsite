import React from "react";

function Footer() {
  return (
    <div className="h-screen/9 w-screen bg-slate-800 flex flex-col justify-center items-center text-gray-500">
      <p>Digen Gill &copy;{new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
