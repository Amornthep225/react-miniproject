
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard'
import { Movie } from '../modals/movie.modal'
import './MovieList.scss'
import { RootState } from '../../store/store'


const MovieList = () => {
  const {movies} = useSelector((state:RootState) => state.movies)
  return (
    <div className='movie-container'>
      {movies && movies.map((movie) => <MovieCard movie={movie} />)}
    </div>
  )
}

export default MovieList