import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Open to opportunities
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Omkar Kshirsagar
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Full‑stack developer crafting modern, accessible experiences. I design and build products with a focus on performance, simplicity, and delightful interactions.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-2.5 text-gray-800 hover:bg-gray-50 font-medium">
              Contact
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative h-[420px] sm:h-[520px] w-full rounded-2xl border border-gray-100 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[500px] bg-gradient-to-b from-blue-50 to-transparent" />
    </section>
  );
}
