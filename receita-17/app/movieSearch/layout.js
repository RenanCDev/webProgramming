export default function MoviesSearchLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Bem-vindo à Movies Search</h1>
        </header>
        <main>
          {children}
        </main>
      </div>
    );
  }
  