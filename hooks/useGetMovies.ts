"use client";

import { useEffect, useState } from "react";

interface Movie {
  title: string;
  movieUrl: string | null;
  imageTitle: string | null;
  id: string;
}
import getMovies from "@/api/getMovies";

type useGetMoviesReturn = [Movie[], boolean, boolean, () => void];

export default function useGetMovies(
  type: string,
  genre?: string,
): useGetMoviesReturn {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setIsLoadingMore(true);
    const fetchData = async () => {
      try {
        const data = await getMovies(page, type, genre);
        setMovies((prev) => {
          const existingMovieIds = new Set(prev.map((movie) => movie.id));
          const newMovies = data.filter(
            (movie: Movie) => !existingMovieIds.has(movie.id),
          );
          return [...prev, ...newMovies];
        });
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    };
    fetchData();
  }, [page]);

  const loadMore = async () => {
    setPage((prev) => prev + 1);
  };

  return [movies, isLoading, isLoadingMore, loadMore];
}
