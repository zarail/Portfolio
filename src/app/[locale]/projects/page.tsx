/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from '@/utils/getDictionary';

type Props = {
  params: {
    locale: 'en' | 'de';
  };
};

export default function ProjectsPage({ params }: Props) {
  const dict: any = getDictionary(params.locale) || {};
  const projects = dict.projects || {};

  return (
    <main className="p-10 space-y-12">
      <h1 className="text-3xl font-bold">{projects.title}</h1>
      <h2 className="mb-2 whitespace-pre-line">{projects.description}</h2>
      <section>
        <ul className="space-y-6">
          {projects?.project?.map((project: any, index: number) => (
            <li key={index}>
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <div className="flex gap-x-4 mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-green-900 transition"
                >
                  {projects.goGHBtn}
                </a>
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-green-900 transition"
                >
                  {projects.goWBtn}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
