import React from "react";
import CommentStars from "./CommentStars";
import CustomAvatarWithText from "./CustomAvatarWithText";
import CustomText from "./CustomText";

const HomeComments = () => {
  let arr = new Array(5).fill(0);
  return (
    <div className="h-[500px] w-screen flex flex-col">
      <div className="justify-center flex w-auto">
        <p className="text-5xl text-black font-bold text-left tracking-wide">
          What people say about us
        </p>
      </div>
      <div className="flex flex-row w-full p-5 overflow-scroll scroll-smooth">
        {arr.map(() => {
          return (
            <div className="h-[374px] min-w-[366px] flex flex-col shadow-xl m-5 p-5 justify-between">
              <div className="flex flex-col">
                <CommentStars></CommentStars>
                <CustomText
                  className="w-4/5 h-1/2"
                  textColor={"text-black"}
                  text={
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                  }
                ></CustomText>
              </div>
              <CustomAvatarWithText />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomeComments;
