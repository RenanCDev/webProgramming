export default function MainPage() {
  return (
    <div>
      <h1>Página Principal</h1>
      <p>Bem-vindo ao meu aplicativo!</p>
    </div>
  );
}

export function Home({ page = "padrão", titulo = "padrão", subtitulo = "padrão" }) {
  return (
    <div>
      <div>{page}</div>
      <div>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <a>Home page app</a>
      </div>
    </div>
  );
}

export function NewFunction({ page = "padrão", titulo = "padrão", subtitulo = "padrão" }) {
  return (
    <div>
      <div>{page}</div>
      <div>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <a>NewFunction page app</a>
      </div>
    </div>
  );
}
