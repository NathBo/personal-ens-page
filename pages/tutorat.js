import localFont from "next/font/local";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function Tutoring() {
  return (
    <div
    className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header className="py-10">
        <h1 className="text-4xl font-bold">Tutorat TalENS à Saint-Louis</h1>
      </header>
      <h1 className="font-[family-name:var(--font-geist-mono)]">Je donne, du 4 novembre au 16 février, des séances de td de soutien en maths à des étudiants de MPSI (prépa maths 1ère année) à Saint-Louis
      dans le cadre de <a href="https://pesu.ens.fr/talens/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">TalENS</a>.
      Les séances ont lieu en moyenne toutes les 2 semaines.</h1>
      <h2 className="text-3xl">Feuilles d'exercices</h2>
      <h1 className="font-[family-name:var(--font-geist-mono)]">Les feuilles d'exercice sont disponibles ci-dessous.</h1>
      <ul className="list-disc ml-5">
        <li><a href="/tutoring/Méthodes_de_raisonnement_et_logique.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
          Méthodes de raisonnement et logique
          </a></li>
        <li><a href="/tutoring/Tutorat_Ensembles_et_applications.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
          Ensembles et Applications
          </a></li>
        <li><a href="/tutoring/Tutorat_nombres_complexes.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
          Nombres complexes
          </a></li>
      </ul>
    </div>
  );
}
