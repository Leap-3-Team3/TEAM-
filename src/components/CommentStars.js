import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
const CommentStars = () => {
  return (
    <IconContext.Provider value={{ color: "#FFBB00",fill: '#FFBB00'}}>
      <div className="flex flex-row gap-4 p-2">
        <AiFillStar style={{fontSize: 24}}></AiFillStar>
        <AiFillStar style={{fontSize: 24}}></AiFillStar>
        <AiFillStar style={{fontSize: 24}}></AiFillStar>
        <AiFillStar style={{fontSize: 24}}></AiFillStar>
        <AiFillStar style={{fontSize: 24}}></AiFillStar>
      </div>
    </IconContext.Provider>
  );
};

export default CommentStars;
