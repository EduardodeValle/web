import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

interface ToggleHeartProps {
  id: number;
  initialIsFavorite: boolean;
}

const ToggleHeart = ({ id, initialIsFavorite }: ToggleHeartProps) => {
  const [isFilled, setIsFilled] = useState(initialIsFavorite);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
      setIsFilled(!!favorites[id]);
    }
  }, [id]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favoritesJson = localStorage.getItem("favorites");
      const favorites = JSON.parse(favoritesJson || "{}");
      let updatedFavorites = { ...favorites };

      if (isFilled) {
        updatedFavorites[id] = true;
      } else {
        const { [id]: omitted, ...remainingFavorites } = updatedFavorites;
        updatedFavorites = remainingFavorites;
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  }, [isFilled, id]);

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };

  return (
    <FontAwesomeIcon
      data-testid="heart-icon"
      icon={isFilled ? solidHeart : regularHeart}
      onClick={toggleHeart}
      style={{ cursor: "pointer" }}
    />
  );
};

export default ToggleHeart;
