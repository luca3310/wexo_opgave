import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Movie } from "@/types";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <li key={movie.id}>
      <Link href={`/${movie.id}`}>
        <Card className="h-[25rem] overflow-y-hidden">
          <CardContent>
            <div className="h-[20rem] aspect-[2/3] p-2">
              <img
                className="object-cover h-full w-full"
                alt={
                  movie.imageTitle && movie.movieUrl
                    ? movie.imageTitle
                    : "no image"
                }
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
  );
}
