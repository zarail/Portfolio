/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from '@/utils/getDictionary';
import Image from 'next/image';

type Props = {
  params: {
    locale: 'en' | 'de';
  };
};

export default function ContactsPage({ params }: Props) {
  const dict: any = getDictionary(params.locale) || {};
  const contacts = dict.contact || {};

  return (
    <main className="p-10 space-y-12">
      <h1 className="text-3xl font-bold">{contacts.title}</h1>
      <h2 className="mb-2 whitespace-pre-line">{contacts.description}</h2>
      <section>
        <ul className="space-y-2">
          <li>
            <a
              href="mailto:zahrailkhan@gmail.com"
              className="flex items-center gap-2 text-blue-300"
            >
              <Image src="/gmail.svg" alt="Gmail icon" width={16} height={16} />
              <span>{contacts.emailLabel}</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/zahra-ilkhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-300"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn icon"
                width={16}
                height={16}
              />
              <span>{contacts.linkedinLabel}</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zarail"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-300"
            >
              <Image
                src="/github.svg"
                alt="GitHub icon"
                width={16}
                height={16}
              />
              <span>{contacts.githubLabel}</span>
            </a>
          </li>
        </ul>
      </section>

      {/* <section>
        <h2 className="text-2xl font-semibold">{contacts.form?.heading}</h2>
        <form
          action="https://example.com/contact"
          method="POST"
          className="space-y-4 mt-4"
        >
          <div>
            <label htmlFor="name" className="block mb-1">
              {contacts.form?.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded h-32"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-green-800 text-white rounded hover:bg-green-700"
          >
            {contacts.form?.submit}
          </button>
        </form>
      </section> */}
    </main>
  );
}
