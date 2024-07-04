"use client";
import RenderMovies from "@/components/RenderMovies";

export default function Home() {
  return (
    <main>
      <RenderMovies type="movie" />
      <RenderMovies type="series" />
      <RenderMovies genre="action" type="movie" />
      <RenderMovies genre="action" type="series" />
      <RenderMovies genre="comedy" type="movie" />
      <RenderMovies genre="comedy" type="series" />
      <RenderMovies genre="thriller" type="movie" />
      <RenderMovies genre="thriller" type="series" />
      <RenderMovies genre="war" type="movie" />
      <RenderMovies genre="war" type="series" />
      <RenderMovies genre="romance" type="movie" />
      <RenderMovies genre="romance" type="series" />
      <RenderMovies genre="drama" type="movie" />
      <RenderMovies genre="drama" type="series" />
      <RenderMovies genre="crime" type="movie" />
      <RenderMovies genre="crime" type="series" />
      <RenderMovies genre="documentary" type="movie" />
      <RenderMovies genre="documentary" type="series" />
      <RenderMovies genre="horror" type="movie" />
      <RenderMovies genre="horror" type="series" />
    </main>
  );
}
