import './globals.css';  // Se você tiver um arquivo de estilos globais
import styles from './layout.module.css'; // Importa os estilos

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <header className={styles.header}>
          <h1>Rick and Morty Explorer</h1>
          <nav className={styles.nav}>
            <a href="/">Home</a> | <a href="/characters">Personagens</a>
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
