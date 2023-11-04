import { CharacterProps } from '../types'

export default function Characters(props: { characters: [CharacterProps] }) {
  const propsArr = []
  for (let i = 0; i < props.characters.length; i++) {
    propsArr.push(props.characters[i])
  }

  return (
    <ul>
      {propsArr.map((char) => (
        <li key={char._id} className="card bg-base-180 shadow-xl p-6 m-6 glass">
          <h4> Name: {char.name}</h4>
          <div className="text-secondary">
            <div>Birth: {char.birth || 'unknown'}</div>
            <div>Death: {char.death || 'unknown'}</div>
            <div>Gender: {char.gender || 'unknown'}</div>
            <div>Hair: {char.hair || 'unknown'}</div>
            <div>Height: {char.height || 'unknown'}</div>
            <div>Race: {char.race || 'unknown'}</div>
            <div>Realm: {char.realm || 'unknown'}</div>
            <div>Spouse: {char.spouse || 'unknown'}</div>
            <button className="btn btn-outline btn-primary btn-xs">
              <a href={char.wikiUrl}>More info</a>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
