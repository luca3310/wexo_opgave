import { useState, useEffect } from "react";
import getMovieById from "@/api/getMovieById";

interface Movie {
  title: string;
  description: string;
  movieUrl: string | null;
  imageTitle: string | null;
  id: string;
}

type useGetMovieDetailReturn = [Movie | undefined, boolean];

export default function useGetMovieDetail({
  id,
}: {
  id: string;
}): useGetMovieDetailReturn {
  const [movieDetail, setMovieDetail] = useState<Movie | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieById(id);
        setMovieDetail(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return [movieDetail, isLoading];
}
