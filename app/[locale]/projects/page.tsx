import { getDictionary } from '@/utils/getDictionary';

type Props = {
  params: Promise<{
    locale: 'en' | 'de';
  }>;
};

type Project = {
  id?: string | number;
  title: string;
  description: string;
  githubLink: string;
  websiteLink: string;
};

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const dict = (await getDictionary(locale)) || {};
  const projects = dict.projects || {};

  return (
    <main className="p-10 space-y-12">
      <h1 className="text-3xl font-bold">{projects.title}</h1>
      <h2 className="whitespace-pre-line text-lg font-semibold mb-6">
        {projects.description}
      </h2>

      {projects?.project?.map((project: Project, index: number) => (
        <section key={project.id || index} className="mb-8 p-6 shadow-lg">
          <h3 className="text-lg font-bold mb-4">{project.title}</h3>
          <p>{project.description}</p>
          <div className="flex gap-x-4 mt-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 btn"
            >
              {projects.goGHBtn}
            </a>
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 btn"
            >
              {projects.goWBtn}
            </a>
          </div>
        </section>
      ))}
    </main>
  );
}
