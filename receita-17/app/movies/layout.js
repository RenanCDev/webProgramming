export default function MoviesLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Bem-vindo à Movies</h1>
        </header>
        <main>
          {children}
        </main>
      </div>
    );
  }
  