/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from '@/utils/getDictionary';

type Props = {
  params: {
    locale: 'en' | 'de';
  };
};

export default function ResumePage({ params }: Props) {
  const dict: any = getDictionary(params.locale) || {};
  const resume = dict.resume || {};

  return (
    <main className="p-10 space-y-12">
      <h1 className="text-3xl font-bold">{resume.title}</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">{resume.educationTitle}</h2>
        <ul className="space-y-6">
          {resume.education?.map((edu: any, index: number) => (
            <li key={index}>
              <h3 className="text-lg font-bold">{edu.degree}</h3>
              <p className="font-medium">{edu.institution}</p>
              <p className="text-sm">
                {edu.period} | {edu.location}
              </p>
              <ul className="list-disc list-inside mt-2 text-sm">
                {edu.details.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          {resume.experienceTitle}
        </h2>
        <ul className="space-y-6">
          {resume.experience?.map((job: any, index: number) => (
            <li key={index}>
              <h3 className="text-lg font-bold">{job.role}</h3>
              <p className="font-medium">{job.company}</p>
              <p className="text-sm">
                {job.period} | {job.location}
              </p>
              <p className="mt-2 text-sm">{job.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">{resume.skillsTitle}</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {resume.skills?.map((skill: string, index: number) => (
            <span key={index} className="glass skill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">{resume.languagesTitle}</h2>
        <ul className="space-y-1 text-sm">
          {resume.languages?.map((lang: any, index: number) => (
            <li key={index}>
              <strong>{lang.language}:</strong> {lang.level}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">{resume.interestsTitle}</h2>
        <ul className="space-y-1 text-sm">
          {resume.interests?.map((interest: string, index: number) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
