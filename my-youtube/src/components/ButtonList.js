import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Valentines",
    "Cooking",
    "News",
    "Movies",
    "AI",
  ];

  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={`${item}-${index}`} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
