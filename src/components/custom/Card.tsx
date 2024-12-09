import Image from "next/image";
import React from "react";

// Define the props type
interface CardProps {
  imageUrl: string;
  name: string;
  price: string;
  className?:string;
}

// Use defaultProps or a default argument
export default function Card({
  imageUrl = "/Frame32.png",
  name = "T-shirt Tape details",
  price = "199",
  className = ''
}: CardProps) {
  return (
    <div className={` ${className} p-4`} > 
      <img src={imageUrl} alt={name} className="h-72 max-md:h-56 w-96" />
      <div className="p-2">
        <h2 className="text-xl max-md:text-lg font-semibold">{name}</h2>
        <h1 className="text-sm">⭐⭐⭐⭐</h1>
        <h3 className="font-bold">${price}</h3>
      </div>
    </div>
  );
}
