import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Portfolio',
    description:
      'A modern personal site with 3D hero, smooth animations, and responsive design. Built to showcase projects and writing.',
    tags: ['React', 'Tailwind', 'Spline'],
    live: '#',
    repo: 'https://github.com/kshirsagar-omkar',
  },
  {
    title: 'E‑commerce Dashboard',
    description:
      'Analytics dashboard with charts, orders, and product management backed by a secure API.',
    tags: ['React', 'Node', 'MongoDB'],
    live: '#',
    repo: 'https://github.com/kshirsagar-omkar',
  },
  {
    title: 'Chat Application',
    description:
      'Real‑time chat with rooms, typing indicators, and message persistence.',
    tags: ['Next.js', 'Socket.io', 'Redis'],
    live: '#',
    repo: 'https://github.com/kshirsagar-omkar',
  },
  {
    title: 'Design System',
    description:
      'Composable UI components with theming, accessibility, and docs site.',
    tags: ['Storybook', 'TypeScript', 'Radix'],
    live: '#',
    repo: 'https://github.com/kshirsagar-omkar',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600">A selection of recent work. Clean code, thoughtful UX, and performance‑first builds.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center">
                <span className="text-5xl">🛠️</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-1 text-sm text-blue-700 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1 text-sm text-gray-700 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
