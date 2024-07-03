"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import useGetMovies from "@/hooks/useGetMovies";
import Link from "next/link";

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
          movies.map((movie: any) => (
            <li key={movie.id}>
              <Link href={`/${movie.id}`}>
                <Card className="h-[25rem] overflow-y-hidden">
                  <CardContent>
                    <div className="h-[20rem] aspect-[2/3] p-2">
                      <img
                        className="object-cover h-full w-full"
                        src={
                          movie.movieUrl && movie.imageTitle
                            ? movie.movieUrl
                            : "https://placehold.co/1080x1920/png"
                        }
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p>{movie.title}</p>
                  </CardFooter>
                </Card>
              </Link>
            </li>
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
