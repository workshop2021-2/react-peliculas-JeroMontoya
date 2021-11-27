const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmYyYTIzMWM5ZWFjYzkyNDFhOGE5MTk0MWFhYjI2OCIsInN1YiI6IjYxOWFiZTNhMjcxNjcxMDA0M2U4YWNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rqeKKTfpILzOvsDa4PUB1e0NPLaA5gu85_afUB_fiio",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then(result => result.json());
}