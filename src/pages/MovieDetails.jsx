import styles from "./MovieDetails.module.css";
import { useParams } from "react-router";
import { get } from "../Utils/httpClient";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";

export function MovieDetails()  {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then(data => { 
      setMovie(data);
      setIsLoading(false);
    });
   }, [movieId])

   if (isLoading) {
     return <Spinner />;
   }

   const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
  <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.movieImage}`}
       src={imageUrl}
       alt={movie.title} />
      <div className={`${styles.col}${styles.MovieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
         <strong>Genres:</strong>{" "}
         {/* {movie.genres.map(genre => genre.name).join(", ")} */}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
          </p>
      </div>
  </div>
  );
}