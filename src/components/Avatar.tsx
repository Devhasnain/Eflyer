import Link from "next/link";
import React from "react";

type Props = {
  name: string;
};

const Avatar = ({ name }: Props) => {
  var randomColor = generateRandomColor();
 
  return (
    <div
    style={{backgroundColor:randomColor}}
     className={`flex items-center justify-center h-8 w-8 rounded-full ${randomColor}`}>
      <Link href={"/dashboard"}>
        <span className="text-lg font-semibold text-white">
          {name && name[0].toUpperCase()}
        </span>
      </Link>
    </div>
  );
};

export default Avatar;

 function generateRandomColor () {
  // Generate random values for red, green, and blue channels
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Combine the values to create a color code
  var colorCode =
    "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);

  return colorCode;
}

function componentToHex(component: any) {
  var hex = component.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}