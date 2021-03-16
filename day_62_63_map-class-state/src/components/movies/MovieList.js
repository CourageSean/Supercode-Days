import MovieItem from './MovieItem'
import movies from './moviesData'
console.log(movies)

const MovieList = () => {
    return (
        <div className="grid">
            {movies.map((movie, i) => <MovieItem
                key={i}
                titleProps={movie.title}
                yearProps={movie.year}
                rateProps={movie.rate}
                durationProps={movie.duration}
                directorProps={movie.director}
                genreProps={movie.genre}
            />)}

        </div>
    );
}

export default MovieList;