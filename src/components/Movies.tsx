import { MovieProps } from '../types'

export default function Movies(props: { movies: [MovieProps] }) {
  const propsArr = []
  for (let i = 0; i < props.movies.length; i++) {
    propsArr.push(props.movies[i])
  }

  return (
    <ul>
      {propsArr.map((movie) => (
        <li
          key={movie._id}
          className="card bg-base-180 shadow-xl p-6 m-6 glass"
        >
          <h4>{movie.name}</h4>
          <div className="text-secondary">
            <div>
              Oscars: {movie.academyAwardNominations} nominations,{' '}
              {movie.academyAwardWins} wins
            </div>
            <div>Box Office: ${movie.boxOfficeRevenueInMillions} million</div>
            <div>Budget: ${movie.budgetInMillions.toFixed(0)} million</div>
            <div>Rotten Tomatoes score: {movie.rottenTomatoesScore}%</div>
            <div>Runtime: {movie.runtimeInMinutes} minutes</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
