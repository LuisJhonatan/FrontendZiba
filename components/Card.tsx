import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faStar as faStarRegular,
} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { CardUI } from "./UI/cardUI";
import { Button } from "./UI/button";

interface CardProps {
  imageSrc: string;
  hoverImageSrc: string;
  name: string;
  price: number;
  stock: number;
  rating: number;
  className?: string;
}

export const Card = ({
  imageSrc,
  hoverImageSrc,
  name,
  price,
  stock,
  rating,
  className,
}: CardProps) => {
  const [currentImage, setCurrentImage] = useState(imageSrc);

  const handleMouseEnter = () => setCurrentImage(hoverImageSrc);
  const handleMouseLeave = () => setCurrentImage(imageSrc);

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const partialStar = rating - fullStars;
    const emptyStars = 5 - fullStars - (partialStar > 0 ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStarSolid}
              className="text-yellow-500 h-3 w-3 sm:w-4 sm:h-4"
            />
          ))}
        {partialStar > 0 && (
          <span className="relative">
            <FontAwesomeIcon
              icon={faStarRegular}
              className="text-gray-300 h-3 w-3 sm:w-4 sm:h-4"
            />
            <span
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${partialStar * 100}%` }}
            >
              <FontAwesomeIcon
                icon={faStarSolid}
                className="text-yellow-500 h-3 w-3 sm:w-4 sm:h-4"
              />
            </span>
          </span>
        )}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <FontAwesomeIcon
              key={index + fullStars + 1}
              icon={faStarRegular}
              className="text-gray-300"
            />
          ))}
      </>
    );
  };

  return (
    <CardUI className={className} hoverable>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={currentImage}
          alt={name}
          width={600}
          height={600}
          className="w-full  object-cover rounded-xl"
          priority
        />

        <FontAwesomeIcon
          icon={faHeart}
          className="absolute top-[4px] right-[4px] sm:top-[10px] sm:right-[10px] text-gray-700 cursor-pointer w-4 h-4 sm:w-8 sm:h-8 bg-white p-2 rounded-full hover:bg-primary hover:text-white"
        />
      </div>
      <div className="pt-2 sm:p-4">
        <h3 className="text-[12px] sm:text-[20px] font-semibold mb-2 pl-2 max-h-10 sm:max-h-16 line-clamp-2">
          {name}
        </h3>
        <p className="text-[14px] sm:text-[16px] text-gray-600 pl-3 sm:pl-4 font-semibold">
          S/. {price.toFixed(2)}
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 pl-3 sm:pl-4">
          Stock: {stock}
        </p>
        <div className="flex items-center pl-2">
          {renderStars()}
          <span className="ml-2 text-xs sm:text-sm text-gray-600 ">
            {rating}/5
          </span>

          <FontAwesomeIcon
            icon={faCartPlus}
            className="ml-auto w-4 h-4 sm:w-8 sm:h-8 p-2 rounded-full text-footer hover:bg-footer hover:text-white cursor-pointer"
          />
        </div>
        <div className="px-2 sm:px-0">
          <Button variant="detail" className="text-[12px] sm:text-[16px] sm:mt-2">
            Ver detalles
          </Button>
        </div>
      </div>
    </CardUI>
  );
};
