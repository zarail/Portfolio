import { getDictionary } from '@/utils/getDictionary';
import Image from 'next/image';

type Props = {
  params: {
    locale: 'en' | 'de';
  };
};

export default async function ContactsPage({ params }: Props) {
  const { locale } = await Promise.resolve(params);
  const dict = getDictionary(locale) || {};
  const contacts = dict.contact || {};

  return (
    <main className="p-10 space-y-12">
      <h1 className="text-3xl font-bold">{contacts.title}</h1>
      <h2 className="whitespace-pre-line text-lg font-semibold mb-6">
        {contacts.description}
      </h2>
      <section>
        <ul className="space-y-2">
          <li>
            <a
              href="mailto:zahrailkhan@gmail.com"
              className="flex items-center gap-2"
            >
              <Image
                src="/gmail.svg"
                alt="Gmail icon"
                width={16}
                height={16}
                className="invert dark:invert-0"
              />
              <span>{contacts.emailLabel}</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/zahra-ilkhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn icon"
                width={16}
                height={16}
                className="invert dark:invert-0"
              />
              <span>{contacts.linkedinLabel}</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zarail"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Image
                src="/github.svg"
                alt="GitHub icon"
                width={16}
                height={16}
                className="invert dark:invert-0"
              />
              <span>{contacts.githubLabel}</span>
            </a>
          </li>
        </ul>
      </section>

      {/* <section>
        <h2 className="text-2xl font-semibold">{contacts.form?.heading}</h2>
        <form action="/api/contact" method="POST" className="space-y-4 mt-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              {contacts.form?.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              {contacts.form?.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              {contacts.form?.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 border h-32"
            />
          </div>
          <button type="submit" className="mt-4 btn">
            {contacts.form?.submit}
          </button>
        </form>
      </section> */}
    </main>
  );
}
