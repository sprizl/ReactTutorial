// import React from "react";
import { UserProfile } from "../../models/user_profile";

const Dashboard = () => {
  const shopName = "Bann Mongkol";
  const fon = new UserProfile("Pattarapan", "M", "fon@gmail.com");
  return (
    <>
      <div className="container h-screen w-screen flex relative">
        <aside
          id="Sidebar"
          className="h-full w-60 text-center rounded-tr-2xl rounded-br-2xl bg-gray-950 text-white"
        >
          <div className="flex flex-col items-center">
            <p className="my-5 text-2xl font-roberto">{shopName}</p>
            <img
              className="w-24 h-24 mb-3 object-cover rounded-full border-2 border-white"
              src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg"
              alt=""
            />
            <p className="mt-3 font-roberto">{fon.GetFullName()}</p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Dashboard;
