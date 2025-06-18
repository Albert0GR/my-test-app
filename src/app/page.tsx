import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#ffffff] flex flex-col justify-center items-center p-8">
      
      <div className="text-center mb-12">
        <Image
          src="/exam-icon.png"  // <-- Puedes colocar aquí el icono que desees
          alt="Examen Logo"
          width={120}
          height={120}
        />
        <h1 className="text-4xl font-bold text-[#00796b] mt-4">Examen de Tecnología</h1>
        <p className="text-lg text-gray-600 mt-2">
          Plataforma de evaluación
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-3xl">

        <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-[#00796b] mb-4">Examen Secundaria</h2>
          <p className="text-center text-gray-600 mb-6">
            Ingresa al examen de tecnologías para alumnos de secundaria.
          </p>
          <Link
            href="/examen-secundaria"
            className="bg-[#00796b] text-white py-3 px-6 rounded-full text-lg font-medium shadow-md hover:bg-[#00695c] transition"
          >
            Iniciar Examen
          </Link>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-[#00796b] mb-4">Examen 2do Primaria</h2>
          <p className="text-center text-gray-600 mb-6">
            Ingresa al examen de tecnología para alumnos de primaria.
          </p>
          <Link
            href="/examen-2dop"
            className="bg-[#00796b] text-white py-3 px-6 rounded-full text-lg font-medium shadow-md hover:bg-[#00695c] transition"
          >
            Iniciar Examen
          </Link>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-[#00796b] mb-4">Juegos de memoria</h2>
          <p className="text-center text-gray-600 mb-6">
            Ingresa para practicar.
          </p>
          <Link
            href="/examen-2dop"
            className="bg-[#00796b] text-white py-3 px-6 rounded-full text-lg font-medium shadow-md hover:bg-[#00695c] transition"
          >
            juego 1
          </Link>
          <br />
          <Link
            href="/examen-2dop"
            className="bg-[#00796b] text-white py-3 px-6 rounded-full text-lg font-medium shadow-md hover:bg-[#00695c] transition"
          >
            juego 2
          </Link>
          
        </div>

        <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-[#00796b] mb-4">Información</h2>
          <p className="text-center text-gray-600 mb-6">
            Examen final.
          </p>
          <a
            href="#"
            className="bg-[#00796b] text-white py-3 px-6 rounded-full text-lg font-medium shadow-md opacity-50 cursor-not-allowed"
          >
            Pronto disponible
          </a>
        </div>

      </div>

      <footer className="mt-20 text-sm text-gray-500">
        © 2025 - Plataforma Educativa
      </footer>
    </div>
  );
}
