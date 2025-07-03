export default function AlbumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      {/* Header Section with Royal Artwork */}
      <header className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/royal-artwork.png"
            alt="Arte conceitual - Realeza de Amaranthine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 text-left max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            Fragmentos de Amaranthine
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 font-light drop-shadow-lg">
            Um álbum-conceito inspirado na saga de Jack Moneiy
          </p>
          <blockquote className="text-lg md:text-xl italic text-blue-200 max-w-3xl drop-shadow-lg border-l-4 border-yellow-400 pl-6">
            "Entre ecos do sangue real e o destino das essências, nasce a trilha sonora de uma saga imortal."
          </blockquote>
        </div>
      </header>

      {/* SoundCloud Player Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">🔊 Ouça o Álbum Completo</h2>
          <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2045878596%3Fsecret_token%3Ds-MDZOYANeuAA&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              className="rounded-lg"
            />
            <div className="text-xs text-gray-400 mt-4 text-center">
              <a
                href="https://soundcloud.com/marcelosantosmelo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300"
              >
                Marcelo Santos Melo
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/marcelosantosmelo/sets/fragmentos-de-amaranthine/s-MDZOYANeuAA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300"
              >
                Fragmentos De Amaranthine
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Album Cover Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">💿 Capa do Álbum</h2>
          <div className="bg-slate-800/30 p-8 rounded-lg backdrop-blur-sm border border-slate-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Design Oficial</h3>
                <p className="text-lg mb-4 leading-relaxed">
                  A capa oficial de "Fragmentos de Amaranthine" representa a essência mística e sombria da saga. O
                  emblema dourado no topo simboliza a realeza corrompida, enquanto os espinhos retorcidos representam as
                  armadilhas do destino.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  A cascata mágica ao centro evoca os "fragmentos" - pedaços de memórias, essências e destinos que se
                  entrelaçam na narrativa épica de Jack Moneiy e Bianka.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/images/album-cover.png"
                  alt="Capa oficial do álbum Fragmentos de Amaranthine"
                  className="w-full rounded-lg shadow-2xl border border-yellow-400/30 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artwork Showcase Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">👑 Arte Conceitual</h2>
          <div className="bg-slate-800/30 p-8 rounded-lg backdrop-blur-sm border border-slate-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/images/royal-artwork.png"
                  alt="Arte conceitual representando a realeza de Amaranthine"
                  className="w-full rounded-lg shadow-2xl border border-yellow-400/30"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">A Essência Real</h3>
                <p className="text-lg mb-4 leading-relaxed">
                  Esta arte conceitual captura a essência da realeza de Amaranthine - o peso das coroas douradas, o
                  brilho dos cristais azuis que simbolizam o "sangue azul", e a majestade de um império que carrega
                  tanto poder quanto maldição.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  Cada detalhe dourado representa a herança que marca os personagens da saga, enquanto os tons azuis
                  ecoam os temas de destino e essência que permeiam toda a narrativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-purple-400">📝 Sobre o Álbum</h2>
          <div className="bg-slate-800/30 p-8 rounded-lg backdrop-blur-sm border border-slate-700">
            <p className="text-lg mb-6 leading-relaxed">
              <strong className="text-purple-300">"Fragmentos de Amaranthine"</strong> é um álbum conceitual com 10
              faixas que misturam power metal, prog grunge, hip-hop lírico e orquestra sinfônica.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Todas as <strong className="text-blue-300">letras são de autoria de Marcelo Santos Melo</strong>, baseadas
              na série literária <em className="text-purple-300">"Jack Moneiy"</em>.
            </p>
            <p className="text-lg leading-relaxed">
              Os instrumentais foram gerados com auxílio da inteligência artificial{" "}
              <strong className="text-blue-300">Suno AI</strong>, sob direção artística e poética do autor. Os direitos
              comerciais das faixas são de uso exclusivo do projeto Jonhmax.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Track Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-purple-400">🎵 Destaque: "Herança de Sangue Azul"</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800/30 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">"Herança de Sangue Azul"</h3>
              <div className="space-y-3">
                <p>
                  <strong className="text-purple-300">Gênero:</strong> Prog Grunge
                </p>
                <p>
                  <strong className="text-purple-300">Estilo:</strong> Vocais rasgados e limpos alternando, riffs
                  pesados, clima sombrio. Versos melódicos e refrões intensos.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
              <h4 className="text-xl font-bold mb-4 text-blue-400">🛡️ Simbolismo</h4>
              <p className="text-sm leading-relaxed">
                "Sangue azul" como fardo e maldição. A herança como algo contaminado. A melodia carrega raiva contida e
                explosões emocionais — como um Nirvana real tocando no trono de um império espacial.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/30 p-8 rounded-lg backdrop-blur-sm border border-slate-700">
            <h4 className="text-2xl font-bold mb-4 text-purple-400">📖 Narrativa</h4>
            <p className="text-lg mb-6 leading-relaxed">
              Bianka e Jack são levados ao limite por um sistema que tenta moldá-los. Ambos lutam contra o destino,
              lidando com as pressões da linhagem real, o casamento forçado e o peso de decisões que não escolheram.
            </p>

            <h4 className="text-2xl font-bold mb-6 text-blue-400">🎼 Letra – "Herança de Sangue Azul"</h4>
            <p className="text-sm text-gray-400 mb-4">
              Letra por Marcelo Santos Melo
              <br />
              Baseada na obra original – série literária "Jack Moneiy"
            </p>

            <div className="bg-black/40 p-6 rounded-lg border-l-4 border-purple-500">
              <pre className="text-purple-200 leading-relaxed whitespace-pre-wrap font-mono text-sm md:text-base">
                {`Nascemos marcados, selados em dor
Com coroas pesando onde o amor virou favor
Sangue azul que fede, coroa que sangra
Um império à beira, mas ninguém levanta

(Refrão)
Herança maldita, legado de dor
Um trono vazio, sem mais clamor
Eu grito por dentro, sorrio por fora
Sou filho do caos que o destino devora`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/20 p-6 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-gray-400 leading-relaxed">
              🛡️ Todas as composições são licenciadas para uso comercial no projeto Jonhmax. Instrumentais criados com
              assistência da Suno AI sob direção de Marcelo Santos Melo. Direitos reservados.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700">
            <p className="text-xs text-gray-500">Fragmentos de Amaranthine © 2024 - Projeto Jonhmax</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
