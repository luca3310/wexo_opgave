"use client";

import useGetMovieDetail from "@/hooks/useGetMovieDetail";
import useWishList from "@/hooks/useWishlist";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Details() {
  const pathname = usePathname();
  const [movieDetail, isLoading] = useGetMovieDetail({ id: pathname });
  const [addToWishlist, removeFromWishlist, isWishlisted] = useWishList({
    pathname: pathname,
  });

  return (
    <main className="flex flex-col items-center gap-5">
      {isLoading ? (
        <p>loading</p>
      ) : movieDetail ? (
        <>
          <section className="w-full aspect-[7/1]">
            <img
              className="w-full h-full object-cover"
              src={
                movieDetail.movieUrl
                  ? movieDetail.movieUrl
                  : "https://placehold.co/1080x1920/png"
              }
            />
          </section>
          <section className="flex justify-between w-[80%]">
            <h2 className="text-4xl">{movieDetail.title}</h2>
            {isWishlisted ? (
              <Button onClick={() => removeFromWishlist(movieDetail.id)}>
                unwishlist
              </Button>
            ) : (
              <Button onClick={() => addToWishlist(movieDetail.id)}>
                wishlist
              </Button>
            )}
          </section>
          <section className="w-[80%] p-1">
            <p>{movieDetail.description}</p>
          </section>
        </>
      ) : (
        <p>wrong id</p>
      )}
    </main>
  );
}
