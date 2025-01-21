import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Viva Santana!</h1>

      {/* Link utilizando o componente Next.js */}
      <Link href="/novarota">Rota 1</Link> 
      
      <br /><br />
      
      {/* Link tradicional com HTML */}
      <a href="/novarota">Rota 1, jeito antigo</a>
    </div>
  );
}
