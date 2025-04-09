export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-50 via-white to-emerald-100 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
        We are the <span className="text-emerald-700">Soil</span>, the <span className="text-amber-500">Seed</span>, the <span className="text-blue-500">Soul</span>.
      </h1>
      <p className="mt-6 text-lg text-gray-700 max-w-xl">
        Reclaiming harmony between land and life through regeneration, BPSS healing, and sacred tech.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a href="#get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition">
          🌱 Get Involved
        </a>
        <a href="#donate" className="border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold py-3 px-6 rounded-xl transition">
          ❤️ Donate
        </a>
        <a href="#about" className="text-emerald-600 underline underline-offset-4 hover:text-emerald-800 font-medium py-3 px-4">
          📖 Learn More
        </a>
      </div>
    </main>
  );
}
