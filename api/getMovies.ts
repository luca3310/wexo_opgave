export default async function getMovies(
  page: number,
  type: string,
  genre?: string,
) {
  const range = `${page}-${page + 19}`;
  const response = await fetch(
    `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&sort=year&range=${range}&${genre && "byTags=genre:" + genre}&byProgramType=${type}&lang=da`,
  );
  console.log(
    `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&sort=year&range=${range}&${genre && "byTags=genre:" + genre}&byProgramType=${type}&lang=da`,
  );
  const data = await response.json();

  const filteredData = data.entries.map((movie: any) => ({
    title: movie.title,
    movieUrl: movie.plprogram$thumbnails["orig-1080x1920"]?.plprogram$url,
    imageTitle: movie.plprogram$thumbnails["orig-1080x1920"]?.plprogram$title,
    id: movie.id,
  }));

  return filteredData;
}
