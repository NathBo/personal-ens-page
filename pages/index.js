import Image from "next/image";
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

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <header className="text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#Teaching" className="hover:underline">
                Teaching
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

        <Image
          className="rounded-full"
          src="/photo_Nathan_Boyer.jpg"
          alt="My photo"
          width={250}
          height={250}
          priority
        />
        <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Nathan Boyer</h1>
        </header>

        <section id="about">
        <h2 className="text-3xl">About Me</h2>
        <p className="text-lg">I am in M1 Computer Science at ENS Ulm (Paris).</p>
        <div>
      <span>You can see my L3 grades </span>
      <a href="/grades.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
        here
      </a>
    </div>
        </section>

        <section id="projects">
        <h2 className="text-3xl">My Projects</h2>
        <p className="text-lg">Here are some of the projects I’ve worked on.</p>
        <ul className="list-disc ml-5">
          <li>
            A miniPureScript compiler in Ocaml
          </li>
          <li>
            A microprocessor that runs a clock, programmable via a custom assembly langage.
          </li>
          <li>
            Kfet_Invaders : A snes game playable on original snes hardware. <br/>

            <a href="k-fet_invaders.sfc" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
           Download
          </a>
          </li>
          <li>
            GitAne : A plugin-based git written in C++ that is highly customizable.
          </li>
          <li>
            A static analyser for a subset of C.
          </li>
        </ul>
      </section>

      <section id="Teaching">
      <h2 className="text-3xl">Teaching</h2>
      <p className="text-lg">I gave some tutoring in the prépa MPSI of Saint-Louis, as part of the TalENS program.</p>
      <a href="/tutorat" className="text-blue-300 hover:underline">
        More Info
      </a>
      
      </section>

      <section id="contact">
        <h2 className="text-3xl">Contact Me</h2>
        <p className="text-lg">email: nathan.boyer@ens.psl.eu</p>
      </section>


      </main>
    </div>
  );
}
