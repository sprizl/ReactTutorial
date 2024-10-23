// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserProfile } from "../../models/user_profile";
import { useTranslation } from "react-i18next";
import {
  faBowlFood,
  faCookieBite,
  faGear,
  faLocationDot,
  faMagnifyingGlass,
  faMugHot,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faClock,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";

const Dashboard: React.FC = () => {
  const { t, i18n } = useTranslation();
  // const shopName = "Bann Mongkol";
  const fon = new UserProfile(
    "Pattarapan",
    "M",
    "fon@gmail.com",
    "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg"
  );

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "th" : "en";
    i18n.changeLanguage(newLang);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleUserProfile = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      userProfileRef.current &&
      !userProfileRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const userProfileRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const mostLikeMeal = [
    {
      name: "Pizza & Pasta",
      url: "https://cdn.pixabay.com/photo/2017/08/06/06/42/pizza-2589569_1280.jpg",
      count: 20,
    },
    {
      name: "Salad Mix",
      url: "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_1280.jpg",
      count: 17,
    },
    {
      name: "Salad Mix",
      url: "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_1280.jpg",
      count: 17,
    },
    {
      name: "Salad Mix",
      url: "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_1280.jpg",
      count: 17,
    },
    {
      name: "Salad Mix",
      url: "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_1280.jpg",
      count: 17,
    },
    {
      name: "Salad Mix",
      url: "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_1280.jpg",
      count: 17,
    },
  ];

  return (
    <>
      <div className="relative flex flex-col h-screen w-screen bg-gray-900 overflow-hidden">
        <nav
          id="NavBar"
          className="flex justify-between items-center w-full h-16 pl-5 my-5"
        >
          <section id="SearchBar" className="flex">
            <div className="flex justify-between w-80 py-1 px-3 rounded-3xl bg-stone-200 text-black">
              <input
                type="text"
                placeholder={t("dashboard.searchDinner")}
                className="bg-stone-200 placeholder:text-stone-500 "
              />
              <button>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-newpurple-400"
                />
              </button>
            </div>
          </section>

          <section id="Profile" className="flex">
            <div className="flex items-center pr-5">
              <FontAwesomeIcon
                icon={faBell}
                className="w-5 h-5 text-newpurple-200"
              />
            </div>
            <div
              ref={userProfileRef}
              className="relative flex items-center pr-5 text-gray-300"
            >
              <img
                className="w-10 h-10 object-cover rounded-full border-2 border-white"
                onClick={toggleUserProfile}
                src={fon.GetPic()}
                alt=""
              />
              {isOpen && (
                <div className="absolute right-5 top-12 z-10 w-36 shadow-lg">
                  <div className="flex flex-col rounded-lg bg-gray-950">
                    <button className="flex items-center justify-end w-full px-4 py-2 text-sm rounded-tl-lg rounded-tr-lg border border-gray-500 hover:bg-gray-800 duration-75 hover:scale-105 hover:rounded-md">
                      {t("dashboard.account")}
                      <FontAwesomeIcon
                        icon={faUser}
                        className="pl-2 h-[13px]"
                      />
                    </button>
                    <button
                      className="flex items-center justify-end px-4 py-2 text-sm border border-b-0 border-t-0 border-gray-500 hover:bg-gray-800 duration-75 hover:scale-105 hover:rounded-md hover:border"
                      onClick={() => changeLanguage()}
                    >
                      {t("dashboard.settings")}
                      <FontAwesomeIcon
                        icon={faGear}
                        className="pl-2 h-[13px]"
                      />
                    </button>
                    <button className="flex items-center justify-end px-4 py-2 text-sm rounded-bl-lg rounded-br-lg border border-gray-500 hover:bg-gray-800 duration-75 hover:scale-105 hover:rounded-md">
                      {t("dashboard.signout")}
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className="pl-2 w-3"
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </nav>

        <section id="Body" className="flex w-full h-full">
          <section
            id="Main"
            className="relative flex flex-col flex-grow px-5 overflow-hidden"
          >
            <section id="Title" className="flex text-stone-200">
              <p className="flex flex-grow font-semibold text-3xl">
                {t("dashboard.title")}
              </p>

              <button className="w-24 rounded-3xl mr-3 bg-newpurple-700">
                <FontAwesomeIcon
                  icon={faCookieBite}
                  className="pr-2 text-newpurple-200"
                />
                {t("dashboard.snack")}
              </button>
              <button className="w-24 rounded-3xl mr-3 bg-newpurple-700">
                <FontAwesomeIcon
                  icon={faMugHot}
                  className="pr-2 text-newpurple-200"
                />
                {t("dashboard.drinks")}
              </button>
              <button className="w-24 rounded-3xl bg-newpurple-700">
                <FontAwesomeIcon
                  icon={faBowlFood}
                  className="pr-2 text-newpurple-200"
                />
                {t("dashboard.foods")}
              </button>
            </section>
            <section
              id="MostLike"
              className="flex overflow-x-auto whitespace-nowrap"
            >
              {mostLikeMeal.map((item, i) => (
                <div key={i} className="inline-block mr-6">
                  <div className="w-40 h-40">
                    <img
                      className="w-full h-full object-contain"
                      src={item.url}
                      alt=""
                    />
                  </div>
                  <p>{item.name}</p>
                </div>
              ))}
            </section>
          </section>

          <section id="MyOrder" className="flex h-full w-64 mr-5">
            <aside
              id="Sidebar"
              className="rounded-2xl bg-gray-950 text-stone-200 w-full"
            >
              <div className="font-roberto">
                <section className="mx-5">
                  <p className="flex justify-center my-9 text-2xl">
                    {t("dashboard.myOrder")}
                  </p>

                  <div className="relative grid grid-cols-10 mb-7 items-center">
                    <div>
                      <FontAwesomeIcon
                        icon={faClock}
                        className="absolute top-1 text-newpurple-200"
                      />
                    </div>
                    <p className="col-span-9">09:40 AM</p>
                  </div>

                  <div className="relative grid grid-cols-10 mb-7 items-center">
                    <div>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="absolute top-1 w-4 text-newpurple-200 "
                      />
                    </div>
                    <p className="col-span-9">
                      2817 Pacific Ave Venice, CA 90291
                    </p>
                  </div>

                  <div className="relative grid grid-cols-10 mb-7 items-center">
                    <div>
                      <FontAwesomeIcon
                        icon={faComment}
                        className="absolute top-1 w-4 text-newpurple-200"
                      />
                    </div>
                    <p className="col-span-9">Order must stay warm</p>
                  </div>
                </section>

                <section></section>
              </div>
            </aside>
          </section>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
