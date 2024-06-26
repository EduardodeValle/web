"use client";
import Image from "next/image";
import ToggleHeart from "./ToggleHeart";

import { CharacterProps } from "../types";

interface CharacterCardProps {
  character: CharacterProps;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { id, name, status, species, location, image, isFavorite } = character;
  return (
    <div className="bg-white">
      <Image
        src={image}
        alt="character"
        width={300}
        height={300}
        className="rounded-xl object-cover"
      />
      <div className="p-2">
        <h4 className="text-lg font-semibold truncate">
          {name} <ToggleHeart id={id} initialIsFavorite={isFavorite} />
        </h4>
        <div>
          <p className="text-sm text-gray-600 truncate">
            {status} - {species}
          </p>
          <p className="text-sm text-gray-600 break-words">
            Location: {location.name}
          </p>
        </div>
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition duration-300 ease-in-out"
          onClick={() => {
            window.location.href = `/details?id=${id}`;
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
