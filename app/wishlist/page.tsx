"use client";

import MovieCard from "@/components/MovieCard";
import useGetWishlist from "@/hooks/useGetWishlist";
import { Movie } from "@/types";

export default function Wishlist() {
  const [movies, isLoadingWishlist] = useGetWishlist();

  return (
    <>
      <h1 className="p-3 px-7 text-3xl font-bold">Wishlist</h1>
      <ul className="flex flex-col gap-2 w-full p-7">
        {!isLoadingWishlist ? (
          movies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <li>Loading wishlist...</li>
        )}
      </ul>
    </>
  );
}
