export default function CharacterCard({ character }) {
  return (
    <div className='char-card'>
      <img src={character.image} alt={`Foto de ${character.name}`} />
      <h2>{character.name}</h2>

      <div className='char-info'>
        <span><b>Espécie: </b>{character.species}</span>
        <span><b>Gênero: </b>{character.gender}</span>
        <span><b>Status: </b>{character.status}</span>
      </div>

      <div className='char-episodes'>
        <b>Participações: </b>
        <span>{character.episode.length} episódios</span>
      </div>
    </div>
  )
}