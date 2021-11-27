import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../Utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [Page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {  
    setisLoading(true);
    const searchUrl = search
     ? "/Search/movie?query=" + search + "&page=" + Page
     : "/discover/movie?Page=" + Page;
    get(searchUrl).then((data) => {
       setMovies((prevMovies) => prevMovies.concat(data.results));
       sethasMore(data.Page < data.total_pages);
       setisLoading(false);
    });
  },  [search, Page]);

  return ( 
   <InfiniteScroll dataLength={movies.length}
    hasMore={hasMore}
    next={() => setpage(prevPage => prevPage + 1)}
    loader={<Spinner />}
    >
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
   </InfiniteScroll>
  );  
}