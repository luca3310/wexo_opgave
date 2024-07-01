"use client";
import RenderMovies from "@/components/RenderMovies";

export default function Home() {
  return (
    <main>
      <RenderMovies type="movie" />
      <RenderMovies type="serie" />
      <RenderMovies genre="action" type="movie" />
      <RenderMovies genre="comedy" type="serie" />
      <RenderMovies genre="thriller" type="movie" />
      <RenderMovies genre="drama" type="serie" />
    </main>
  );
}
