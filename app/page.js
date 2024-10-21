'use client';  // Para habilitar o uso de hooks no lado do cliente
import Link from 'next/link';
import styles from './page.module.css'; // Importa os estilos

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo ao Rick and Morty API!</h1>
      <p className={styles.description}>
        Explore a lista de personagens, episódios e mais informações do universo de Rick and Morty.
      </p>
      <Link href="/characters">
        <button className={styles.button}>Ver Personagens</button>
      </Link>
      <img 
        src="https://upload.wikimedia.org/wikipedia/en/4/4f/Rick_and_Morty_logo.png" 
        alt="Rick and Morty Logo" 
        className={styles.image}
      />
    </div>
  );
}
