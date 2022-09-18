import React from "react";

const CustomAvatarWithText = ({height = "h-14", width = "w-14", style}) => {
  return (
    <div className={`flex flex-row gap-4 ${style} items-center justify ml-5`}>
        <img
        className={`rounded-full bg-cover bg-center w-14 h-14`}
          src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU="
          alt="img"
        ></img>
      <div className="text-lg text-black">Jane Cooper</div>
    </div>
  );
};

export default CustomAvatarWithText;
