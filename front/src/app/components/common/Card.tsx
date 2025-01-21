import Image from "next/image";
import React from "react";
import Interactions from "./Interactions";

interface CardProps {
  text: string;
  date: string;
  author: string;
  likes: number;
  comments: number;
  shares: number;
  image: string;
}

const Card = (CardProps: CardProps) => {
  const images = CardProps.image ? CardProps.image.split(",") : [];
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          {CardProps.author}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {CardProps.text}
        </p>
        {CardProps.image && (
          <div className="mt-4 flex justify-center space-x-1">
            {images.map((image, index) => (
              <div key={index} className="w-full max-w-[400px]">
                 <Image
                    src={image}
                    alt="post image"
                    width={400}
                    height={250}
                    className="rounded-lg object-cover w-full"
                />
              </div>
            ))}
          </div>
        )}
        <Interactions likes={CardProps.likes} comments={CardProps.comments} shares={CardProps.shares} />
      </div>
    </div>
  );
};

export default Card;
