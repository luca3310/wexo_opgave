import { useState, useEffect } from "react";
import getMovieById from "@/api/getMovieById";
import { Movie } from "@/types";

type useGetWishlistReturn = [Movie[], boolean];

export default function useGetWishlist(): useGetWishlistReturn {
  const [isLoadingWishlist, setIsLoadingWishlist] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchWishlistMovies = async () => {
      try {
        const wishList = localStorage.getItem("wishlist");
        if (wishList) {
          const movieIds = JSON.parse(wishList);
          const moviePromises = movieIds.map((id: string) => getMovieById(id));
          const moviesData = await Promise.all(moviePromises);
          setMovies(moviesData);
        }
      } catch (error) {
        console.error("Failed to fetch wishlist movies:", error);
      } finally {
        setIsLoadingWishlist(false);
      }
    };

    fetchWishlistMovies();
  }, []);

  return [movies, isLoadingWishlist];
}
