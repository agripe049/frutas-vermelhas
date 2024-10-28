'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css'; // Importa os estilos

function CharacterListContent() {
  const [characters, setCharacters] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page'), 10) : 1;

  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
      const data = await res.json();
      setCharacters(data.results);
    }
    fetchCharacters();
  }, [currentPage]);

  const handleNextPage = () => {
    router.push(`/characters?page=${currentPage + 1}`);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      router.push(`/characters?page=${currentPage - 1}`);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Personagens - Página {currentPage}</h1>
      <ul className={styles.characterList}>
        {characters.map((character) => (
          <li className={styles.characterItem} key={character.id}>
            <Link href={`/characters/${character.id}`}>
              {character.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handlePrevPage} disabled={currentPage === 1}>
          Página Anterior
        </button>
        <button className={styles.button} onClick={handleNextPage}>
          Próxima Página
        </button>
      </div>
    </div>
  );
}

export default function CharacterList() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <CharacterListContent />
    </Suspense>
  );
}
