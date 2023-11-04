import { QuotesProps } from '../types'
import { MovieProps } from '../types'
import { CharacterProps } from '../types'

export default function Quotes(props: {
  quotes: [QuotesProps]
  movies: [MovieProps]
  characters: [CharacterProps]
}) {
  const findCharacter = (characterID: string) => {
    let char = ''
    for (let i = 0; i < props.characters.length; i++) {
      if (props.characters[i]._id === characterID) {
        char = props.characters[i].name
      }
    }
    return char
  }

  const findMovie = (movieID: string) => {
    let movie = ''
    for (let i = 0; i < props.movies.length; i++) {
      if (props.movies[i]._id === movieID) {
        movie = props.movies[i].name
      }
    }
    return movie
  }

  const propsArr = []
  for (let i = 0; i < props.quotes.length; i++) {
    propsArr.push(props.quotes[i])
  }

  return (
    <ul>
      {propsArr.map((quote) => (
        <li key={quote.id} className="card bg-base-180 shadow-xl p-6 m-6 glass">
          <h4 className="italic">"{quote.dialog}"</h4>
          <div className="text-secondary">
            <div> - {findCharacter(quote.character)}</div>
            <div>{findMovie(quote.movie)}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
