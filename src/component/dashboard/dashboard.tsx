// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserProfile } from "../../models/user_profile";
import { useTranslation } from "react-i18next";
import {
  faCookieBite,
  faGear,
  faLocationDot,
  faMagnifyingGlass,
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

  return (
    <>
      <div className="relative flex flex-col h-screen w-screen bg-gray-900">
        {/* <aside
          id="Sidebar"
          className="flex justify-center h-full w-60 rounded-tr-2xl rounded-br-2xl bg-gray-950 text-gray-200"
        >
          <div className="font-roberto">
            <section className="flex flex-col items-center">
              <p className="my-5 text-2xl">{shopName}</p>
              <img
                className="w-24 h-24 mb-3 object-cover rounded-full border-2 border-white"
                src={fon.GetPic()}
                alt=""
              />
              <p className="mt-3">{fon.GetFullName()}</p>
              <p className="text-sm text-newPink-200">
                {t("dashboard.timeDelivery")}
              </p>
            </section>

            <section className="mt-10 ml-10">
              <div className="flex flex-col items-start">
                <button className="mb-4">
                  <FontAwesomeIcon
                    icon={faHouseChimneyWindow}
                    className="w-5 mr-2"
                  />
                  Dashboard
                </button>
                <button className="flex mb-4">
                  <svg
                    className="mr-2"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    width={20}
                    height={20}
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <circle
                        style={{ fill: "#FFFFFF" }}
                        cx="256"
                        cy="115.986"
                        r="23.522"
                      ></circle>
                      <path
                        style={{ fill: "#FFFFFF" }}
                        d="M486.854,384.455h-5.777v-19.876c0-124.306-100.772-225.077-225.077-225.077 c-124.306,0-225.077,100.771-225.077,225.077v19.876h-5.777c-9.688,0-17.542,7.853-17.542,17.542 c0,9.688,7.853,17.542,17.542,17.542h461.708c9.688,0,17.542-7.853,17.542-17.542C504.396,392.308,496.543,384.455,486.854,384.455z "
                      ></path>
                      <g>
                        <path
                          style={{ fill: "#FFFFFF" }}
                          d="M437.31,318.478c-3.542-13.924-8.721-27.458-15.393-40.228l13.479-7.042 c7.217,13.813,12.82,28.455,16.653,43.521L437.31,318.478z"
                        ></path>
                        <path
                          style={{ fill: "#FFFFFF" }}
                          d="M412.007,261.474c-25.635-38.653-64.309-66.335-108.897-77.946l3.832-14.717 c48.217,12.556,90.03,42.478,117.739,84.256L412.007,261.474z"
                        ></path>
                      </g>
                      <path
                        style={{ fill: "#FFFFFF" }}
                        d="M486.854,384.455c9.688,0,17.542,7.853,17.542,17.542l0,0c0,9.688-7.853,17.542-17.542,17.542H25.146 c-9.688,0-17.542-7.853-17.542-17.542l0,0c0-9.688,7.853-17.542,17.542-17.542H486.854z"
                      ></path>
                      <path
                        style={{ fill: "#000000" }}
                        d="M511.968,400.731c-0.007-0.138-0.021-0.274-0.03-0.412c-0.018-0.28-0.036-0.56-0.064-0.836 c-0.016-0.164-0.041-0.326-0.06-0.49c-0.029-0.247-0.058-0.496-0.094-0.74c-0.026-0.174-0.059-0.346-0.089-0.519 c-0.04-0.231-0.078-0.463-0.124-0.691c-0.035-0.179-0.078-0.356-0.118-0.533c-0.05-0.22-0.097-0.44-0.152-0.657 c-0.046-0.18-0.096-0.358-0.146-0.536c-0.058-0.211-0.117-0.423-0.179-0.633c-0.055-0.178-0.114-0.356-0.172-0.532 c-0.068-0.206-0.136-0.412-0.209-0.614c-0.063-0.175-0.13-0.35-0.197-0.523c-0.077-0.2-0.154-0.399-0.236-0.597 c-0.072-0.173-0.147-0.346-0.223-0.517c-0.085-0.194-0.171-0.386-0.262-0.577c-0.08-0.169-0.163-0.338-0.246-0.506 c-0.094-0.189-0.19-0.377-0.289-0.563c-0.087-0.165-0.177-0.328-0.269-0.492c-0.102-0.184-0.207-0.365-0.314-0.545 c-0.095-0.161-0.193-0.32-0.291-0.48c-0.111-0.177-0.223-0.353-0.338-0.527c-0.103-0.156-0.207-0.312-0.313-0.465 c-0.119-0.171-0.239-0.341-0.362-0.509c-0.111-0.151-0.221-0.302-0.335-0.451c-0.126-0.165-0.254-0.327-0.384-0.489 c-0.118-0.147-0.234-0.292-0.355-0.436c-0.133-0.159-0.27-0.314-0.407-0.469c-0.124-0.14-0.247-0.281-0.374-0.419 c-0.141-0.153-0.285-0.302-0.43-0.451c-0.13-0.134-0.259-0.269-0.391-0.399c-0.148-0.147-0.3-0.289-0.452-0.432 c-0.135-0.127-0.269-0.256-0.407-0.379c-0.157-0.142-0.318-0.278-0.48-0.416c-0.139-0.119-0.276-0.239-0.417-0.355 c-0.167-0.137-0.34-0.269-0.51-0.401c-0.141-0.109-0.279-0.221-0.422-0.327c-0.181-0.135-0.368-0.263-0.553-0.393 c-0.138-0.097-0.274-0.198-0.414-0.292c-0.209-0.141-0.423-0.274-0.637-0.409c-0.122-0.077-0.239-0.157-0.362-0.232 c-0.336-0.204-0.676-0.399-1.021-0.588c-0.118-0.064-0.238-0.122-0.357-0.184c-0.233-0.123-0.465-0.245-0.704-0.361 c-0.153-0.074-0.309-0.141-0.463-0.212c-0.208-0.095-0.414-0.193-0.624-0.283c-0.167-0.071-0.338-0.136-0.506-0.204 c-0.203-0.081-0.405-0.164-0.609-0.24c-0.174-0.065-0.353-0.124-0.529-0.185c-0.203-0.07-0.406-0.142-0.61-0.207 c-0.181-0.058-0.366-0.109-0.55-0.163c-0.205-0.06-0.409-0.121-0.615-0.175c-0.187-0.049-0.374-0.092-0.563-0.138 c-0.208-0.05-0.415-0.1-0.625-0.145c-0.191-0.041-0.382-0.076-0.574-0.111c-0.211-0.04-0.422-0.079-0.634-0.114 c-0.193-0.031-0.387-0.058-0.582-0.084c-0.215-0.029-0.429-0.058-0.646-0.082c-0.197-0.021-0.393-0.041-0.591-0.057 c-0.128-0.011-0.254-0.027-0.383-0.038v-12.337c0-62.152-24.203-120.583-68.151-164.53c-37.8-37.8-86.318-60.976-138.698-66.725 c3.34-4.959,5.292-10.926,5.292-17.341c0-17.162-13.962-31.124-31.124-31.124s-31.124,13.962-31.124,31.124 c0,6.416,1.952,12.383,5.292,17.341c-52.38,5.75-100.899,28.925-138.699,66.725c-43.946,43.95-68.149,102.381-68.149,164.532v12.337 c-0.129,0.009-0.255,0.025-0.383,0.038c-0.198,0.017-0.394,0.035-0.591,0.057c-0.216,0.024-0.431,0.053-0.646,0.082 c-0.195,0.026-0.389,0.054-0.582,0.084c-0.213,0.034-0.424,0.074-0.634,0.114c-0.192,0.037-0.384,0.071-0.574,0.112 c-0.21,0.045-0.417,0.094-0.625,0.145c-0.188,0.045-0.376,0.088-0.563,0.138c-0.207,0.055-0.411,0.116-0.615,0.175 c-0.184,0.054-0.367,0.105-0.55,0.163c-0.206,0.065-0.408,0.137-0.61,0.207c-0.176,0.061-0.354,0.12-0.529,0.185 c-0.206,0.076-0.409,0.16-0.611,0.241c-0.168,0.067-0.338,0.132-0.503,0.203c-0.21,0.089-0.417,0.188-0.624,0.282 c-0.155,0.071-0.311,0.139-0.464,0.213c-0.235,0.115-0.466,0.236-0.699,0.358c-0.12,0.063-0.242,0.122-0.361,0.187 c-0.346,0.189-0.685,0.384-1.021,0.588c-0.123,0.075-0.241,0.155-0.362,0.232c-0.213,0.135-0.428,0.268-0.637,0.409 c-0.14,0.094-0.276,0.195-0.414,0.292c-0.185,0.13-0.371,0.259-0.553,0.393c-0.143,0.106-0.281,0.218-0.422,0.327 c-0.171,0.133-0.343,0.264-0.51,0.401c-0.141,0.116-0.278,0.236-0.417,0.355c-0.16,0.138-0.322,0.274-0.48,0.416 c-0.138,0.124-0.272,0.252-0.407,0.379c-0.152,0.143-0.304,0.285-0.452,0.432c-0.133,0.131-0.262,0.266-0.391,0.399 c-0.145,0.149-0.289,0.298-0.43,0.451c-0.127,0.137-0.25,0.278-0.374,0.419c-0.137,0.155-0.274,0.311-0.407,0.469 c-0.121,0.144-0.237,0.289-0.355,0.436c-0.13,0.161-0.259,0.323-0.384,0.489c-0.114,0.149-0.224,0.299-0.335,0.451 c-0.123,0.168-0.243,0.338-0.362,0.509c-0.106,0.153-0.21,0.309-0.313,0.465c-0.115,0.174-0.228,0.35-0.339,0.527 c-0.099,0.159-0.196,0.318-0.291,0.48c-0.107,0.18-0.212,0.362-0.314,0.545c-0.091,0.163-0.18,0.326-0.269,0.492 c-0.098,0.187-0.195,0.374-0.289,0.563c-0.083,0.167-0.166,0.336-0.246,0.505c-0.09,0.192-0.176,0.384-0.262,0.579 c-0.075,0.171-0.151,0.343-0.222,0.516c-0.081,0.198-0.159,0.396-0.235,0.596c-0.067,0.174-0.135,0.349-0.198,0.525 c-0.073,0.203-0.141,0.409-0.208,0.614c-0.059,0.176-0.118,0.354-0.172,0.532c-0.064,0.21-0.122,0.421-0.179,0.633 c-0.05,0.178-0.1,0.357-0.146,0.536c-0.055,0.218-0.103,0.438-0.152,0.657c-0.04,0.177-0.082,0.355-0.118,0.533 c-0.046,0.229-0.084,0.46-0.124,0.691c-0.029,0.173-0.063,0.345-0.089,0.519c-0.036,0.245-0.065,0.493-0.094,0.74 c-0.019,0.163-0.044,0.325-0.06,0.49c-0.027,0.277-0.046,0.557-0.064,0.836c-0.009,0.138-0.023,0.274-0.03,0.412 C0.011,401.151,0,401.573,0,401.997c0,13.866,11.28,25.146,25.146,25.146h461.708c13.866,0,25.146-11.28,25.146-25.146 C512,401.573,511.989,401.151,511.968,400.731z M240.084,115.982c0-8.776,7.14-15.916,15.916-15.916 c8.776,0,15.916,7.14,15.916,15.916s-7.14,15.916-15.916,15.916C247.224,131.898,240.084,124.759,240.084,115.982z M486.854,411.934 H25.146c-5.48,0-9.938-4.458-9.938-9.938s4.458-9.938,9.938-9.938h13.381h81.616v-15.208H38.527v-12.272 c0-58.089,22.621-112.702,63.697-153.776S197.911,147.106,256,147.106s112.701,22.621,153.776,63.697s63.697,95.688,63.697,153.777 v12.272H140.422v15.208h333.051h13.381c5.48,0,9.938,4.458,9.938,9.938S492.334,411.934,486.854,411.934z"
                      ></path>
                      <rect
                        x="170.836"
                        y="346.437"
                        style={{ fill: "#FFFFFF" }}
                        width="279.572"
                        height="15.208"
                      ></rect>
                    </g>
                  </svg>
                  Orders
                </button>
                <button className="mb-4">
                  <FontAwesomeIcon icon={faLayerGroup} className="w-5 mr-2" />
                  Details
                </button>
                <button className="mb-4 pl-[2px]">
                  <FontAwesomeIcon icon={faWallet} className="w-5 mr-2" />
                  Finance
                </button>
              </div>
            </section>
          </div>
        </aside> */}

        <nav
          id="NavBar"
          className="flex justify-between items-center w-full h-16 pl-5 my-5"
        >
          <section id="SearchBar" className="flex">
            <div className="flex justify-center w-64 py-1 px-3 rounded-3xl bg-stone-200 text-black">
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

          <section id="Settings" className="flex">
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
          <section id="Main" className="relative flex flex-col flex-grow">
            <section id="Title" className="flex pl-5 max-w-6xl text-stone-200">
              <div className="flex justify-between w-full">
                <p className="font-semibold text-3xl">{t("dashboard.title")}</p>

                <button className="w-20 rounded-3xl bg-newpurple-700">
                  <FontAwesomeIcon icon={faCookieBite} />
                  Snack
                </button>
              </div>
            </section>
          </section>

          <section id="MyOrder" className="flex h-full w-64 mr-5">
            <aside
              id="Sidebar"
              className="rounded-2xl bg-gray-950 text-stone-200"
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
