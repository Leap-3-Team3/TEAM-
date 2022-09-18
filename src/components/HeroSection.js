import React, { useState } from "react";
import CustomInput from "./CustomInput";

const HeroSection = () => {
  const [value, setValue] = useState("");
  const onChangeInput = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  //height: 100vh;
  //   width: 100%;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  //   object-fit: contain;
  return (
    <div className="h-[800px] w-full flex flex-col justify-center items-start object-cover bg-cover bg-center bg-no-repeat bg-hero-pattern">
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div className="flex flex-col items-start justify-start w-2/3 p-28 h-1/2">
        <h1 className="text-5xl text-white font-bold w-[512px] text-left tracking-wide">
          Instant collaborations for remote teams
        </h1>
        <div className="text-lg text-white font-medium mt-5 w-96 text-left">
          All in one for your remote team chats, collaboration and track
          projects
        </div>
        <div className="flex flex-row mt-10">
          <CustomInput
            plh="Email"
            onChange={onChangeInput}
          ></CustomInput>
          <button className="h-14 rounded bg-sky-400 text-white px-2.5">Get early access</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
