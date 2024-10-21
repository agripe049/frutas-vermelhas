'use client';  // Isso marca o componente como sendo um componente cliente

import { useEffect, useState } from 'react';

export default function CharacterDetail({ params }) {
  const { id } = params;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setCharacter(data);
    }
    fetchCharacter();
  }, [id]);

  if (!character) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Espécie: {character.species}</p>
      <p>Gênero: {character.gender}</p>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
}
