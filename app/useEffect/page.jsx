"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function page() {
  const pathName = usePathname();

  const [dummy, setDummy] = useState(false);
  const [randomNum, setRandomNum] = useState();

  const [animeImg, setAmineImg] = useState();

  const [weather, setWeather] = useState("erode");
  const [weatherText, setWeatherText] = useState();

  useEffect(() => {
    setRandomNum(Math.floor(Math.random() * 10 + 1));
  });

  const getAmineImage = async () => {
    const ranNum = Math.floor(Math.random() * 100) + 1;
    setAmineImg(
      "https://api.multiavatar.com/" + ranNum + ".png?apikey=bc9WhJgiXatEOs"
    );
  };

  const getWeatherData = async () => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=02e8630bce3d40afb0095855242403&q=${weather}&days=1&aqi=no&alerts=no`
    );
    const { current } = await res.json();
    setWeatherText(current.condition.text);
  };

  useEffect(() => {
    getAmineImage();
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [weather]);

  return (
    <div className="space-y-10 h-[90vh] overflow-y-scroll">
      <div className="text-4xl text-center">{pathName.slice(1)}</div>
      <div className="space-y-5">
        <div className="capitalize text-3xl">without dependency array</div>
        <div>Random Number: {randomNum}</div>
        <button className="button" onClick={() => setDummy(!dummy)}>
          Click
        </button>
        <div className="text-cyan-500">* changes on every state change</div>
      </div>
      <div className="space-y-5">
        <div className="capitalize text-3xl ">with Empty dependency array</div>
        {animeImg != undefined && (
          <div className="flex justify-center">
            <img src={animeImg} className="w-40 h-40" />
          </div>
        )}
        <div className="text-cyan-500">* changes on every page refresh</div>
      </div>
      <div className="space-y-5">
        <div className="capitalize text-3xl">with dependency array</div>
        <span>Get Weather : </span>
        <input
          type="text"
          className="input"
          placeholder="enter the city name"
          onKeyDown={(e) =>
            e.key == "Enter" && setWeather(e.currentTarget.value)
          }
        />
        {weatherText == undefined ? (
          <div>loading....</div>
        ) : (
          <div>
            weather in {weather} : {weatherText}
          </div>
        )}
        <div className="text-cyan-500">
          * changes only when weather state is changed
        </div>
      </div>
    </div>
  );
}

export default page;
