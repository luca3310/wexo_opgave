export default async function getMovieById(id: string) {
  const response = await fetch(
    `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas${id}?form=json`,
  );
  const data = await response.json();
  const filteredData = {
    title: data.title,
    description: data.description,
    movieUrl: data.plprogram$thumbnails["orig-1080x1920"]?.plprogram$url,
    imageTitle: data.plprogram$thumbnails["orig-1080x1920"]?.plprogram$title,
    id: data.id.split("/")[6],
  };

  return filteredData;
}
