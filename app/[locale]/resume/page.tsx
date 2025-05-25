import { getDictionary } from '@/utils/getDictionary';

type Props = {
  params: {
    locale: 'en' | 'de';
  };
};

type Education = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
};

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
};

type Language = {
  language: string;
  level: string;
};

type Resume = {
  title?: string;
  skillsTitle?: string;
  skills?: string[];
  educationTitle?: string;
  education?: Education[];
  experienceTitle?: string;
  experience?: Experience[];
  languagesTitle?: string;
  languages?: Language[];
  interestsTitle?: string;
  interests?: string[];
};

export default async function ResumePage({ params }: Props) {
  const { locale } = await Promise.resolve(params);
  const dict = getDictionary(locale) || {};
  const resume: Resume = dict.resume || {};

  return (
    <main className="p-10 space-y-12">
      <h1 className="text-3xl font-bold">{resume.title}</h1>

      <section className="mb-8 p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 uppercase">
          {resume.skillsTitle}
        </h2>
        <div className="flex flex-wrap gap-2 text-sm font-thin">
          {resume.skills?.map((skill, index) => (
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
          {resume.education?.map((edu, index) => (
            <li key={index}>
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="mb-4 text-lg font-medium">{edu.institution}</p>
              <p className="mb-4">
                {edu.period} | {edu.location}
              </p>
              <ul className="text-base list-none mt-2 italic">
                {edu.details.map((item, i) => (
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
          {resume.experience?.map((job, index) => (
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
          {resume.languages?.map((lang, index) => (
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
          {resume.interests?.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
