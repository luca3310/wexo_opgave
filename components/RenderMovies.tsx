"use client";

import useGetMovies from "@/hooks/useGetMovies";
import MovieCard from "./MovieCard";
import { Movie } from "@/types";

interface RenderMoviesProps {
  genre?: string;
  type: string;
}

export default function RenderMovies({ genre, type }: RenderMoviesProps) {
  const [movies, isLoadingMovies, isLoadingMore, loadMore] = useGetMovies(
    type,
    genre,
  );

  return (
    <>
      <h1 className="p-3 px-7 text-3xl font-bold">
        {genre} {type}
      </h1>
      <ul className="flex gap-2 overflow-x-scroll w-full p-7">
        {!isLoadingMovies ? (
          movies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <li>
            loading {genre} {type}
          </li>
        )}
        {(!isLoadingMovies && !isLoadingMore && (
          <button className="h-[25rem] aspect-[2/3]" onClick={loadMore}>
            load more
          </button>
        )) ||
          (!isLoadingMovies && <div>Loading more</div>)}
      </ul>
    </>
  );
}
