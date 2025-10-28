import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Get in touch</h2>
          <p className="mt-2 text-gray-600">Have a project in mind or just want to say hello? I’d love to hear from you.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Hello Omkar — ${data.get('name') || ''}`);
                const body = encodeURIComponent(`${data.get('message') || ''}\n\n— ${data.get('email') || ''}`);
                window.location.href = `mailto:omkar@example.com?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 transition-colors">
                Send message
              </button>
            </form>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <a href="mailto:omkar@example.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-700">
                <Mail className="h-5 w-5" /> omkar@example.com
              </a>
              <a href="https://github.com/kshirsagar-omkar" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-700">
                <Github className="h-5 w-5" /> github.com/kshirsagar-omkar
              </a>
              <a href="https://www.linkedin.com/in/omkar-kshirsagar" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-700">
                <Linkedin className="h-5 w-5" /> linkedin.com/in/omkar-kshirsagar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
