"use client";
import RenderMovies from "@/components/RenderMovies";

export default function Home() {
  return (
    <main>
      <RenderMovies type="movie" />
      <RenderMovies type="series" />
      <RenderMovies genre="action" type="movie" />
      <RenderMovies genre="comedy" type="series" />
      <RenderMovies genre="thriller" type="movie" />
      <RenderMovies genre="drama" type="series" />
    </main>
  );
}
