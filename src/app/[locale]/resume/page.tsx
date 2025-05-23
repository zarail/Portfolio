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

      <section className="mb-8 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 uppercase">
          {resume.skillsTitle}
        </h2>
        <div className="flex flex-wrap gap-2 text-sm font-thin">
          {resume.skills?.map((skill: string, index: number) => (
            <span key={index} className="glass skill shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 uppercase">
          {resume.educationTitle}
        </h2>
        <ul className="space-y-6">
          {resume.education?.map((edu: any, index: number) => (
            <li key={index}>
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="mb-4 text-lg font-medium">{edu.institution}</p>
              <p className="mb-4">
                {edu.period} | {edu.location}
              </p>
              <ul className="text-base list-none mt-2 italic">
                {edu.details.map((item: string, i: number) => (
                  <li key={i}>— {item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 uppercase">
          {resume.experienceTitle}
        </h2>
        <ul className="space-y-6">
          {resume.experience?.map((job: any, index: number) => (
            <li key={index}>
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <p className="mb-4 text-lg font-medium">{job.company}</p>
              <p className="mb-4">
                {job.period} | {job.location}
              </p>
              <p className="text-base list-none mt-2 italic">
                {job.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 uppercase">
          {resume.languagesTitle}
        </h2>
        <ul className="space-y-1 mb-4 text-lg font-medium">
          {resume.languages?.map((lang: any, index: number) => (
            <li key={index}>
              <strong>{lang.language}:</strong> {lang.level}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 uppercase">
          {resume.interestsTitle}
        </h2>
        <ul className="space-y-1 mb-4 text-lg font-medium">
          {resume.interests?.map((interest: string, index: number) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
