import { useEffect, useState } from 'react'
import Movies from './components/Movies'
import Characters from './components/Characters'
import Quotes from './components/Quotes'

export default function Main() {
  const [movies, setMovies] = useState([])
  const [characters, setCharacters] = useState([])
  const [quotes, setQuotes] = useState([])
  const [currentDisplay, setCurrentDisplay] = useState('')

  const MOVIEURL = 'https://the-one-api.dev/v2/movie'
  const CHARACTERURL = 'https://the-one-api.dev/v2/character'
  const QUOTEURL = 'https://the-one-api.dev/v2/quote'
  const headers = new Headers()
  headers.append('Authorization', `Bearer ${process.env.REACT_APP_TOKEN}`)
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: headers
  }

  const setSelection = (input: string) => setCurrentDisplay(input)

  useEffect(() => {
    // check if movies in cache
    const localMovies = localStorage.getItem('localMovies')
    if (localMovies) {
      const parsedMovies = JSON.parse(localMovies)
      setMovies(parsedMovies)
    }
    // else fetch movies from external API, store in cache
    else {
      fetch(MOVIEURL, requestOptions).then((data) => {
        data.json().then((data) => {
          localStorage.setItem('localMovies', JSON.stringify(data.docs))
          setMovies(data.docs)
        })
      })
    }

    // check if characters in cache
    const localCharacters = localStorage.getItem('localCharacters')
    if (localCharacters) {
      const parsedCharacters = JSON.parse(localCharacters)
      setCharacters(parsedCharacters)
    }
    // else fetch characters from external API, store in cache
    else {
      fetch(CHARACTERURL, requestOptions).then((data) => {
        data.json().then((data) => {
          localStorage.setItem('localCharacters', JSON.stringify(data.docs))
          setCharacters(data.docs)
        })
      })
    }

    // check if quotes in cache
    const localQuotes = localStorage.getItem('localQuotes')
    if (localQuotes) {
      const parsedQuotes = JSON.parse(localQuotes)
      setQuotes(parsedQuotes)
    }
    // else fetch quotes from external API, store in cache
    else {
      fetch(QUOTEURL, requestOptions).then((data) => {
        data.json().then((data) => {
          localStorage.setItem('localQuotes', JSON.stringify(data.docs))
          setQuotes(data.docs)
        })
      })
    }
  }, [])

  return (
    <main className="flex flex-col items-center">
      {!currentDisplay && <h3 className="text-secondary">Make a selection:</h3>}
      {currentDisplay && (
        <h3 className="text-accent">Current selection: {currentDisplay}</h3>
      )}
      <menu className="space-x-2">
        <button
          className="btn btn-primary sm:btn-sm md:btn-md lg:btn-lg"
          onClick={() => setSelection('Movies')}
        >
          Movies
        </button>
        <button
          className="btn btn-secondary sm:btn-sm md:btn-md lg:btn-lg"
          onClick={() => setSelection('Characters')}
        >
          Characters
        </button>
        <button
          className="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg"
          onClick={() => setSelection('Quotes')}
        >
          Quotes
        </button>
      </menu>
      {/* @ts-expect-error */}
      {currentDisplay === 'Movies' && <Movies movies={movies} />}
      {currentDisplay === 'Characters' && (
        /* @ts-expect-error */
        <Characters characters={characters} />
      )}
      {currentDisplay === 'Quotes' && (
        // @ts-expect-error
        <Quotes quotes={quotes} movies={movies} characters={characters} />
      )}
    </main>
  )
}
