export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold text-purple-500 mb-8 drop-shadow-lg">Página Principal</h1>
      <p className="text-lg text-gray-300">Bem-vindo ao meu aplicativo!</p>
    </div>
  );
}

export function Home({ page = "padrão", titulo = "padrão", subtitulo = "padrão" }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-6">
      <div className="text-gray-400 mb-4">{page}</div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-500 mb-2">{titulo}</h1>
        <h2 className="text-2xl font-medium text-gray-300">{subtitulo}</h2>
        <a className="text-purple-400 hover:text-purple-300 mt-4 inline-block">Home page app</a>
      </div>
    </div>
  );
}

export function NewFunction({ page = "padrão", titulo = "padrão", subtitulo = "padrão" }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-6">
      <div className="text-gray-400 mb-4">{page}</div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-500 mb-2">{titulo}</h1>
        <h2 className="text-2xl font-medium text-gray-300">{subtitulo}</h2>
        <a className="text-purple-400 hover:text-purple-300 mt-4 inline-block">NewFunction page app</a>
      </div>
    </div>
  );
}
