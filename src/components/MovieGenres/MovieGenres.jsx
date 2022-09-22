export default function MovieGenres({ genres }) {
  return (
    <>
      <p>{genres && genres.map(genre => `${genre.name} `)}</p>
    </>
  );
}
